import { useState } from "react";

export const Contact = () => {
    const [opinionText, setOpinionText] = useState('')
    const handleOpinionChange = (event) => {
        setOpinionText(event.target.value);
    }
    const send = () => {
        //שליחת ההערה למנהל
        alert("ההערה נשלחה למנהל, תודה ולהתראות")
    }
    return <>
        <div>
            <h6>מס' טלפון: 025802363</h6>
            <label>שלח בקשה:</label>
            <br></br>
                <textarea id="opinion" value={opinionText} onChange={handleOpinionChange}></textarea>
                <br></br><button onClick={send}>שלח</button>
    </div>
    </>
}