import React from 'react';

const Home = () => {
    const handlePostSubmit = event => {
        event.preventDefault()
        console.log(event.target.image.files[0])
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
            <div className="w-full bg-base-100 shadow-xl">
                <div className="ml-5 my-1 flex items-center">
                    <img
                        className="w-10 rounded-full"
                        src="https://placeimg.com/80/80/people" alt='' />
                    <h1 className='text-lg font-semibold ml-2'>Rakib Hasnat</h1>
                </div>
                <div className="mt-0 mb-3 ">
                    <p className='text-left px-2'>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <figure

                ><img
                        className='mx-auto w-full p-4'
                        src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className='flex justify-between mx-4 py-4'>
                    <p>like</p>
                    <p>Comment</p>
                </div>
            </div>
        </div>
    );
};

export default Home;