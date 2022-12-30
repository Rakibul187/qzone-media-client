import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import PostCard from '../../Shared/Posts/PostCard';

const Media = () => {
    const posts = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-slate-50'>
                <div className='pt-24 max-w-6xl mx-auto'>
                    <h1 className='font-bold text-2xl text-lime-600'>All post are here</h1>
                    <h1 className='divider mb-3 mt-0 w-40 mx-auto'></h1>
                    <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-6 '>
                        {
                            posts.map(post => <PostCard
                                key={post.Id}
                                post={post}
                            ></PostCard>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Media;