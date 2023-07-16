import React from "react"

export default function Note(props) {

    return(
        <div>
            <h1>{props.title}</h1>
            <h1>{props.content}</h1>
            <h1>{props.writer}</h1>
        </div>
    )
}