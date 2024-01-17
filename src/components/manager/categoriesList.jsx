import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FillProvidersCategories } from "../../redux/action/pCategoriesAction"
import { addNewProviderCategory} from "../../redux/axios/pCategoriesAxios"
import { Link } from "react-router-dom"
import { addETandPC } from "../../redux/axios/et&pcAxios"

export const CategoriesList = () => {
    let d = useDispatch()
    const allEventTypes = useSelector(x => x.EventTypeReducer.listEventType)
    const allCategories = useSelector(x => x.ProvidersCategoriesReducer.listProvidersCategories)
    // const [updateCategories, setUpdateCategories] = useState([])
    const obj = allCategories[0]// ?? {}
    const keys = Object.keys(obj).filter(x => x != "pcisDelete")
    let pcname = useRef()
    let selectedOptions = []

    // useEffect(() => {
    //     setUpdateCategories(allCategories);
    // }, [allCategories]);
    // useEffect(() => {
    //     if (updateCategories.length > 0) {
    //         debugger
    //     }
    // }, [updateCategories]);

    const addCategory = () => {
        debugger
        const obj = { pccode: 0, pcname: pcname.current?.value, pcisDelete: false }
        addNewProviderCategory(obj).then(x => {
            d(FillProvidersCategories(x.data))            
            // setUpdateCategories(x.data)
            updateETtoPC(x.data)
        })
    }
    const updateETtoPC = (categoiriesList) => {
        debugger
        let currCategory = categoiriesList[categoiriesList.length - 1].pccode
        let obj = { eventTypeProvcode: 0, eventTypeCode: 0, pccode :currCategory}
        selectedOptions.forEach(ETcode => {
            obj.eventTypeCode = ETcode
            addETandPC(obj)
        });
    }
    const handleSelectChange = (event) => {
        selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);
        // console.log(selectedOptions);
    };

    return <>
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
                    allCategories.map((category, index) => (
                        <tr key={index}>
                            {
                                keys.map((key, i) => (
                                    <td key={i}>{category[key]}</td>
                                ))
                            }
                            {/* אולי עדיף שלא תהיה אפשרות למחיקה */}
                            {/* <button onClick={() => toDell(category.pccode)}>to delete</button> */}
                        </tr>
                    ))
                }
                <tr><td>----------הוספת קטגוריה---------</td></tr>
                <tr>
                    {/* {
                        keys.map((key, i) => (
                            <td key={i}><input placeholder={`Enter ${key}`}/></td>
                        ))
                    } */}
                    <td><input ref={pcname} placeholder="enter categoryName" id="pcname" /></td>
                    <td>
                        <form>
                            <label htmlFor="eventType">Choose events types:</label>
                            <select defaultValue={[0]} id="eventType" name="eventType" size={allEventTypes.length} multiple onChange={handleSelectChange}>
                                {
                                    allEventTypes.map((x, index) => {
                                        return <option key={index} value={x.eventTypeCode}>{x.eventTypeName}</option>
                                    })
                                }
                            </select> </form>
                    </td>
                    <td><button onClick={() => addCategory()}>הוספה</button></td>
                </tr>
            </tbody>
        </table>
    </>
}