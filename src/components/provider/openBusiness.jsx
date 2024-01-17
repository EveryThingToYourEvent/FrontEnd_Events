import { TextField } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FillProvidersCategories } from "../../redux/action/pCategoriesAction"
import { addNewProvider } from "../../redux/action/providerAction"
import { getAllProvidersCategories } from "../../redux/axios/pCategoriesAxios"
import { addProvider } from "../../redux/axios/providerAxios"
export const OpenBusines = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        getAllProvidersCategories().then(pc => {
            dispatch(FillProvidersCategories(pc.data))
        })
    }, [])
    let listProviderCategory = useSelector(pc => pc.ProvidersCategoriesReducer.listProvidersCategories)
    // let name = useRef()
    // let password = useRef()
    let logo = useRef()
    let title = useRef()
    let advertisementText = useRef()
    let provPic1 = useRef()
    let provPic2 = useRef()
    let provPic3 = useRef()
    let provPic4 = useRef()
    let provPic5 = useRef()
    let provPic6 = useRef()
    let provPic7 = useRef()
    let provPic8 = useRef()
    let provEmail = useRef()
    let provPhone = useRef()
    let provCity = useRef()
    let provAddress = useRef()
    let provClip = useRef()
    let provCategory = useRef(1)
    let otherCategory = useRef("")
    let parameterOfCategory=useRef("")
    // const [pccode, setPccode] = useState(1)
    let currUserID = useSelector(cu => cu.UserReducer.userCurrentID)
    const [val, setVal] = useState(0)
    const [parameterCategory, setParameterCategory] = useState("")
    // let currLogin = { pass: pass.current.value, name: name.current.value }
    const addProviderIfConfirm = () => {
        debugger
        console.log(parameterCategory)
        let currProvider = {
            userId: currUserID, provLogo: logo.current.value, provTitle: title.current.value, provAdvertisementText: advertisementText.current.value,
            provPic1: provPic1.current.value, provPic2: provPic2.current.value, provPic3: provPic3.current.value, provPic4: provPic4.current.value,
            provPic5: provPic5.current.value, provPic6: provPic6.current.value, provPic7: provPic7.current.value, provPic8: provPic8.current.value,
            provEmail: provEmail.current.value, provPhone: provPhone.current.value, provCity: provCity.current.value, provAddress: provAddress.current.value,
            provClip: provClip.current.value, provStatus: "לא אושר", provIsDelete: false, pccode: provCategory.current.value, otherCategory: otherCategory.current.value
        }
        // console.log(provPic1.current.value.toString());
        // console.log(title.current.value);
        // console.log(currProvider);
        // console.log(pccode);
        // console.log(provCategory.current.value);
        addProvider(currProvider).then(p => {
            dispatch(addNewProvider(p.data))
        })
    }
