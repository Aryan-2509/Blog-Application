import React, { useState } from "react"
import CommunityCards from "./CommunityCards"
import Core_info from "./Core_member"

export default function Community() {

    const[info,setInfo] = useState([{
        name : "Alex Wallshield",
        about : "Alex has been a part of our blogging faily since 2015. She is an ambitious, confident person who is never afraid to share her thoughts. She has raised her voice on various issues; women rights, black lives matter are some of them"
    },
    {
        name : "James Throvin",
        about : "James is one of youngest CEO's in the world ; co-founder of the renowned brand : 'Jellos'. The master of this multi-million business has been a part of our familt since 2020"
    },
    {
        name : "Harry Adckins",
        about : "Harry is a free-bird. Epitomy of wisdom and sun of positivity. He is an ambitious, hardworking student who aims to contribute to the health sector of his country by becoming an excellent cardiologist"
    }])

    const[core,setCore] = useState(Core_info)

    return (
        <div>
          {/* {info.map(item => <CommunityCards name = {item.name} about = {item.about}/>)} */}
          {core.map(item => <CommunityCards name = {item.name} post = {item.post} org = {item.org}/>)}
          <div>
            <h1 className="community-text-area">Hey</h1>
          </div>
        </div>
    )
}