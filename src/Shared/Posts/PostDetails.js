import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Navbar from '../Navbar/Navbar';
import Comment from './Comment';

const PostDetails = () => {
    const [comments, setComments] = useState([])
    const post = useLoaderData()
    const { user } = useContext(AuthContext)
    const { postImg, postmanImg, name, text, _id } = post;

    const handleCommentSubmit = event => {
        event.preventDefault()
        const text = event.target.post.value
        const comment = {
            postId: _id,
            userPhoto: user.photoURL,
            useName: user.displayName,
            comment: text
        }
        fetch('https://qzone-media-server.vercel.app/comment', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Comment added successfully!')
                    event.target.reset()
                }
            })
    }

    useEffect(() => {
        fetch(`https://qzone-media-server.vercel.app/comment/${_id}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [_id])

    console.log(comments)
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-slate-50'>
                <div className='pt-24 max-w-6xl  mx-auto grid lg:grid-cols-2'>
                    <div>
                        <div className="w-full bg-base-100 pt-2 shadow-xl">
                            <div className="ml-5 my-1 flex items-center">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src={post?.postmanImg ? postmanImg : postImg} alt='' />
                                <h1 className='text-lg font-semibold ml-2'>{name}</h1>
                            </div>
                            <div className="mt-0 mb-3 ">
                                <p className='text-left px-2'>
                                    {text}
                                </p>
                            </div>
                            <figure

                            ><img
                                    className='mx-auto h-[300px] w-full p-4'
                                    src={postImg} alt="Shoes" /></figure>
                        </div>
                    </div>

                    <div>
                        <div className='lg:pl-10 sm:pt-10'>
                            <h1 className='text-xl font-bold'>Add a comment</h1>
                            <form onSubmit={handleCommentSubmit} className='p-4 bg-white mt-4'>
                                <div>
                                    <textarea className='w-full bg-slate-50 p-3 rounded-lg' name="post" placeholder="what do you want to say?"></textarea>
                                </div>
                                <div className='text-end'>
                                    <button className='btn btn-ghost ' type="submit">Submit</button>
                                </div>
                            </form>
                            <div className='grid grid-flow-row gap-5 py-4 px-10 w-full mx-auto'>
                                {
                                    comments && comments.map(cmnt => <Comment
                                        key={cmnt._id}
                                        cmnt={cmnt}
                                    ></Comment>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;