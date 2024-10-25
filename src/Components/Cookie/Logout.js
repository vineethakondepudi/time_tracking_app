import React, { useState } from 'react';
import { logoutUser } from './api';

const Logout = () => {
  const [message, setMessage] = useState('');

  const handleLogout = async () => {
    setMessage('');
    try {
      const response = await logoutUser();
      setMessage(response);
      // Handle post-logout actions (e.g., redirecting or clearing user data)
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Logout;
