import React, { useState } from "react"
import image from "./images/background.jpg"

export default function Login({handleLogin}) {

    const[details,setDetails] = useState({
        name : ""
    })

    function handleChange(event){

        const {name,value} = event.target
        setDetails(prevValue => (
            {...prevValue,
            [name] : value}
        ))
    }

    return (
        <div>
           <h1 className="login-heading">Login Here!</h1>
           <form>
           <div className="mb-3 form-element">
             <label  className="form-label login">UserName</label>
             <input type="text" className="form-control login-text-area" id="exampleInputEmail1" aria-describedby="emailHelp" name = "name" value = {details.name} onChange = {handleChange}/>
           </div>
           <button  className="btn btn-primary form-element login-button" onClick={() => handleLogin(details.name)}>Login</button>
           </form>
        </div>
    )
}