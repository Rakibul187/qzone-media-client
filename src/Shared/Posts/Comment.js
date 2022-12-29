import React from 'react';

const Comment = ({ cmnt }) => {
    const { comment, useName, userPhoto } = cmnt;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='flex'>
                        <img className='w-10 mr-2 h-10 rounded-full' src={userPhoto} alt="" />
                        <h2 className="card-title">{useName}</h2>
                    </div>
                    <p className='text-gray-500'>{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;