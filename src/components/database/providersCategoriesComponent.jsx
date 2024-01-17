import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FillProvidersCategories, SetCurrEvent, updateProvidersCategories } from "../../redux/action/pCategoriesAction"
import { setCurrPC } from "../../redux/action/pCategoriesAction"
import {getAllProvidersCategories} from "../../redux/axios/pCategoriesAxios"
export const ProvidersCategories = () => {
    let arr = []
    let allPCtoET = []
    let dispatch = useDispatch()
    let pcList  = useSelector(x => x.ProvidersCategoriesReducer.listProvidersCategories )
    useEffect(() => {
    
        if (pcList == [])

            getAllProvidersCategories().then(pc => {
                dispatch(FillProvidersCategories(pc.data))
                pcList = pc.data
                // setprovidersCategoriesList(pc.data)
            })

    }, [])
    const currEvent = useSelector(x => x.ProvidersCategoriesReducer.currEvent)    //  (קוד האירוע שדרכו הגיעו למחלקות (אם הגיע מדף הבית אז הוא 0
    allPCtoET = useSelector(x => x.ETandPCReducer.listETandPC).filter(x => x.eventTypeCode == currEvent)// כל המחלקות לאירועים בקוד אירוע הזה
    let providersCategoriesList = useSelector(x => x.ProvidersCategoriesReducer.listProvidersCategories)
    let listProvidersCategoriescopy = useSelector(x => x.ProvidersCategoriesReducer.listProvidersCategoriescopy)
    useEffect(() => {
        debugger
        let y = providersCategoriesList
        let g = listProvidersCategoriescopy
        let hhhh = []
        // console.log(currEvent);
        //אם הגיע לקטגוריות דרך אירוע מסויים הוא צריך לראות רק את המחלקות שקשורות לאותו אירוע
        if (currEvent > 0) {
            let prevarr = []
            if (y.length != g.length)
                prevarr = listProvidersCategoriescopy
            else
                prevarr = providersCategoriesList
            debugger

            allPCtoET.forEach(element => {
                arr.push(element.pccode) //מערך של כל קודי הקטגוריות שקשורות לאירוע הזה


                let b = prevarr.filter(m => m.pccode == element.pccode)[0]
                debugger
                hhhh.push(b)                // providersCategoriesList = providersCategoriesList.filter(x => x.pccode in arr)

            });
            dispatch(updateProvidersCategories(hhhh))
            //    providersCategoriesList=hhhh
            debugger
        }
    }
        , [])
 
    const showProviders = (pccode) => {
        dispatch(SetCurrEvent(0))
        dispatch(setCurrPC(pccode))
        debugger
    }

    return (
        <>
            {
                providersCategoriesList.map((x, index) => (
                    <Link key={index} to={'/providers'} onClick={() => showProviders(x.pccode)}>
                        <div style={{ display: 'inline-block', width: '18%', margin: '2%', borderStyle: 'ridge', borderWidth: '5px', paddingTop: '15px', backgroundColor: 'white' }}>
                            <img src={'https://localhost:44348/pic/לוגו 1 (1).jpg'} height='120px' width={'100%'}></img>
                            <h6>category id: {x.pccode}</h6>
                            <h6> {x.pcname} </h6>
                        </div>
                    </Link>
                ))

            }
        </>
    )
}