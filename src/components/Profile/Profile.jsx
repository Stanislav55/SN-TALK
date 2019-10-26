import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.Profile}>
            <div>
                <img src="/bgProfile.png" alt="" />
            </div>
            <div>
                ava + description
        </div>
            <MyPosts />
        </div>)
}

export default Profile;