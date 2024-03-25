import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"
import { getAllUser } from "../../redux/axios/userAxios"
import { getAllEventType } from "../../redux/axios/eventTypeAxios"
import { getAllProvider, getAllProviderConfirm } from "../../redux/axios/providerAxios"
import { getAllProvidersCategories } from "../../redux/axios/pCategoriesAxios"
import { getAllETandPC } from "../../redux/axios/et&pcAxios"
import { FillUser } from "../../redux/action/userAction"
import { FillEventType } from "../../redux/action/eventTypeAction"
import { FillProvidersCategories } from "../../redux/action/pCategoriesAction"
import { FillProvider, FillProviderConfirm } from "../../redux/action/providerAction"
import { FillETandPC } from "../../redux/action/et&pcAciton"


export const ManagerNav = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const [userData, confirmData, providerData, etApcData, pcData, etData] = await Promise.all([
                    getAllUser(),
                    getAllProviderConfirm(),
                    getAllProvider(),
                    getAllETandPC(),
                    getAllProvidersCategories(),
                    getAllEventType(),
                ]);

                if (isMounted) {
                    dispatch(FillUser(userData.data));
                    dispatch(FillProviderConfirm(confirmData.data));
                    dispatch(FillProvider(providerData.data));
                    dispatch(FillETandPC(etApcData.data));
                    dispatch(FillProvidersCategories(pcData.data));
                    dispatch(FillEventType(etData.data));
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [])

    return <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <div className="container-fluid" id="myNav">
                {/* <a className="navbar-brand">Logo</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <NavLink className="myLink" to={'managementProvider'}>ספקים הממתינים לאישור</NavLink>
                    <NavLink className="myLink" to={'providersList'}>ספקים שאושרו</NavLink>
                    <NavLink className="myLink" to={'categoiriesList'}>כל השרותים</NavLink>
                    <NavLink className="myLink" to={'eventTypeList'}>תכנן לי אירוע</NavLink>
                    <NavLink className="myLink" to={'usersList'}>משתמשים</NavLink>
                    <NavLink className="myLink" to={'/'}><a href="https://app.crisp.chat/website/c3f800a4-0a5c-4f11-80fc-fd436b9bf610/inbox">הודעות</a></NavLink>
                    <NavLink className="myLink" to={'/'}>חזור לתפריט משתמש</NavLink>
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