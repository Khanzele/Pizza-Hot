import React from 'react';
import './FullPost.css';

export const FullPost = (pizza) => {
    return (
        <div className='Post'>
            <div className='PostInfo'>
                <div className='PostImage'>
                    <img src={pizza.imageUrl} alt=''/>
                </div>
            </div>
            <div className='PostCorrect'></div>
        </div>
    )
};