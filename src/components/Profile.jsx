import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
    <div className='Profile'>
        <div>
            <img src="img/bgProfile.png" alt="" />
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>)
}

export default Profile;