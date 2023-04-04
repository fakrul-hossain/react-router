import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const{id,title,body} = post;
    return (
        <div className="shadow-lg  p-6 rounded w-96">
            <h1 className="font-medium text-2xl text-emerald-600">ID: {id}</h1>
            <p className="font-semibold text-xl my-3 capitalize">{title}</p>
            <p className="font-serif w-64">{body}</p>
            <Link 
            to={`/post/${id}`} className="inline-flex items-center my-3 font-semibold text-blue-600 hover:underline">
        Show Me Details
        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </Link>
        </div>
    );
};

export default Post;