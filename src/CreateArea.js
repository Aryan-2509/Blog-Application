import React, { useState } from "react"

export default function CreateArea(props) {

    const[note,setNote] = useState({
        title : "",
        content : "",
        writer : ""
    })

    function handleChange(event)
    {
        const {name,value} = event.target

        setNote(prevValue => (
            {...prevValue,
            [name] : value}
        ))
    }

    function submitNote(event) {
        props.addNote(note)
        event.preventdefault()
    }

    return (
        <div>
           <form>
           <div className="mb-3 form-element">
             <label  className="form-label notes-label">Title</label>
             <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name = "title" value = {note.title} onChange = {handleChange}/>
           </div>

           <div className="mb-3 form-element">
             <label className="form-label notes-label">Write your Note here</label>
             <input type="text" className="form-control" id="exampleInputPassword1" name = "content" value = {note.content} onChange = {handleChange}/>
           </div>

           <div className="mb-3 form-element">
             <label className="form-label notes-label">Name is this brilliant writer goes here</label>
             <input type="text" className="form-control" id="exampleInputPassword1" name = "writer" value = {note.writer} onChange = {handleChange}/>
           </div>

           <button  className="btn btn-primary form-element" onClick = {submitNote}>Add</button>
           </form>

        </div>
    )
}