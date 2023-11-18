import React from 'react';
import largeImages from '../assets/imgs/large/png';

const WeatherImage = ({ imageName ,isLarge}) => {
  // Find the key that contains the specified value
  let matchingKey;

  if (!isLarge) {
    matchingKey = Object.keys(largeImages).find(
      (key) => key.includes(imageName) && !key.includes('@2x')
    );
  } else {
    matchingKey = Object.keys(largeImages).find(
      (key) => key.includes(imageName) && key.includes('@2x')
    );
  }
  if (!matchingKey) {
    console.warn(`No image found for ${imageName}`);
    return null; // or provide a default image
  }

  const imageUrl = largeImages[matchingKey];

  return <img src={imageUrl} alt={`Large image: ${matchingKey}`} />;
};

export default WeatherImage;