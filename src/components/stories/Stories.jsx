import React, { useContext } from 'react';
import "./stories.scss";
import {AuthContext} from "../../context/authContext";
const Stories = () => {

    const {currentUser} = useContext(AuthContext);
    //Temporary Dummy Data before API
    const stories = [
        {
            id: 1,
            name: "John Doe",
            img: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVubnklMjBjYXR8ZW58MHx8MHx8&w=1000&q=80"
        },
        { 
            id: 2,
            name: "John Doe",
            img: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVubnklMjBjYXR8ZW58MHx8MHx8&w=1000&q=80"
        },
        {
            id: 3,
            name: "John Doe",
            img: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVubnklMjBjYXR8ZW58MHx8MHx8&w=1000&q=80"
        },
        {
            id: 4,
            name: "John Doe",
            img: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVubnklMjBjYXR8ZW58MHx8MHx8&w=1000&q=80"
        }
    ];


  return (
    <div className="stories">

        <div className="story">
            <img src={currentUser.profilePic} alt="Story" />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
        {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} alt="Story" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories