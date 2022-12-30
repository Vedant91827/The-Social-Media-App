import React, { useContext } from 'react'
import "./comments.scss";
import {AuthContext} from "../../context/authContext";

const Comments = () => {
    const {currentUser} = useContext(AuthContext)
    //temporary
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quasi odio modi laudantium",
            name: "John Doe",
            userId: 1,
            profilePic: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
        },
        {
            id: 2,
            desc: "Beatae laudantium obcaecati iste error id, consequuntur atque sint dolore voluptatem maxime.",
            name: "Other Man",
            userId: 2,
            profilePic: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
        },
    ];

  return (
    <div className="comments">
    <div className="write">
        <img src={currentUser.profilePic} alt="ProfilePic" />
        <input type="text" placeholder='Write a comment' />
        <button>Send</button>
    </div>
        {comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePic} alt="Profile" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments