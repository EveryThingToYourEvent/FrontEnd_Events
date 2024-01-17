import { TextField } from "@mui/material"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { getAllUser } from "../../redux/axios/userAxios"
import { FillUser, FillUserCurrent } from "../../redux/action/userAction"
import addEventToProvider, { addEventsToProvider } from '../../redux/axios/eventToProviderAxios'


export const Login = () => {
    let manager = { pass: "1234", name: "manager" }
    let name = useRef()
    let wholeDay = useRef()
    let notes = useRef()
    let n = useNavigate()
    let d = useDispatch()
    const usersList = useSelector(x => x.UserReducer.listUser)
    let currProvider = useSelector(p => p.ProviderReducer.currProvider)
    let userCurrent = useSelector(u => u.UserReducer.userCurrentID)
    // let currUserId = useSelector(u => u.UserReaducer.userCurrentID)
    let location=useLocation()
    useEffect(() => {
        getAllUser().then(u => {
            d(FillUser(u.data))
        })
    }, [])

    const login = () => {
        debugger
        // console.log(currProvider);
        // console.log(userCurrent);
        // console.log(location.state);
        let objadd = {
            Epname: name.current.value,
            Epdate: location.state,
            ProvCode: currProvider,
            EpwholeDay:wholeDay.current.value,
            UserId: userCurrent,
            Epnotes:notes.current.value ,
            Epstatus:'נקבע',
            EpisDelete:false
        }
        // console.log(objadd);
        addEventsToProvider(objadd)


        // let currLogin = { pass: pass.current.value, name: name.current.value }
        // if (currLogin.name == manager.name && currLogin.pass == manager.pass){
        //     alert("manager")
        //     n('/manager')
        // }
        // else {
        //     // בדיקה האם הוא כבר קיים במערכת
        //     usersList.forEach(user => {
        //         if (currLogin.pass == user.userPassword && currLogin.name == user.userFname) {
        //             d(FillUserCurrent(currLogin.name))
        //             alert("רשום")
        //             n('/')
        //         }
        //     });
        //     //אם עדיין לא עבר ניתוב, כלומר- לא רשום במערכת
        //     n('/signUp')
        // }

    }
    return (<>
        <br />
        <TextField inputRef={name} id="outlined-basic" label="Name" variant="outlined" />
        <br />
        <TextField inputRef={wholeDay} id="outlined-basic" label="wholeDay" variant="outlined" />
        <br />
        <TextField inputRef={notes} id="outlined-basic" label="notes" variant="outlined" />
        <br />
        <button type="submit" className="btn btn-primary" onClick={() => login()}>Submit</button>
        <Outlet></Outlet>
    </>
    )
}