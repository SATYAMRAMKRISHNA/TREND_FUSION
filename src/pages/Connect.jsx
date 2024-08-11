import React, { useState } from 'react';
import './Connect.css';
import { increment } from '../redux/slices/connectSlice';
import { IoMdThumbsUp } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';

const Connect = () => {
  const [outfit, setOutfit] = useState('');
  const [outfitImage, setOutfitImage] = useState(null);
  const [outfits, setOutfits] = useState([]);
  const [error, setError] = useState('');

 
  const likes = useSelector((state) => state.like.likes);
  const dispatch = useDispatch();

  const handleVotes = () => {
    dispatch(increment());
  }; 

  const handlePostOutfit = (e) => {
    e.preventDefault();
    if (outfit.trim()) {
      setOutfits([...outfits, { text: outfit, image: outfitImage, suggestions: [] }]);
      setOutfit('');
      setOutfitImage(null);
      setError('');
    } else {
      setError('Outfit description cannot be empty.');
    }
  };

  const handleAddSuggestion = (index, suggestion) => {
    const updatedOutfits = [...outfits];
    updatedOutfits[index].suggestions.push(suggestion);
    setOutfits(updatedOutfits);
  };

  const handleFileChange = (e) => {
    setOutfitImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="connect-page">
      <h1>Connect with Others</h1>
      <form onSubmit={handlePostOutfit} className="outfit-form">
        <input
          type="text"
          placeholder="Describe your outfit..."
          value={outfit}
          onChange={(e) => setOutfit(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button className='submit-btn' type="submit"><h3>Post Outfit</h3></button>
      </form>
      {error && <p className="error-message">{error}</p>}

      <div className="outfit-list">
      <button 
          onClick={handleVotes} 
          className="like-button"
        >
         <IoMdThumbsUp fontSize="3.75rem" />
        </button>
        <p className="like-count">{likes}  {likes === 1 ? 'Vote' : 'Votes'}</p>

        <h2>Outfit Suggestions</h2>
        {outfits.map((o, index) => (
          <div key={index} className="outfit-item">
            {o.image && <img src={o.image} alt="Outfit" className="outfit-image" />}
            <p>{o.text}</p>
            <div className="suggestions">
              <h3>Suggestions:</h3>
              {o.suggestions.map((s, i) => (
                <p key={i} className="suggestion">{s}</p>
              ))}
              <form onSubmit={(e) => {
                e.preventDefault();
                const suggestion = e.target.elements.suggestion.value;
                if (suggestion.trim()) {
                  handleAddSuggestion(index, suggestion);
                  e.target.reset();
                }
              }}>
                <input
                  type="text"
                  name="suggestion"
                  placeholder="Add a suggestion..."
                  required
                />
                <button type="submit">Add</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
