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

const PostBox = ({post}) => {

  const [commentOpen, setCommentOpen] = useState(false);
  //Temporary
  const like = false;

  return (
    <div className="post">
    <div className="container">
      <div className="user">
        <div className="userInfo">
            <img src={post.profilePic} alt="Profile" />
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
        <img src={"./upload/"+post.img} alt="PostImage" />
      </div>
      <div className="info">
        <div className="item">
            {like ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
            12 Likes
        </div>
        <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
          <TextsmsOutlinedIcon/>
          12 Comments
        </div>
        <div className="item">
          <ShareOutlinedIcon/>
          Share
        </div>
      </div>
      {commentOpen && <Comments/>}
    </div>
  </div>
  )
}

export default PostBox