const [arr,setArr]=useState(
    {0:["llllllllll",1]}
)
let count =0;
    const addParameterCategoryForNewCategory = () => {
        setArr({[count ]: ["hhhh","gggggggggggggg"]
     } )
        // setArr(arr,...1,["sss","sss"])
        console.log(arr);
        count=count+1
        console.log(count);
        let buttonPC = document.createElement("button")
        buttonPC.innerText = "+"
        buttonPC.style.borderRadius="10%"
        buttonPC.id=count
        let inputPC=document.createElement("input")
        inputPC.style.borderRadius="5%"
        inputPC.id=count
        let brPC=document.createElement("br")
        brPC.id=count
        buttonPC.addEventListener('click',addParameterCategoryForNewCategory)
        let b=document.createElement("button")
        b.innerText="🗑️"
        b.style.borderRadius="10%" 
        b.id=count
        // b.addEventListener('click',{
        let idAppendChild = document.getElementById("j")
        // let textFiled = document.createElement("TextField")
        // textFiled.id = "outlined-basic18"
        //  textFiled.style.vari     .variant="outlined"
        // console.log(textFiled);
        // idAppendChild.appendChild(textFiled)
        idAppendChild.appendChild(b)
        idAppendChild.appendChild(inputPC)
        idAppendChild.appendChild(buttonPC)       
        idAppendChild.appendChild(brPC)
        buttonPC.style.opacity="0.5"
    }
    return (<>

        {/* <TextField inputRef={name} style={{ marginTop: '1%' }} id="outlined-basic" label="Name" variant="outlined" type={"text"} /> */}
        <br />
        <TextField value={currUserID} style={{ marginTop: '1%' }} id="outlined-basic1" label="Password" variant="outlined" type={"password"} />
        <br />
        <TextField inputRef={logo} style={{ marginTop: '1%' }} id="outlined-basic2" label="Logo" variant="outlined" type={"text"} />
        <br />
        <TextField inputRef={title} style={{ marginTop: '1%' }} id="outlined-basic3" label="Title" variant="outlined" type={"text"} />
        <br />
        <TextField inputRef={advertisementText} style={{ marginTop: '1%' }} id="outlined-basic4" label="AdvertisementText" variant="outlined" type={"text"} />
        <br />
        <TextField inputRef={provPic1} style={{ marginTop: '1%' }} id="outlined-basic5" label="provPic1" variant="outlined" type={"file"} />
        <br />
        <TextField inputRef={provPic2} style={{ marginTop: '1%' }} id="outlined-basic6" label="provPic2" variant="outlined" type={"file"} />
        <br />
        <TextField inputRef={provPic3} style={{ marginTop: '1%' }} id="outlined-basic7" label="provPic3" variant="outlined" type={"file"} />
        <br />
        <TextField inputRef={provPic4} style={{ marginTop: '1%' }} id="outlined-basic8" label="provPic4" variant="outlined" type={"file"} />
        <br />
        <TextField inputRef={provPic5} style={{ marginTop: '1%' }} id="outlined-basic9" label="provPic5" variant="outlined" type={"file"} />
        <br />
        <TextField inputRef={provPic6} style={{ marginTop: '1%' }} id="outlined-basic10" label="provPic6" variant="outlined" type={"file"} />
        <br />
        <TextField inputRef={provPic7} style={{ marginTop: '1%' }} id="outlined-basic11" label="provPic7" variant="outlined" type={"file"} />
        <br />
        <TextField inputRef={provPic8} style={{ marginTop: '1%' }} id="outlined-basic12" label="provPic8" variant="outlined" type={"file"} />
        <br />
        <TextField inputRef={provEmail} style={{ marginTop: '1%' }} id="outlined-basic13" label="provEmail" variant="outlined" type={"email"} />
        <br />
        <TextField inputRef={provPhone} style={{ marginTop: '1%' }} id="outlined-basic14" label="provPhone" variant="outlined" type={"text"} />
        <br />
        <TextField inputRef={provCity} style={{ marginTop: '1%' }} id="outlined-basic15" label="provCity" variant="outlined" type={"text"} />
        <br />
        <TextField inputRef={provAddress} style={{ marginTop: '1%' }} id="outlined-basic16" label="provAddress" variant="outlined" type={"text"} />
        <br />
        <TextField inputRef={provClip} style={{ marginTop: '1%' }} id="outlined-basic17" label="provClip" variant="outlined" type={"file"} />
        <br />
        <select onChange={(e) => setVal(e.target.value)} ref={provCategory} style={{ width: '20%', marginRight: '40%', marginTop: '1%' }} className="form-control">
            <option value="0">בחר קטגוריה רצויה</option>
            {
                listProviderCategory.map((j, i) => (
                    <option key={i} value={j.pccode}>{j.pcname}</option>
                ))
            }
            <option key={-1} value="-1">אחר</option>
        </select>
        {val == 0 && <h6 style={{color:'red'}}>לא בחרת קטגוריה רצויה אנא בחר שנית</h6>}
        {val == -1 && <TextField onChange={(e) => setParameterCategory(e.target.value)} inputRef={otherCategory} style={{ marginTop: '1%' }} id="outlined-basic17" label="other Category" variant="outlined" type={"text"} />}
        <br />
        <h5>אנא הכנס פרמטרים לקטגוריה:</h5>
        {parameterCategory != "" && <TextField inputRef={parameterOfCategory} style={{ marginTop: '1%' }} id="outlined-basic17" label="Parameter Of Category" variant="outlined" type={"text"} />}
        {parameterCategory != "" && <button onClick={() => addParameterCategoryForNewCategory()} style={{ marginTop: '1%' }}>+</button>}
        <br />
        <div id="j"></div>
        <br />
        <button style={{ marginTop: '1%' }} type="submit" className="btn btn-primary" onClick={() => addProviderIfConfirm()}>Submit</button>
    </>
    )
}