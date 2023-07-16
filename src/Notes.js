import React,{useState} from "react"
import CreateArea from "./CreateArea"
import Note from "./Note"

export default function Notes() {

    const[notes,setNotes] = useState([])

    function addNote(newNote) {
        setNotes(prevNotes => [...prevNotes,newNote])
    }
    
    return(
        <main>
          <CreateArea addNote = {addNote}/>
          {notes.map(item => {
            return <Note title = {item.title} content = {item.content} writer = {item.writer}/>
          })}
        </main>
    )
    }