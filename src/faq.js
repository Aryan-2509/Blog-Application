import React, { useState } from "react"
import Faq_questions from "./faq_questions"
import Faq_display from "./faq_display"

export default function Faq() {

    const[questions,setQuestions] = useState(Faq_questions)
    const[response,setResponse] = useState(false)
    const[formData,setFormData] = useState({
        name : "",
        question : "",
        showResponse : false
    })

    const items = questions.map(item => {
        return <Faq_display question = {item.question} answer = {item.answer}/>
    })

    function handleChange(event) {

        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })

        if(checked)
        {
            setResponse(true)
        }
    }

    function handleSubmit(event) {

        setResponse(true)
        event.preventdefault()
    }

    return(
        <div > 
           {items}
           {!response &&
           <div className="question-box">
           <h3 style = {{margin : "10px", marginTop : "50px"}}>Still your doubt is unanswered ? Go ahead and post your question!</h3>
           <form>
           <div className="mb-3 form-element">
             <label  className="form-label">Name</label>
             <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name = "name" value = {formData.name} onChange = {handleChange}/>
             <label  className="form-label">Question</label>
             <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name = "question" value = {formData.question} onChange = {handleChange}/>
           </div>
           <input 
            type = "checkbox"  
            name = "showResponse"
            className="btn btn-primary form-element" 
            checked = {formData.showResponse}
            onChange={handleChange}/>SUBMIT
           </form>
           </div>
           }
           {response && 
           <div className="faq-form-response question-box">
              Hi {formData.name} <br/>
              Your response has been submitted.<br/>We will get back to you soon.
           </div>
           }
        </div>
    )
}