// components/Home/Home.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from '../Slider/Slider';


const HomePage = () => {
    const [count, setCount] = useState(0);

    return (
        <Container>
            <Slider divisions={5} width={300} height={50} key={count} />
        </Container>


    );
};

const Container = styled.div`
            text-align: center;
            display: flex;
            flex-direction: column;
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
