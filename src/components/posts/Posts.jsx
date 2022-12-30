import React from 'react';
import PostBox from '../postBox/PostBox';
import "./posts.scss";


const Posts = () => {
    //Temporary Data
    const posts = [
        {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, obcaecati eaque alias repudiandae",
            img: "https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w900X450/Take_in_the_Scenery.jpg?w=400&dpr=2.6",
        },
        {
            id: 2,
            name: "Lorem Wala",
            userId: 2,
            profilePic: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, obcaecati eaque alias repudiandae",
        },
    ];

  return (
    <div className="posts">
        {posts.map(post=>(
            <PostBox post={post} key={post.id} />
        ))}
    </div>
  )
}

export default Posts