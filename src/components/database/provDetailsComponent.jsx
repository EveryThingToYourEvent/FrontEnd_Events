import { useEffect, useState } from "react"
import { getProviderByCode } from "../../redux/axios/providerAxios"
import { useDispatch, useSelector } from "react-redux"
import React from "react"
import { addOpinionToProvider, getAllOpinionToProviders } from "../../redux/axios/opinionToProviderAxiox"
import { FillOpinionsToProviders } from "../../redux/action/opinionsAction"
import EventToProvider from "./eventToProvider"

export const ProvDetails = () => {

    let d = useDispatch()

    const currProviderCode = useSelector(x => x.ProviderReducer.currProvider)
    const opinionsToProvider = useSelector(x => x.OpinionToProviderReducer.listOpinionToProvider)
        .filter(x => x.provCode == currProviderCode && x.opisShow == "כן")
    // console.log("opinionsToProvider", opinionsToProvider)
    const currUser = useSelector(x => x.UserReducer.userCurrent)
    const [opinionText, setOpinionText] = useState('')
    const [isToShow, setIsToShow] = useState(false)
    // console.log("code",currProviderCode);
    const [currProviderDetails, setCurrProvider] = useState({});
    useEffect(() => {
        getAllOpinionToProviders().then(x => d(FillOpinionsToProviders(x.data)))
        getProviderByCode(currProviderCode).then(x => {
            setCurrProvider(x.data);
            // console.log("details", currProviderDetails);
            debugger
        })
    }, [])
    const handleOpinionChange = (event) => {
        setOpinionText(event.target.value);
        debugger
    };
    const handleToShow = (event) => {
        debugger
        setIsToShow(event.target.checked)
    }

    const isLogin = () => {
        //לבדוק פה האם המשתמש מחובר, אם לא:
        //"עמ לשלוח חוות דעת עליך להתחבר למערכת"
        //וגם לבדוק האם השמתמש הנוכחי הוא בעל העסק
        //אם כן: ספק לא יכול להוסיף חוות דעת לעצמו
    }

    const addOpinion = (event) => {
        event.preventDefault()
        debugger
        isLogin();
        let opIsShow;
        opIsShow = isToShow ? "כן" : "לא"
        let obj = {
            opcode: 0,
            opdate: Date.getdate(),//"2010-01-10T00:00:00",
            optext: opinionText,
            provCode: currProviderDetails.provCode,
            userId: currUser.userId ?? "213936636",
            oppic: ".jpg",
            opisShow: opIsShow,
            opisDelete: false
        }

        addOpinionToProvider(obj).then(x => d(FillOpinionsToProviders(x.data)))
        if (!isToShow)
            alert("חוות דעתך נוספה בהצלחה, רק הנמען יכול לראות.")
    }
    return <>
        <div>
            {/* {console.log("details", currProviderDetails)} */}
            <div style={{ display: 'inline-block', width: '18%', margin: '2%', borderStyle: 'ridge', borderWidth: '5px', paddingTop: '15px', backgroundColor: 'white' }}>
                <img src={currProviderDetails?.provLogo}></img>
                <h6>כותרת עסק {currProviderDetails?.provTitle}</h6>
                <h6> פירוט עסק {currProviderDetails?.provAdvertisementText}</h6>
            </div>
        </div>
        <EventToProvider></EventToProvider>
        {
            opinionsToProvider.map((x, index) => {
                return <div key={index}>
                    <h4>{x.opcode}</h4>
                    <h4>{x.opdate}</h4>
                    <h4>{x.optext}</h4>
                </div>
                { debugger }
            })

        }
        <div>
            <label>להוספת חוות דעת</label>
            <textarea id="opinion" value={opinionText} onChange={handleOpinionChange}></textarea>
            <label htmlFor="toShow">everyone can see yor opinion</label>
            <input type="checkbox" id="toShow" checked={isToShow} onChange={handleToShow}></input>
            <button onClick={addOpinion}>שלח</button>
        </div>

    </>
}