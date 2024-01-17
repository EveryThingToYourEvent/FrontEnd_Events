import { useDispatch } from "react-redux"
// import DemoApp from "../personalCalendar"
import { addUser } from "../../redux/axios/userAxios"
import { useState } from "react"

export const SignUp = () => {
    const [user, setUser] = useState({})
    const check = () => {
        let f ='\n'
        if (user.userId == undefined)
            f += ' Id,'
        if (user.userEmail == undefined)
            f += ' email,'
        if (user.userPassword == undefined)
            f += ' password,'
        if (user.userFname == undefined)
            f += ' first name,'
        if (user.userLname == undefined)
            f += ' last name,'
        if (user.userGender == undefined)
            f += ' gender'
        if (f != '\n')
            alert(`you must insert the follow values: ${f}`)
        else 
           sign()
      
            
    }
    const sign = () => {
        alert("user add" + user.userId + user.userFname)
        debugger
        addUser(user)
        
    }
    return (<div class="row g-5">

        <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">Billing address</h4>
            <form className="needs-validation">
                <div className="row g-3">
                    <div className="col-sm-6">
                        <label class="form-label">First name</label>
                        <input type="text" class="form-control" id="userFname" placeholder=""  required onChange={(e) => setUser({ ...user, userFname: e.target.value })} />
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <label class="form-label">Last name</label>
                        <input type="text" class="form-control" id="userLname" placeholder="" required onChange={(e) => setUser({ ...user, userLname: e.target.value })} />
                        <div class="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>

                    <div class="col-12">
                        <label class="form-label">Password</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text">@</span>
                            <input type="password" class="form-control" id="userPassword" placeholder="password" required onChange={(e) => setUser({ ...user, userPassword: e.target.value })} />
                            <div class="invalid-feedback">
                                Your username is required.
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <label class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
                        <input type="email" class="form-control" id="userEmail" placeholder="you@example.com" onChange={(e) => setUser({ ...user, userEmail: e.target.value })} />
                        <div class="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div class="col-12">
                        <label class="form-label">userId</label>
                        <input type="text" class="form-control" id="userId" placeholder="1234 Main St" required onChange={(e) => setUser({ ...user, userId: e.target.value })} />
                        <div class="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>

                    <div class="col-12">
                        <label class="form-label">userPic 2 <span class="text-body-secondary">(Optional)</span></label>
                        <input type="text" class="form-control" id="userPic" placeholder="Apartment or suite" onChange={(e) => setUser({ ...user, userPic: e.target.value })} />
                    </div>

                    <div class="col-md-5">
                        <label class="form-label">userGender</label>
                        <select class="form-select" id="userGender" required onChange={(e) => setUser({ ...user, userGender: e.target.value })}>
                            <option value="">Choose...</option>
                            <option>male</option>
                            <option>female</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid country.
                        </div>
                    </div>
                   
                </div>         

                <hr class="my-4" />

                <button class="w-100 btn btn-primary btn-lg" type="submit" onClick={()=>check()}>להתחברות</button>
            </form>
        </div>
    </div>


    )
}