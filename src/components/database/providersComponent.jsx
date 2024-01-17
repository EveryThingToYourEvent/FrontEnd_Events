import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { FillEventsProviderById } from "../../redux/action/eventToProviderAction"
import { FillProvider, FillProviderConfirm, setCurrProvider } from "../../redux/action/providerAction"
import { getEventsToProviderByID } from "../../redux/axios/eventToProviderAxios"
import { getAllProvider, getAllProviderConfirm } from "../../redux/axios/providerAxios"

export const Providers = () => {
    let allPtoPC = []
    const currPC = useSelector(r => r.ProvidersCategoriesReducer.currPC)
    allPtoPC = useSelector(x => x.ProviderReducer.listProviderConfirm).filter(x => x.pccode == currPC)

    let d = useDispatch()
    useEffect(() => {
        getAllProvider().then(p=>{
            d(FillProvider(p.data))
        })
        getAllProviderConfirm().then(p => {
            d(FillProviderConfirm(p.data))
        })
    }, [])
    const setProviderCode = (provCode) => {
        debugger
        console.log(provCode);
        d(setCurrProvider(provCode))
        getEventsToProviderByID(provCode).then(etp => {
            d(FillEventsProviderById(etp.data))
        }) 
    }
    return <>
        {
            allPtoPC.map((x, index) => (
                <Link key={index} to={'/provDetails'} onClick={() => setProviderCode(x.provCode)}>
                    <div style={{ display: 'inline-block', width: '18%', margin: '2%', borderStyle: 'ridge', borderWidth: '5px', paddingTop: '15px', backgroundColor: 'white' }}>
                        <img src={'https://localhost:44348/pic/לוגו 1 (1).jpg'} height='120px' width='100%'></img>
                        <h6>קוד בעל עסק: {x.pccode}</h6>
                        <h6>{x.userid} </h6>
                        <h6>{x.provemail}</h6>
                    </div>
                </Link>
            ))
        }

    </>
}