import React, { useContext } from 'react';
import "./stories.scss";
import {AuthContext} from "../../context/authContext";
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
const Stories = () => {

    const {currentUser} = useContext(AuthContext);
    //Temporary Dummy Data before API

    // const { isLoading, error, data} = useQuery(["stories"], () =>{
    //     makeRequest.get("/stories").then((res)=>{
    //         return res.data;
    //     })
    // })

    // console.log(data);


    const stories = [
        {
            id: 1,
            name: "John Doe",
            img: "images-story-1.jpg"
        },
        { 
            id: 2,
            name: "John Doe",
            img: "images-story-2.png"
        },
        {
            id: 3,
            name: "John Doe",
            img: "images-story-3.jpg"
        },
        {
            id: 4,
            name: "John Doe",
            img: "images-story-4.png"
        }
    ];

   console.log("/upload/"+stories[0].img)
  return (
    <div className="stories">

        <div className="story">
            <img src={"/upload/"+currentUser.profilePic} alt="Story" />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
        {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={"/upload/"+story.img} alt="Story" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories