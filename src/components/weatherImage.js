import React from 'react';
import largeImages from '../assets/imgs/large/png';

const WeatherImage = ({ imageName ,size}) => {
  // Find the key that contains the specified value
  let matchingKey;

  if (size==="l") {
    matchingKey = Object.keys(largeImages).find(
      (key) => key.includes(imageName) && !key.includes('@2x') && key.includes("large")
    );
  } else if (size==="xl") {
    matchingKey = Object.keys(largeImages).find(
      (key) => key.includes(imageName) && key.includes('@2x') && key.includes("large")
    );
  }
  else if (size==="s") {
    matchingKey = Object.keys(largeImages).find(
      (key) => key.includes(imageName) && key.includes('@2x') && key.includes("small")
    );
  }
  else if (size==="xs") {
    matchingKey = Object.keys(largeImages).find(
      (key) => key.includes(imageName) && !key.includes('@2x') && key.includes("small")
    );
  }
  if (!matchingKey) {
    console.warn(`No image found for ${imageName}`);
    return null; // or provide a default image
  }

  const imageUrl = largeImages[matchingKey];

  return <img className='w-fit' src={imageUrl}  alt=''/>;
};

export default WeatherImage;