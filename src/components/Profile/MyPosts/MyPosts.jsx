import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={s.MyPosts}>
        My posts
            <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={s.posts}>
            <Post message='Hi' quantity='-3' />
            <Post message="It's my first app" quantity='-7' />
        </div>
    </div>
}

export default MyPosts;