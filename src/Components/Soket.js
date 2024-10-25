// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import { Picker } from 'emoji-mart';
// import 'emoji-mart/css/emoji-mart.css';
// import "./Soket.css";

// const socket = io('http://172.17.15.65:4000'); // Backend server URL

// function ChatApp() {
//   const [messageDrafts, setMessageDrafts] = useState({}); // Object to store message drafts for each receiver
//   const [chat, setChat] = useState([]);
//   const users = ['Vineetha', 'Vandana', 'Hema','Siva']; // List of online users
//   const [sender, setSender] = useState(''); // Current logged-in user (sender)
//   const [receiver, setReceiver] = useState(''); // Selected receiver for chat
//   const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false); // Toggle emoji picker

//   useEffect(() => {
//     // Listen for incoming chat messages
//     socket.on('chat message', ({ sender: msgSender, receiver: msgReceiver, message: msg }) => {
//       console.log('Received message:', { msgSender, msgReceiver, msg }); // Debugging line
//       setChat((prevChat) => [...prevChat, { sender: msgSender, receiver: msgReceiver, message: msg }]);
//     });

//     // Emit the sender when they log in
//     if (sender) {
//       socket.emit('login', sender);
//     }

//     return () => {
//       socket.off('chat message'); // Remove listener
//     };
//   }, [sender]);

//   // Handle login
//   const loginUser = () => {
//     const username = prompt("Enter your name:\n(choose from: Vineetha, Vandana, Hema, Siva)");
//     if (users.includes(username)) {
//       setSender(username);
//       console.log('Logged in as:', username);
//     } else {
//       alert('Invalid username. Please choose from the list.');
//     }
//   };

//   // Handle sending a message
//   const sendMessage = (e) => {
//     e.preventDefault();

//     if (!messageDrafts[receiver]) {
//       console.error('Message is empty');
//       return;
//     }

//     if (!receiver) {
//       console.error('No receiver selected');
//       return;
//     }

//     if (socket.connected) {
//       const messageToSend = messageDrafts[receiver];
//       console.log("Sending message:", { sender, receiver, messageToSend });
//       socket.emit('chat message', { sender, receiver, message: messageToSend });

//       // Clear the input field for this receiver after sending
//       setMessageDrafts((prevDrafts) => ({ ...prevDrafts, [receiver]: '' }));
//     } else {
//       console.error('Socket not connected');
//     }
//   };

//   // Add emoji to message
//   const addEmoji = (emoji) => {
//     setMessageDrafts((prevDrafts) => ({
//       ...prevDrafts,
//       [receiver]: (prevDrafts[receiver] || '') + emoji.native, // Add emoji to the current receiver's draft
//     }));
//     setIsEmojiPickerVisible(false); // Close the emoji picker after selecting an emoji
//   };

//   // Handle receiver change and load the respective draft message
//   const handleReceiverChange = (newReceiver) => {
//     setReceiver(newReceiver);
//   };

//   // Update the message for the current receiver
//   const handleMessageChange = (e) => {
//     const newMessage = e.target.value;
//     setMessageDrafts((prevDrafts) => ({
//       ...prevDrafts,
//       [receiver]: newMessage, // Update draft for the current receiver
//     }));
//   };

//   return (
//     <div className="chat-app">
//       {!sender ? (
//         <button onClick={loginUser}>Login</button>
//       ) : (
//         <>
//           <div className="user-list">
//             <h3>Contacts</h3>
//             {users.filter(user => user !== sender).map((user, index) => ( 
//               <button key={index} onClick={() => handleReceiverChange(user)}>
//                 {user}
//               </button>
//             ))}
//           </div>

//           <div className="chat-box">
//             <h2>
//               {receiver ? receiver : (
//                 <img 
//                   src="https://img.freepik.com/premium-vector/customer-support-flat-design-illustration_1149263-18970.jpg?semt=ais_hybrid" 
//                   alt="Chat background"
//                   className="chat-background"
//                 />
//               )}
//             </h2>

//             <div className="chat-messages">
//               {chat
//                 .filter(msg => (msg.sender === sender && msg.receiver === receiver) || (msg.sender === receiver && msg.receiver === sender))
//                 .map((msg, index) => (
//                   <p key={index} className={msg.sender === sender ? 'sender' : 'receiver'}>
//                     {msg.message}
//                   </p>
//               ))}
//             </div>

//             <form onSubmit={sendMessage}>
//               <span 
//                 className="emoji-button" 
//                 onClick={() => setIsEmojiPickerVisible(!isEmojiPickerVisible)}
//               >
//                 😀
//               </span>

//               {/* Overlay when emoji picker is visible */}
//               {isEmojiPickerVisible && (
//                 <div className="emoji-overlay">
//                   <Picker onSelect={addEmoji} />
//                 </div>
//               )}

//               <input
//                 type="text"
//                 value={messageDrafts[receiver] || ''} 
//                 onChange={handleMessageChange}
//                 placeholder="Type a message"
//               />
//               <button type="submit">Send</button>
//             </form>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default ChatApp;
