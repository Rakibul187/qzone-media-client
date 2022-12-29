import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    const { postImg, name, like, comment, _id, text } = post
    return (
        <div className="w-full bg-base-100 pt-2 shadow-xl">
            <div className="ml-5 my-1 flex items-center">
                <img
                    className="w-10 rounded-full"
                    src={post?.postmanImg && postImg} alt='' />
                <h1 className='text-lg font-semibold ml-2'>{name}</h1>
            </div>
            <div className="mt-0 mb-3 ">
                <p className='text-left px-2'>
                    {
                        text?.length > 200 ?
                            <>
                                {text.slice(0, 200)}
                                <Link to={`/postDetails/${_id}`}>...details</Link>
                            </> : text}</p>
            </div>
            <figure

            ><img
                    className='mx-auto h-full w-full p-4'
                    src={postImg} alt="Shoes" /></figure>
            <div className='flex justify-between mx-4 py-4'>
                <p>{like} like</p>
                <p>{comment} Comment</p>
            </div>
        </div>
    );
};

export default PostCard;