import React from "react"
import { useState,useEffect } from "react"
import Info from "./ReadsData"
import Cards from "./blogCards"
import Soml from "./images/story_of_my_life.jpg"

export default function Reads() {

    const[blog,SetBlog] = useState(Info)
    const[formData,setFormData] = useState({
        text : "",
        submit :  false
    })
    const[showSearch,setShowSearch] = useState(false)
    const[searchResult,setSearchResult] = useState([])

    //const result = {}

    const display = blog.map(item => <Cards
    title = {item.title} 
    author = {item.author} 
    description = {item.description} 
    genre = {item.genre}
    img = {item.img}
    />)

    function handleChange(event) {

        const {name,value,type,checked} = event.target

        setFormData(prevData => (
            {...prevData,
            [name] : type === "checkbox" ? checked : value}
        ))

        if(checked)
        {
            console.log("function called")
            handleSearch(formData.text)
        }
    }

    function handleSearch(text) {

        // const arr = []

        // for(let i = 0 ; i < Info.length ; i++)
        // {
        //     if(Info[i].title === text || Info[i].author === text || Info[i].genre === text)
        //     {
        //         searchResult.push(Info[i]);
        //     }
        // }

        setSearchResult([{
            title : "Story Of My Life",
            author : "Sza holden",
            genre : "Motivational",
            description : "The success story of Sza Holden. How she overcame challenges in her life and stood up after every failure to finally become the Sza we know today.",
            img : Soml
        }])
        
        setShowSearch(true)
        console.log(searchResult)
    }

    function handleClick(){
        setSearchResult([])
        setShowSearch(false)
    }

    // const searchDisplay = searchResult.map(item => <Cards 
    //     title = {item.title} 
    //     author = {item.author} 
    //     description = {item.description} 
    //     genre = {item.genre}
    //     img = {item.img}
    //     />)

    return (
        <div>

           <div className="mb-3 form-element">
             <input type="text" placeholder="Search Your Favorite Blogs" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name = "text" value = {formData.text} onChange = {handleChange}/>
           </div>
           {/* <input 
            type = "checkbox"  
            name = "showResponse"
            className="btn btn-primary form-element" 
            checked = {formData.submit}
            onChange={handleChange}/>Search */}
            <button onClick = {() => handleSearch(formData.text)}>Search</button>

           {!showSearch && display}
           {showSearch && 
            searchResult.map(item => <Cards 
            title = {item.title} 
            author = {item.author} 
            description = {item.description} 
            genre = {item.genre}
            img = {item.img}
            />) 
            && <button onClick = {handleClick}>Reset</button>}
        </div>
    )
}