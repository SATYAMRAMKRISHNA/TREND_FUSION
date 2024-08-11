import React, { useEffect } from 'react';
import './Contest.css'; // Add your styles here
// Adjust the image name as necessary
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {updateAvatar} from '../redux/slices/avatarSlice';
import toast from 'react-hot-toast';


const Contest = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [form, setForm] = useState({
    userName: '',
    themeName: '',
    avatarName: '',
    imageUrl: '',
    description: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAvatar(form));
    toast.success("Your Avatar created successfully");
    console.log('Form submitted:', form);
  };
  return (
    <div className="contest-page">
      <header className="contest-header">
        <h1>Weekly Avatar Styling Contest</h1>
        <p>Show off your styling skills and win amazing prizes!</p>
      </header>
      <section className="contest-description">
        <div className="contest-description-text">
          <h2>Contest Description</h2>
          <p>Participate in our exciting weekly avatar styling contest. Style your avatar according to the theme provided by TrendFusion and stand a chance to win amazing prizes.</p>
          <h3>Current Theme</h3>
          <p>This week's theme is 'Winter Vibes'. Create a stylish summer look for your avatar!</p>
        </div>
        <img src="https://models.readyplayer.me/6693f6bd21ad4e11b902c317.png?scene=fullbody-posture-v1-transparent&blendShapes[Wolf3D_Head][mouthSmile]=0.8" alt="Contest Description" className='contest-image' />
      </section>
      <section className="contest-rules">
        <h2>Rules and Guidelines</h2>
        <ul>
          <li>Style your avatar according to the given theme.</li>
          <li>Clicking the Participate Now button you will be directed to a website to design your Avatar</li>
            <li>After designing the avatar click Next and copy the url in the below form and change .glb into .png in the url</li>
            <li>Then add the highlighted line in the image url after .png and paste in image url input <span className='addUrl'>?scene=fullbody-posture-v1-transparent&blendShapes[Wolf3D_Head][mouthSmile]=0.8</span></li>
            <li>Completely fill the below contest form and submit</li>
          <li>Submit your entry before the deadline.</li>
          <li>Only one entry per participant.</li>
          <li>Winners will be announced every week.</li>
        </ul>
      </section>
      <section className='parti-section'>
      <a 
          href="https://web-qrkei2.readyplayer.me/avatar" 
          className="participate"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Participate Now
        </a>
        </section>
     
      <section className="contest-prizes">
        <h2>Prizes and Rewards</h2>
        <p>Top 3 winners will receive exclusive TrendFusion merchandise and vouchers.</p>
        <p>Winners will also get discounts on selected products!</p>
      </section>
      <section className="contest-form">
        <h2>Submit Your Entry</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input  type="text"
              name="userName"
              value={form.userName}
              onChange={handleChange} placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="themeName">Theme Name</label>
            <input  type="text"
              name="themeName"
              value={form.themeName}
              onChange={handleChange} placeholder="Enter theme name" required />
          </div>
          <div className="form-group">
            <label htmlFor="avatarName">Avatar Name</label>
            <input  type="text"
              name="avatarName"
              value={form.avatarName}
              onChange={handleChange} placeholder="Enter avatar name" required />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input  type="text"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange} placeholder="Enter image URL" required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea  name="description"
              value={form.description}
              onChange={handleChange}placeholder="Enter description of your avatar"
              rows="4"
              required/>
          </div>
          <div className='btn'>
          <button type="submit" className="submit-button">Submit</button>
          <Link to="/singleAvatar">
          <br></br>
          <button type="submit" className="display-button">Display Your Avatar</button>
          </Link>
          </div>
        </form>
      </section>
      <section className="contest-past-winners">
        <h2>Past Winners</h2>
        <p>Check out some of the amazing entries from our past contests.</p>
        {/* Add past winners gallery or slider here */}
      </section>
      <section className="contest-faq">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <strong>How do I participate?</strong>
            <p>Style your avatar according to the theme and submit your entry using the form above.</p>
          </li>
          <li>
            <strong>What is the deadline for submissions?</strong>
            <p>Entries must be submitted by 11:59 PM every Sunday.</p>
          </li>
          {/* Add more FAQs as needed */}
        </ul>
      </section>
      <footer className="contest-footer">
        <p>Good luck to all participants!</p>
      </footer>
    </div>
  );
}

export default Contest;
