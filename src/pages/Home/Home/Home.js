import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import PostCard from '../../../Shared/Posts/PostCard';

const Home = () => {
    const { user } = useContext(AuthContext)
    const posts = useLoaderData()

    const handlePostSubmit = event => {
        event.preventDefault()
        const form = event.target
        // console.log(form.image.files[0])
        const image = form.image.files[0]
        const text = form.post.value
        const name = user?.displayName

        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageapikey}`
        fetch(url, {
            method: "POSt",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const postData = {
                        postImg: imgData.data.url,
                        postmanImg: user?.photoURL,
                        text: text,
                        name: name,
                        like: 0,
                        comment: ''
                    }
                    console.log(postData)
                    fetch('http://localhost:5000/addpost', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(postData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Post added successfully!')
                            }
                        })
                }
            })
    }
    return (
        <div>
            <form onSubmit={handlePostSubmit} className='p-4 bg-white mt-4'>
                <div>
                    <textarea className='w-full bg-slate-50 p-3 rounded-lg' name="post" placeholder="what's on your mind?"></textarea>
                </div>
                <div className='flex justify-between'>
                    <input type="file" name="image" d="" />
                    <button type="submit">Add post</button></div>
            </form>
            <div className="divider"></div>
            <div>
                {posts.map(post => <PostCard
                    key={post._id}
                    post={post}
                ></PostCard>
                )}
            </div>
        </div>
    );
};

export default Home;