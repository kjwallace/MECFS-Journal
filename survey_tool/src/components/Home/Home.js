// components/Home/Home.js
import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Container>
      <WelcomeMessage>Welcome to the ME-CFS Symptom Journal!</WelcomeMessage>
      <FeatureList>
        <FeatureItem>Feature 1</FeatureItem>
        <FeatureItem>Feature 2</FeatureItem>
        <FeatureItem>Feature 3</FeatureItem>
        {/* Add more features as needed */}
      </FeatureList>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const WelcomeMessage = styled.h1`
  margin-bottom: 20px;
  color: #820000;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  margin: 10px;
  font-size: 1.2rem;
`;

export default HomePage;
