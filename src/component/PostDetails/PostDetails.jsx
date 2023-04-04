import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {

    const PostDetails = useLoaderData();
    const {id,body,title} = PostDetails;

    const navigate = useNavigate();
    const handleGoBackButton = () =>{
        
        navigate(-1)
    } 
    return (
        <div className="text-center mt-40">
            <h1 className="font-bold text-2xl">Details about your post of: {id}</h1>
            <p className="my-3 font-semibold capitalize">{title}</p>
            <details className="transition-shadow text-xl font-semibold  bg-green-400 w-3/6 p-6 rounded-md my-3 shadow-2xl mx-auto">{body}</details>
            <button onClick={handleGoBackButton} className="bg-slate-950 text-slate-50 px-8 py-2 rounded font-semibold hover:text-green-400">Go Back</button>
        </div>
    );
};

export default PostDetails;