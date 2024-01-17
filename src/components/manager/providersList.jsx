import { useDispatch, useSelector } from "react-redux"
import { FillProvider } from "../../redux/action/providerAction"
import { deleteProvider, getAllProvider, updateProviders } from "../../redux/axios/providerAxios"
import { useEffect, useState } from "react"

export const ProvidersList = () => {
//רשימת הספקים המאושרים
    let d = useDispatch()
    const allProviders = useSelector(x => x.ProviderReducer.listProvider).filter(x=>x.provStatus=="אושר")
    // allProviders=allProviders
    const obj = allProviders[0]// ?? {}
    const keys = Object.keys(obj).filter(x => x != "provIsDelete")
    const [provToUp, setProvToUp]=useState({})

    // useEffect(() => {
    //     getAllProvider().then(x => d(FillProvider(x.data)))
    // }, [])


    const toDell = (provCode) => {
        deleteProvider(provCode).then(x => {
            // const updatedUsers = allUsers.filter((user) => user.userId !== userId);
            d(FillProvider(x.data))
        })
    }
    const enterProvider=(provCode)=>{
        debugger
        setProvToUp(allProviders.filter(x=>x.provCode==provCode)[0])
        setProvToUp({...provToUp, provStatus:"אושר"})
        updateProviders(provCode,provToUp).then(x=>d(FillProvider(x.data)))
    }

    return (<>

        <table className="table">
            <tbody>
                <tr>
                    {
                        keys.map((x, index) => {
                            return <th key={index}>{x}</th>
                        })
                    }
                </tr>
                {
                    allProviders.map((provider, index) => (
                        <tr key={index}>
                            {
                                keys.map((key, i) => (
                                    <td key={i}>{provider[key]}</td>
                                ))
                            }
                            {provider.provStatus=="לא אושר" && <button onClick={()=>enterProvider(provider.provCode)}>אשר ספק</button>}
                            <button onClick={() => toDell(provider.provCode)}>to delete</button>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>)
} 