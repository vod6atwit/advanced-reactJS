import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  // // run only 1 time and add event listeners for window
  // useEffect(() => {
  //   console.log('useEffect() called');
  //   window.addEventListener('resize', checkSize);
  // }, []);

  // call useEffect and return the hook function each time to clean up by removing event listeners
  useEffect(() => {
    console.log('useEffect() called');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  });

  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
