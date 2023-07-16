import React from "react"
import Avatar from "./images/img_avatar2.png"

export default function CommunityCards(props) {

    return(
        // <div className="card">
        //   <img src= {Avatar} alt="Avatar" height = "500px" style= {{width : "100%"}}/>
        //   <div className="container">
        //     <h4><b>{props.name}</b></h4> 
        //     <p>{props.about}</p> 
        //   </div>
        // </div>
        
        <div className="cards">
        <div className="card">
          <img src={Avatar} alt="John" style= {{width:"100%"}} className = "card-image"/>
          <h1 className="card-name">{props.name}</h1>
          <p className="title">{props.post}</p>
          <p className="card-name">{props.org}</p>
          <a href="#"><i className="fa fa-dribbble"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-facebook"></i></a>
          <p><button className= "card-button">Contact</button></p>
        </div>
        </div>
    )
}