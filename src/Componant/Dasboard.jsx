import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState(60);
  const [link, setLink] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const updateBanner = () => {
    axios.post('/api/banner', { description, timer, link, is_visible: isVisible })
      .then(response => {
        alert('Banner updated successfully!');
      })
      .catch(error => {
        console.error('There was an error updating the banner!', error);
      });
  };

  return (
    <div className="dashboard">
      <h2>Banner Settings</h2>
      <label>Description</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

      <label>Timer (seconds)</label>
      <input type="number" value={timer} onChange={(e) => setTimer(e.target.value)} />

      <label>Link</label>
      <input type="url" value={link} onChange={(e) => setLink(e.target.value)} />

      <label>Visibility</label>
      <input type="checkbox" checked={isVisible} onChange={() => setIsVisible(!isVisible)} />

      <button onClick={updateBanner}>Update Banner</button>
    </div>
  );
};

export default Dashboard;