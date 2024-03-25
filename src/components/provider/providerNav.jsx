import { useSelect } from "@mui/base"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Outlet, useParams } from "react-router-dom"
import { FillEventsProviderById } from "../../redux/action/eventToProviderAction"
import { getEventsToProviderByID } from "../../redux/axios/eventToProviderAxios"

export const ProviderNav = () => {
    let dispatch = useDispatch()
    let listEventProviderByID=useSelector(e=>e.EventToProviderReducer.listEventProvider)
    let paramsID=useParams()
    useEffect(() => {
        debugger
        getEventsToProviderByID(paramsID.provCode).then(etp => {
            dispatch(FillEventsProviderById(etp.data))
        })  
    },[])
    // console.log(listEventProviderByID);
    // console.log(paramsID.provCode);
    return <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <div className="container-fluid" id="myNav">
                {/* <a className="navbar-brand">Logo</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <NavLink className="myLink" to={'/homePage'}>עמוד בית</NavLink>
                    <NavLink className="myLink" to={'/'}>אודות</NavLink>
                    <NavLink className="myLink" to={'/'}>הרשמה</NavLink>
                    <NavLink className="myLink" to={'./personalCalender'}>לוח שנה</NavLink>
                    <NavLink className="myLink" to={'/'}>צפייה בפידבקים</NavLink>
                    {/* <NavLink className="myLink" to={'openBusiness'}>פתיחת עסק</NavLink> */}
                    {/* <div>
                        <select onChange={(e) => setVal(e.target.value)} className="form-control me-2">
                            <option value="0">משתמש</option>
                            <option value="1">ספק</option>
                        </select>
                    </div> */}

                    {/* <form style={{ marginRight: '20%' }} className="d-flex">
                        <div class="form-floating">
                            <input type="text" style={{ margin: "1%"}} class="form-control me-2" id="email" placeholder="Enter email" name="email"/>
                                <label for="email" style={{fontSize:'50%'}}>Email</label>
                        </div>
                        {flagLogin && <input ref={name} className="form-control me-2" style={{ margin: "1%" }} type="text" placeholder="שם משתמש" id="userName" />}
                        {flagLogin && <input ref={password} className="form-control me-2" style={{ margin: "1%" }} type="password" id="userPassword" placeholder="סיסמא" />}
                        {flagLogin && <button className="btn btn-warning " style={{ margin: "1%" }} type="button" onClick={() => loginToWibeSite()}>כניסה</button>}
                        {!flagLogin && <button className="btn btn-warning" style={{ marginRight: "390%" }} type="button" onClick={() => closeFromWibeSite()}>התנתקות</button>}
                    </form> */}
                </div>
            </div>
        </nav>
        <Outlet></Outlet>
    </>
}