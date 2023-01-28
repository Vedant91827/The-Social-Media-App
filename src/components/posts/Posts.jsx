import React from 'react';
import PostBox from '../postBox/PostBox';
import "./posts.scss";
import {useQuery} from '@tanstack/react-query'
import { makeRequest } from '../../axios';

const Posts = ({userId}) => {

      //we already have base url stored in axios so we directly write "/post"
        const { isLoading, error, data } = useQuery(["posts"], () =>
          makeRequest.get("/posts?userId="+userId).then((res) => {
            return res.data;
          })
        );

      
      console.log(data);
  return (
    <div className="posts">
        {error ? "Oops, Something Went Wrong !" : 
            (isLoading ? "loading please wait !" : data.map(post=>(
            <PostBox post={post} key={post.id} />)
        ))}
    </div>
  )
}

export default Posts