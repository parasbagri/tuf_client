import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = () => {
  const [bannerData, setBannerData] = useState(null);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    axios.get('/api/banner').then(response => {
      setBannerData(response.data);
      setTimer(response.data.timer);
    });

    const countdown = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  if (!bannerData || timer === 0 || !bannerData.is_visible) return null;

  return (
    <div className="banner">
      <p>{bannerData.description}</p>
      <a href={bannerData.link}>Click here</a>
      <p>Time left: {timer} seconds</p>
    </div>
  );
};

export default Banner;