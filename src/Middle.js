import React from "react"
import Nature from "./images/nature.jpg"

export default function Middle() {

    return (
        <div class="example">
          <img  class="background-image" src={Nature} alt = "alt text"/>
          <div class="overlay">
          A free Space <br/>to share your <br/> Thoughts
          </div>
        </div>
    )
}