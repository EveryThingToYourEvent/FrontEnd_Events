import { useEffect, useRef } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { FillProvider, FillProviderConfirm, setCurrProvider, setCurrProviderPass } from "../../redux/action/providerAction"
import { getAllProvider, getAllProviderConfirm } from "../../redux/axios/providerAxios"
import "../../style/nav.css"
import { getAllProvidersCategories } from "../../redux/axios/pCategoriesAxios"
import { getAllETandPC } from "../../redux/axios/et&pcAxios"
import { FillETandPC } from "../../redux/action/et&pcAciton"
import { FillProvidersCategories } from '../../redux/action/pCategoriesAction'
import { getAllUser } from "../../redux/axios/userAxios"
import { FillUser, FillUserCurrent, FillUserCurrentID } from "../../redux/action/userAction"
import { SetCurrEvent } from "../../redux/action/pCategoriesAction"

export const Nav = () => {
    let name = useRef()
    let password = useRef()
    // let manager = { name: "hadas", pass: "214089401" }
    let manager = { name: "hadas", pass: "1" }
    let users = useSelector(u => u.UserReducer.listUser)
    let providers = useSelector(p => p.ProviderReducer.listProviderConfirm)
    let i
    let userCurrent = useSelector(u => u.UserReducer.userCurrentID)
    // let userCurrent = useSelector(u => u.UserReducer.userCurrent)
    const [val, setVal] = useState("0")
    const [flagLogin, setFlagLogin] = useState(true)
    let currentProvCode = 0
    let Dispatch = useDispatch()
    let navigate = useNavigate()
    useEffect(() => {
        getAllProvider().then(p => {
            Dispatch(FillProvider(p.data))
        })
        getAllProviderConfirm().then(pc => {
            Dispatch(FillProviderConfirm(pc.data))
        })
        getAllETandPC().then(etApc => {
            // console.log(etApc.data);
            Dispatch(FillETandPC(etApc.data))
        })
        // getAllProvidersCategories().then(pc => {
        //     Dispatch(FillProvidersCategories(pc.data))

        //     // setprovidersCategoriesList(pc.data)
        // })
        getAllUser().then(u => {
            Dispatch(FillUser(u.data))
        })
    }, [])


    const loginToWibeSite = () => {
        // alert(users.length)
        // alert(providers.length)
        setFlagLogin(false)
        let currLogin = { pass: password.current.value, name: name.current.value }
        let index
        // if (val == "-1" && currLogin.name==manager.name )
        if (currLogin.name == manager.name && currLogin.pass == manager.pass) {
            alert("manager")
            navigate('manager')
        }
        else
            if (val == "0") {
                debugger
                alert("user")
                for (index = 0; index < users.length; index++) {
                    const element = users[index];
                    if (element.userId == currLogin.pass && element.userFname == currLogin.name) {
                        Dispatch(FillUserCurrent(element))
                        Dispatch(FillUserCurrentID(element.userId))
                        alert("רשום")
                        // console.log(userCurrent)
                        break;
                    }
                }
                if (index == users.length) {
                    alert("you need to sign up")
                    navigate("/signUp")
                }
            }
            else {
                debugger
                alert("provider")
                // console.log(providers);
                Dispatch(FillUserCurrentID(currLogin.pass))
                Dispatch(setCurrProviderPass(currLogin.pass))
                for (index = 0; index < providers.length; index++) {
                    const element = providers[index];
                    if (element.userId == currLogin.pass) {
                        debugger
                        currentProvCode = element.provCode
                        // console.log(currentProvCode); 
                        break;
                    }
                }
                if (index == providers.length) {
                    alert("you didnt sign in provider")
                }
                else {
                    Dispatch(setCurrProvider(currentProvCode))
                    // console.log(currentProvCode);
                    navigate(`everyThingProvider/${currentProvCode}`)
                    //navigate('everyThingProvider')
                }
                for (index = 0; index < users.length; index++) {
                    const element = users[index];
                    if (element.userId == currLogin.pass)
                        break;
                }
                if (index == users.length) {
                    alert("you need to sign up users")
                }
            }
    }
    const closeFromWibeSite = () => {
        setFlagLogin(true)
    }
    // const p =()=>{
    //     debugger
    //     Dispatch(SetCurrEvent(0))
    //     getAllProvidersCategories().then(p=>{
    //         Dispatch(FillProvidersCategories(p.data))
    //     })
    // }

    //ET=0 פונקציה שמגדירה ברדוסר 
    const allEvents = () => {
        Dispatch(SetCurrEvent(0))
        getAllProvidersCategories().then(pc => {
            Dispatch(FillProvidersCategories(pc.data))
        })
    }
    return <div >
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <div className="container-fluid" id="myNav">
                {/* <a className="navbar-brand">Logo</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <NavLink className="myLink" to={'/homePage'}>עמוד בית</NavLink>
                    <NavLink className="myLink" to={'/'}>אודות</NavLink>
                    <NavLink onClick={() => allEvents()} className="myLink" to={'/providersCategories'}>כל השרותים</NavLink>
                    <NavLink className="myLink" to={'/eventType'}>תכנן לי אירוע</NavLink>
                    <NavLink className="myLink" to={'/signUp'}>הרשמה</NavLink>
                    <NavLink className="myLink" to={'/openBusiness'}>פתיחת עסק</NavLink>
                    <div>
                        {/* <select onChange={(e) => setVal(e.target.value)} className="form-control me-2">
                            <option value="0">משתמש</option>
                            <option value="1">ספק</option>
                        </select> */}
                    </div>

                    <form style={{ marginRight: '20%' }} className="d-flex">
                        {/* <div class="form-floating">
                            <input type="text" style={{ margin: "1%"}} class="form-control me-2" id="email" placeholder="Enter email" name="email"/>
                                <label for="email" style={{fontSize:'50%'}}>Email</label>
                        </div> */}
                        {flagLogin && <input ref={name} className="form-control me-2" style={{ margin: "1%" }} type="text" placeholder="שם משתמש" id="userName" />}
                        {flagLogin && <input ref={password} className="form-control me-2" style={{ margin: "1%" }} type="password" id="userPassword" placeholder="סיסמא" />}
                        {flagLogin && <button className="btn btn-warning " style={{ margin: "1%" }} type="button" onClick={() => loginToWibeSite()}>כניסה</button>}
                        {!flagLogin && <button className="btn btn-warning" style={{ marginRight: "390%" }} type="button" onClick={() => closeFromWibeSite()}>התנתקות</button>}
                    </form>
                </div>
            </div>
        </nav>
        <Outlet></Outlet>

    </div>
}