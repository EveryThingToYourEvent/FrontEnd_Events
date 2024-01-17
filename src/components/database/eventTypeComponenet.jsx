import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { FillEventType } from "../../redux/action/eventTypeAction"
import { getAllEventType } from "../../redux/axios/eventTypeAxios"
import { SetCurrEvent } from "../../redux/action/pCategoriesAction"

export const EventType = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        debugger
        getAllEventType().then(et => {
            dispatch(FillEventType(et.data))
        })
        
    }, [])
    let eventTypeList = useSelector(x => x.EventTypeReducer.listEventType)
    const showProvidersCategories = (eventTypeCode) => {
        debugger
        dispatch(SetCurrEvent(eventTypeCode))
    }
    return (
        <>
            {
                eventTypeList.map((x, index) => (
                    <Link key={index} to={'/providersCategories'}>
                        <div onClick={()=>showProvidersCategories(x.eventTypeCode)} style={{ display: 'inline-block', width: '18%', margin: '2%', borderStyle: 'ridge', borderWidth: '5px', paddingTop: '15px', backgroundColor: 'white' }}>
                            <img src={'https://localhost:44348/pic/לוגו 1 (1).jpg'} height='120px' width={'100%'}></img>
                            <h6>קוד אירוע: {x.eventTypeCode}</h6>
                            <h6>{x.eventTypeName} </h6>
                            <h6>{x.eventTypeLogo}</h6>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}