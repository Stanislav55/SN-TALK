import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="/bgProfile.png" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>)
}

export default ProfileInfo;