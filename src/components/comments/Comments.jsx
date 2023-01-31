import React, { useContext } from 'react'
import "./comments.scss";
import {AuthContext} from "../../context/authContext";
import {useQuery} from '@tanstack/react-query'
import {makeRequest } from "../../axios";
import moment from "moment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from 'react';

//We need postId coz we will face comment according to post
const Comments = ({postId}) => {
    const [desc, setDesc] = useState("")
    const {currentUser} = useContext(AuthContext)

    const { isLoading, data } = useQuery({
        //As a parameter pass postId
        queryKey: ["comments"],
        queryFn: () =>
          makeRequest.get('/comments?postId='+postId).then(res=>{
            return res.data;
          })
      })

  //For adding comments
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId});
    setDesc("");
  };
    
    //temporary
    // const comments = [
    //     {
    //         id: 1,
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quasi odio modi laudantium",
    //         name: "John Doe",
    //         userId: 1,
    //         profilePic: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    //     },
    //     {
    //         id: 2,
    //         desc: "Beatae laudantium obcaecati iste error id, consequuntur atque sint dolore voluptatem maxime.",
    //         name: "Other Man",
    //         userId: 2,
    //         profilePic: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    //     },
    // ];



  return (
    <div className="comments">
    <div className="write">
        <img src={"/upload/"+currentUser.profilePic} alt="ProfilePic" />
        <input type="text" placeholder='Write a comment' value={desc} onChange={e=>setDesc(e.target.value)} />
        <button onClick={handleClick}>Send</button>
    </div>
        {isLoading ? "loading..." : data.map(comment=>(
            <div className="comment">
                <img src={"/upload/"+comment.profilePic} alt="Profile" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>{moment(comment.createdAt).fromNow()}</span>
            </div>
        ))}
    </div>
  )
}

export default Comments