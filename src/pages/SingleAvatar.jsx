import React from 'react';
import './SingleAvatar.css';
import { IoMdThumbsUp } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import {updateVotes} from '../redux/slices/avatarSlice';

const SingleAvatar = () => {

    const avatar = useSelector((state) => state.avatar);
  const dispatch = useDispatch();

  const handleVotes = () => {
    dispatch(updateVotes());
  };

    

    return (
        <div className="contest-page">
            <header className="contest-header">
                <h1>Welcome to the Weekly Avatar Styling Contest</h1>
                <h2>Here is your created AVATAR !</h2>
            </header>
            <div className="avatar-contest">
                <div className="avatar-contest-content">
                    <div className="avatar-contest-text">
                        <h2><strong>Theme Name:</strong> {avatar.themeName}</h2>
                        <p><strong>Avatar Name:</strong> {avatar.avatarName}</p>
                       
                        <p><strong>Description:</strong> {avatar.description}</p>
                        <p><strong>
                        Styled by: </strong>{avatar.userName}
                        </p>
                        <button 
          onClick={handleVotes} 
          className="like-button"
        >
         <IoMdThumbsUp fontSize="1.75rem" />
        </button>
        <p className="ml-4 text-gray-700 font-bold">{avatar.votes} {avatar.votes === 1 ? 'Vote' : 'Votes'}</p>
                        <button className="home-button" onClick={() => window.location.href = '/'}>
                            Back to Home
                        </button>
                    </div>
                    <div className="avatar-contest-image">
                        <img src={avatar.imageUrl} alt="Avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAvatar;
