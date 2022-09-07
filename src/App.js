import React, { useState, useEffect } from 'react';
import './style.css';
import Searchbox from './components/Searchbox';
import ColorGrid from './components/ColorGrid';
import RelatedGrid from './components/RelatedGrid';
import { API_KEY, ColorGridTitle, ImageGridTitle } from './config/constants';
export default function App() {
  const [colors, setColor] = useState([]);
  const [searchColor, setSearchColor] = useState('');
  const [google_colors, setGoogleColor] = useState([]);
  const handleChange = (e) => {
    const val = e.target.value;
    if (val && val.length > 0) {
      setSearchColor(val);
    }
  };
  const findColor = (color) => {
    return color;
  };

  const fetchColors = async () => {
    const where = encodeURIComponent(
      JSON.stringify({
        name: {
          $regex: searchColor,
        },
      })
    );
    const response = await fetch(
      `https://parseapi.back4app.com/classes/Color?limit=10&where=${where}`,
      {
        headers: {
          'X-Parse-Application-Id': 'vei5uu7QWv5PsN3vS33pfc7MPeOPeZkrOcP24yNX', // This is the fake app's application id
          'X-Parse-Master-Key': 'aImLE6lX86EFpea2nDjq9123qJnG0hxke416U7Je', // This is the fake app's readonly master key
        },
      }
    );
    const data = await response.json(); // Here you have the data that you need

    setColor(data.results);
  };

  const fetchGoogleImageColors = async () => {
    let response = await fetch(
      `https://serpapi.com/search?q=${searchColor} color&tbm=isch&ijn=0&api_key=${API_KEY}`
    );
    let data = await response.json(); // Here you have the data that you need
    setGoogleColor(data['images_results']);
  };

  useEffect(() => {
    fetchColors();
    fetchGoogleImageColors();
  }, [searchColor]);
  return (
    <>
      <Searchbox onChange={handleChange} value={searchColor} />
      <ColorGrid title={ColorGridTitle} colors={colors} />
      <RelatedGrid title={ImageGridTitle} google_colors={google_colors} />
    </>
  );
}
