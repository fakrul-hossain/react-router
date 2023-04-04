import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-20 gap-8 ">
            {
                posts.map(post => <Post
                key={post.id}
                post={post}></Post>)
            }
        </div>
    );
};

export default Posts;