import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./postBox.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from '../comments/Comments';
import moment from "moment";
import {useQuery} from '@tanstack/react-query'
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";

const PostBox = ({post}) => {

  const [commentOpen, setCommentOpen] = useState(false);

  const {currentUser} = useContext(AuthContext);

  const { isLoading, data } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();
  const mutation = useMutation(
    (liked) => {
      if(liked) return makeRequest.delete("/likes?postId="+ post.id);
      return makeRequest.post("/likes",{postId: post.id})
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );
  
  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id))
  }


  const { commentsData } = useQuery(["comments", post.id], () =>
    makeRequest.get("/comments?postId=" + post.id).then((res) => {
      return res.commentsData;
    })
  );
    console.log(commentsData);
  // if(commentsData?.length == )

  return (
    <div className="post">
    <div className="container">
      <div className="user">
        <div className="userInfo">
            <img src={"/upload/"+post.profilePic} alt="Profile" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{textDecoration: "none" ,color: "inherit"}}>
                <span className='name'>{post.name}</span>
              </Link>
                <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
        </div>
          <MoreHorizIcon/>
      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img src={"/upload/"+post.img} alt="PostImage" />
      </div>
      <div className="info">
        <div className="item">
            {isLoading ? "loading" : data?.includes(currentUser.id) ? <FavoriteOutlinedIcon style={{color: "red"}} onClick={handleLike}/> : <FavoriteBorderOutlinedIcon onClick={handleLike}/>}
            {data?.length} Likes
        </div>
        <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
          <TextsmsOutlinedIcon/>
         Comments
        </div>
        <div className="item">
          <ShareOutlinedIcon/>
          Share
        </div>
      </div>
      {commentOpen && <Comments postId={post.id}/>}
    </div>
  </div>
  )
}

export default PostBox