import React from 'react';
import PostBox from '../postBox/PostBox';
import "./posts.scss";
import {useQuery} from '@tanstack/react-query'
import { makeRequest } from '../../axios';

const Posts = () => {
    //Temporary Data
    // const posts = [
    //     {
    //         id: 1,
    //         name: "John Doe",
    //         userId: 1,
    //         profilePic: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, obcaecati eaque alias repudiandae",
    //         img: "https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w900X450/Take_in_the_Scenery.jpg?w=400&dpr=2.6",
    //     },
    //     {
    //         id: 2,
    //         name: "Lorem Wala",
    //         userId: 2,
    //         profilePic: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, obcaecati eaque alias repudiandae",
    //     },
    // ];

    const { isLoading, error, data } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
        //we already have base url stored in axios so we directly write "/post"
          makeRequest.get("/posts").then(res=>{
            return res.data;
          }) 
          
      })
    //   console.log(data);
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