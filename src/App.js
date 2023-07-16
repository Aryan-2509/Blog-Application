import React, { useState } from "react"
import Navbar from "./Navbar"
import Middle from "./Middle"
import Carousel from "./Carousel"
import Notes from "./Notes"
import Login from "./Login"
import Community from "./Community"
import Faq from "./faq"
import Blogs from "./Reads"

export default function App() {

  const[showNotes,setShowNotes] = useState(false)
  const[showHome,setShowHome] = useState(false)
  const[showCommunity,setShowCommunity] = useState(false)
  const[showFaq,setShowFaq] = useState(false)
  const [login,setLogin] = useState(false)
  const [showBlog,setShowBlog] = useState(false)
  const [name,setName] = useState("")

  function handleNotes(){
    setShowNotes(true)
    setShowHome(false)
    setShowCommunity(false)
    setShowFaq(false)
    setShowBlog(false)

    // document.body.style.backgroundImage = "./images/deer.jpg";
    //document.body.style.backgroundColor = "green";
  }

  function handleHome() {
    setShowNotes(false)
    setShowHome(true)
    setShowCommunity(false)
    setShowFaq(false)
    setShowBlog(false)

    //document.body.style.backgroundColor = "white";
  }

  function handleLogin(userName) {
    setLogin(true)
    setName(userName)
    setShowHome(true)
    setShowFaq(false)
    setShowBlog(false)

    // document.body.style.backgroundImage = "./images/deer.jpg";
    //document.body.style.backgroundColor = "white";
  }

  function handleCommunity() {
    setShowNotes(false)
    setShowHome(false)
    setShowCommunity(true)
    setShowFaq(false)
    setShowBlog(false)
    
    //document.body.style.backgroundColor = "red";
  }

  function handleFaq() {

    setShowNotes(false)
    setShowHome(false)
    setShowCommunity(false)
    setShowFaq(true)
    setShowBlog(false)

    //document.body.style.backgroundColor = "yellow";
  }

  function handleBlog() {

    setShowNotes(false)
    setShowHome(false)
    setShowCommunity(false)
    setShowFaq(false)
    setShowBlog(true)

    //document.body.style.backgroundColor = "yellow";
  }
  
  return (
    <div>

      {!login && <Login handleLogin = {handleLogin}/>} 
      {login && <div> <Navbar handleNotes = {handleNotes} handleHome = {handleHome} handleCommunity = {handleCommunity} name = {name}
        handleFaq = {handleFaq} handleBlog = {handleBlog}
      />
      {showHome && <div> <Carousel/></div>}
      {showNotes && <Notes/>}</div>}
      {showCommunity && <Community/>}
      {showFaq && <Faq/>}
      {showBlog && <Blogs/>}

    </div>
  )
}