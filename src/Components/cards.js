import React from 'react';
import { Card } from 'antd';
import { useSpring, animated } from 'react-spring';
import './cards.css'; // Add custom CSS for additional styling

const HoverCard = () => {
  // Define animation with react-spring
  const [hovered, setHovered] = React.useState(false);

  // React Spring animation configuration
//   const springProps = useSpring({
//     transform: hovered ? 'scale(1.05)' : 'scale(1)',
//     boxShadow: hovered
//       ? '0px 15px 25px rgba(0, 0, 0, 0.3)'
//       : '0px 10px 15px rgba(0, 0, 0, 0.1)',
//   });
// const springProps = useSpring({
//     transform: hovered ? 'scale(1.1) rotate(3deg)' : 'scale(1) rotate(0deg)',
//     boxShadow: hovered
//       ? '0px 20px 30px rgba(0, 0, 0, 0.4)'
//       : '0px 10px 15px rgba(0, 0, 0, 0.1)',
//     config: { tension: 200, friction: 15 }, // Control spring speed and elasticity
//   })
const springProps = useSpring({
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
    opacity: hovered ? 1 : 0.8,
    backgroundColor: hovered ? '#ff7f50' : '#87ceeb',
    boxShadow: hovered
      ? '0px 20px 40px rgba(0, 0, 0, 0.3)'
      : '0px 10px 20px rgba(0, 0, 0, 0.1)',
    config: { tension: 150, friction: 10 }, // Control the speed of animation
  });
  return (
    <animated.div
      className="hover-card-wrapper"
      style={springProps} // Apply spring animation styles
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card
        hoverable
        title="Hover Me"
        cover={
          <img
            alt="example"
            src="https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg"
          />
        }
      >
        
        <p>Card content goes here...</p>
      </Card>
    </animated.div>
  );
};

export default HoverCard;
