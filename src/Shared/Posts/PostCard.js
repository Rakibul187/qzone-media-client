import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    const { postImg, name, like, _id, text, postmanImg } = post
    return (
        <div className="w-full bg-base-100 mb-10 pt-2 shadow-xl">
            <div className="ml-5 my-1 flex items-center">
                <img
                    className="w-10 h-10 rounded-full"
                    src={post?.postmanImg ? postmanImg : postImg} alt='' />
                <h1 className='text-lg font-semibold ml-2'>{name}</h1>
            </div>
            <div className="mt-0 mb-3 ">
                <p className='text-left px-2'>
                    {
                        text?.length > 200 ?
                            <>
                                {text.slice(0, 200)}
                                <Link to={`/postDetails/${_id}`}><button className='btn btn-ghost'>...details</button></Link>
                            </> : text}</p>
            </div>
            <figure

            ><img
                    className='mx-auto h-[300px] w-full p-4'
                    src={postImg} alt="Shoes" /></figure>
            <div className='flex justify-between mx-4 py-4'>
                <Link ><button className='btn btn-ghost'>{like} like</button></Link>
                <Link to={`/postDetails/${_id}`}><button className='btn btn-ghost'>Comment</button></Link>
            </div>
        </div>
    );
};

export default PostCard;