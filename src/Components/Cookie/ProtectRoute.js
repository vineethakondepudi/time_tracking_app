import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'; // Correctly importing Navigate for redirection
import axios from 'axios';

const ProtectedRoute = ({ element }) => {
  const [isLoading, setIsLoading] = useState(true); // State to handle loading
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to handle authentication status

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('http://localhost:3000/protected', {
          withCredentials: true, // Important to include cookies
        });
        setIsAuthenticated(response.status === 200); // Set authentication status
      } catch (error) {
        setIsAuthenticated(false); // User is not authenticated
      } finally {
        setIsLoading(false); // Loading complete
      }
    };

    checkAuthentication();
  }, []);

  // If still loading, show a loading message
  if (isLoading) {
    return <div>Loading...</div>; // Optional loading state
  }

  // Redirect to login if not authenticated, otherwise render the component
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
