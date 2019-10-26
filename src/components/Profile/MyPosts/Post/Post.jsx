import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="/ava.png" alt="" />
            {props.message}
            <div>
                <span>like</span>
                {props.quantity}
            </div>
        </div>)
}

export default Post;