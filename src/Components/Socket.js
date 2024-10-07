import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Adjust to your server URL

const WebhookNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('notification', (notification) => {
      setNotifications((prev) => [...prev, notification]);
    });

    return () => {
      socket.off('notification'); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li> // Adjust according to your notification structure
        ))}
      </ul>
    </div>
  );
};

export default WebhookNotifications;
