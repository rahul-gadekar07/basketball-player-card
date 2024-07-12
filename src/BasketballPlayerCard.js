// src/BasketballPlayerCard.js
import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBasketballBall } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const grow = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  max-width: 350px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    border: 2px solid #007bff; /* Dark blue border on hover */
    box-shadow: 0 12px 24px rgba(0, 123, 255, 0.2); /* Adjusted blue shadow */
    background-color: #f8f9fa; /* Lighter background on hover */
    .stat-value {
      animation: none; /* Reset the animation */
      animation: ${fadeIn} 0.5s ease-in-out; /* Trigger the animation */
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
  display: inline-block;
`;

const Position = styled.p`
  color: #888;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  width: 100%;
`;

const Stat = styled.div`
  display: flex;
  justify-content: space-between; /* Adjusted for better alignment */
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StatText = styled.span`
  flex: 1;
`;

const StatValue = styled.span`
  color: #333;
  font-weight: bold;
`;

const BasketballIcon = styled(FaBasketballBall)`
  color: #ff4500;
  margin-right: 10px;
`;

const Letter = styled.span`
  display: inline-block;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.5) rotate(5deg);
    color: #ff4500;
  }
`;

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  const pointsRef = useRef(null);
  const assistsRef = useRef(null);
  const reboundsRef = useRef(null);

  const animateStat = (element, value) => {
    let current = 0;
    const increment = value / 100;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(interval);
      }
      element.textContent = current.toFixed(1);
    }, 20);
  };

  const handleMouseEnter = () => {
    animateStat(pointsRef.current, stats.pointsPerGame);
    animateStat(assistsRef.current, stats.assistsPerGame);
    animateStat(reboundsRef.current, stats.reboundsPerGame);
  };

  return (
    <Card onMouseEnter={handleMouseEnter}>
      <Image src={image} alt={`${name}`} />
      <Name>
        {name.split('').map((char, index) => (
          <Letter key={index}>{char}</Letter>
        ))}
      </Name>
      <Position>{position}</Position>
      <Stats>
        <Stat>
          <StatText>Points per Game</StatText>
          <StatValue className="stat-value" ref={pointsRef}></StatValue>
          <BasketballIcon />
        </Stat>
        <Stat>
          <StatText>Assists per Game</StatText>
          <StatValue className="stat-value" ref={assistsRef}></StatValue>
          <BasketballIcon />
        </Stat>
        <Stat>
          <StatText>Rebounds per Game</StatText>
          <StatValue className="stat-value" ref={reboundsRef}></StatValue>
          <BasketballIcon />
        </Stat>
      </Stats>
    </Card>
  );
};

export default BasketballPlayerCard;
