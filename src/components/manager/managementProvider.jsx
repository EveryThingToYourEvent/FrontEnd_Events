import { waitFor } from '@testing-library/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPCategory, FillProvidersCategories } from '../../redux/action/pCategoriesAction'
import { FillProviderNotConfirm, updateProvider } from '../../redux/action/providerAction'
import { addNewProviderCategory, getAllProvidersCategories } from '../../redux/axios/pCategoriesAxios'
import { getAllProviderNotConfirm, updateProviders, updatePCcode } from '../../redux/axios/providerAxios'
import '../../style/g.css'

export const ManagementProvider = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        // שליפת הספקים שלא אושרו מהשרת
        getAllProviderNotConfirm().then(pnc => {
            dispatch(FillProviderNotConfirm(pnc.data))
        })
        // שליפת הקטגוריות מהשרת
        getAllProvidersCategories().then(pc => {
            dispatch(FillProvidersCategories(pc.data))
        })
    }, [])

    // שליפת רשימת הספקים שלא אושרו מהרדוסר
    let listProviderNC = useSelector(pn => pn.ProviderReducer.listProviderNotConfirm)
    // let listPCategory = useSelector(pc => pc.ProvidersCategoriesReducer.listProvidersCategories)
    let flagOfAddCategory = false
    const [o, setO] = useState("")
    const [g, setG] = useState({ provCode: 1 })
    const updateProviderConfirm = (k) => {
        debugger
        let y = {
            provCode: k.provCode, userId: k.userId, provLogo: k.provLogo, provTitle: k.provTitle,
            provAdvertisementText: k.provAdvertisementText, provPic1: k.provPic1, provPic2: k.provPic2,
            provPic3: k.provPic3, provPic4: k.provPic4, provPic5: k.provPic5, provPic6: k.provPic6,
            provPic7: k.provPic7, provPic8: k.provPic8, provEmail: k.provEmail, provPhone: k.provPhone,
            provCity: k.provCity, provAddress: k.provAddress, provClip: k.provClip, provStatus: "אושר",
            provIsDelete: k.provIsDelete, pccode: k.pccode, otherCategory: k.otherCategory
        }
        updateProviders(y.provCode, y).then(up => {
            dispatch(updateProvider(up.data))
        })
    }
    // const x=null
    // const g=0
    const addProviderCategory = async (newPCategory) => {
        debugger
        // console.log("^^^^^^^");
        // console.log(newPCategory);
        let pccode

        // יצירת קטגוריה חדשה כאשר הקטגוריה שהספק מיוחס אליה לא נמצאת עדיין ברשימת הקטגוריות
        let a = { pcname: newPCategory.otherCategory, pcisDelete: false }
        // הוספת הקטגוריה החדשה לרשימת הקטגוריות
        await addNewProviderCategory(a).then(pc => {
            dispatch(addNewPCategory(pc.data))
            // console.log("מחלקה חדשה");
            // console.log(pc.data);
            // לאחר שהוספנו את הקטגוריה החדשה היא נמצאת בסוף הרשימה 
            // אנו לוקחות את הקוד של הקטגוריה שנוספה שהוא נמצאת במקום האחרון 
            // ומכניסות את הקוד של הקטגוריה החדשה לתוך משתנה השומר את הקוד החדש
            pccode = pc.data[pc.data.length - 1].pccode
            // console.log("הקוד החדש");
            // console.log(pccode);
        })
        // שמירת השם של הקטגוריה בתוך משתנה
        setO(a.pcname)
        // שמירת אוביקט הקטגוריה החדשה שנוספה בתוך משתנה 
        setG(newPCategory)
        // console.log(g)

        // הפעלת פונקציה המעדכנת את הקוד קטגוריה שאליה משויך הספק שהוספנו עכשיו
        // לקוד הקטגוריה החדשה שהוספנו השמור במשתנה pccode 
        // שלחנו לפונקציה בשרת המקבלת את קוד הספק ומעדכנת את הקוד קטגוריה שאחיה משויך לקוד ששלחנו
        await updatePCcode(newPCategory.provCode, pccode).then(pc => {
            if (pc.data) {
                // ע"מ לרענן את הדף נשלוף שוב את רשימת הספקים הלא מאושרים ולהסיר את הספקים שאושרו כבר
                getAllProviderNotConfirm().then(pnc => {
                    dispatch(FillProviderNotConfirm(pnc.data))
                })
            }
        })
    }
    return <>
        {
            listProviderNC.map((j, i) => (
                j.pccode == 1 && j.otherCategory != null ? flagOfAddCategory = true : flagOfAddCategory = false,
                <div className='a' key={i}>
                    <div className='b'>
                        <div className='c'>
                            <div className='d'>
                                <span className='e'>{i}</span>
                                <span className='f'>{j.provTitle}</span>
                                <h2 className='g'>New Brunch Recipe</h2>
                                <span className='h'>These last few weeks I have been working hard on a new brunch
                                    recipe for you all.</span>
                                <div className="card-read i">המשך</div>
                                {/* <span className='j'>C</span> */}
                            </div> </div>
                        <img style={{ float: 'right' }} src={j.provLogo} width="15%" height="10%;" alt="" className="card-media" />
                        <br></br>
                        {/* <div class="btn-group"> */}
                        <button type='button' className="btn btn-light text-secondary col-sm-5" style={{ margin: "1%" }} onClick={() => updateProviderConfirm(j)}>לאישור</button>
                        {flagOfAddCategory && <button type='button' className="btn btn-light text-secondary col-sm-5" style={{ margin: "1%" }} onClick={() => addProviderCategory(j)}>הוספת המחלקה</button>}
                        {/* </div> */}
                    </div>

                    <div className='k'></div>
                </div>


            ))
        }

    </>
}