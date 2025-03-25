import React from 'react';
import {Link} from 'react-router-dom'
import './AvatarContest.css';
import avatar_image from '../Assets/Avatar_image.png'; // Replace with your avatar image path

const AvatarContest = () => {
  return (
    <div className='avatar-contest'>
      <div className='avatar-contest-content'>
        <div className='avatar-contest-text'>
          <h1>Weekly Avatar Styling Contest</h1>
          <p>
            Participate in our exciting weekly avatar styling contest! Style the avatar
            according to the theme provided by TrendFusion and stand a chance to win
            amazing prizes. Showcase your fashion skills.
          </p>
          <Link to="/contest">
          <button>Join the Contest</button>
          </Link>
        </div>
        <div className='Avatar-contest-image'>
          <img src={avatar_image} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default AvatarContest;


