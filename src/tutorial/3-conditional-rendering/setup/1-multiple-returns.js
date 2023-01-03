import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      console.log(response);
      if (response.status < 200 || response.status > 299) {
        setIsLoading(false);
        setIsError(true);
      } else {
        const user = await response.json();
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // console.log('useEffect');
    getUsers();
  }, []);
  // console.log('load');
  if (isloading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
