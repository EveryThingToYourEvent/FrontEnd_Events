import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FillEventType } from "../../redux/action/eventTypeAction"
import { addEventType, deleteEventType, getAllEventType } from "../../redux/axios/eventTypeAxios"

export const EventTypeList = () => {
    let d = useDispatch()
    const allEventTypes = useSelector(x => x.EventTypeReducer.listEventType)
    const obj = allEventTypes[0]// ?? {}
    const keys = Object.keys(obj).filter(x => x != "eventTypeIsDelete")
    let ETLogo = useRef()
    let ETName = useRef()

    // useEffect(() => {
    //     getAllEventType().then(x => d(FillEventType(x.data)))
    // }, [])


    // const toDell = (eventTypeCode) => {
    //     deleteEventType(eventTypeCode).then(x => {
    //         d(FillEventType(x.data))
    //     })
    // }

    const addEType = () => {
        const obj = { eventTypeCode: 0, eventTypeName: ETName.current?.value, eventTypeLogo: ETLogo.current?.value, eventTypeIsDelete: false }
        addEventType(obj).then(x => d(FillEventType(x.data)))
    }

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
                    allEventTypes.map((eventType, index) => (
                        <tr key={index}>
                            {
                                keys.map((key, i) => (
                                    <td key={i}>{eventType[key]}</td>
                                ))
                            }
                            {/* כנ"ל בקטגוריות */}
                            {/* <button onClick={() => toDell(eventType.eventTypeCode)}>to delete</button> */}
                        </tr>
                    ))
                }
                <span>----------הוספת סוג אירוע---------</span>
                <tr>
                    <td><input ref={ETName} id="eventTypeName" placeholder="enter eventTypeName" /></td>
                    <td><input ref={ETLogo} id="eventTypeLogo" placeholder="enter eventTypeLogo" /></td>                    
                    <td><button onClick={() => addEType()}>הוספה</button></td>
                </tr>
            </tbody>
        </table>
    </>
} 