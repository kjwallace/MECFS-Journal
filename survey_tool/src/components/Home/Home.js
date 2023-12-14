// components/Home/Home.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from '../Slider/Slider';

import data from './../../Data/Symptoms'
import paragraphs from '../../Data/Paragraphs';

import chartPicture from './../../Data/imgs/kelvin.png'

import LeftArrow from './../../Data/imgs/chevron_left_FILL0_wght400_GRAD0_opsz24.svg'
import RightArrow from './../../Data/imgs/chevron_right_FILL0_wght400_GRAD0_opsz24.svg'

import AbleorNot from '../Pages/AbleorNot';
import BodilyNeeds from '../Pages/BodilyNeeds';
import Improvement from '../Pages/Improvement';

const LevelDescription = ({ descriptions }) => {
    return (
        <div>
            {descriptions.map((description, index) => (
                <p key={index}>{description}</p>
            ))}
        </div>
    );
};

const FIRST_PAGE = 0
const LAST_PAGE = 4
const HomePage = () => {

    const [page, setPage] = useState(0)
    const [goodBadScale, setGoodBadScale] = useState(['Perfect', 'Very Good', 'Decent', 'Mostly Good', 'Slightly Good', 'Slightly Bad', 'Mostly Bad', 'Decently Bad', 'Very Bad', 'Horrible'])
    const [EasyHard, setEasyHardScale] = useState(['No Problem', 'Easy', 'Annoying', 'Able To', 'Maybe Able To', 'Probably Not Able To', 'Mentally Not Able To', 'Physically Unable To', 'Would Hurt', 'Would Kill'])

    function next_page() {
        if (page + 1 != LAST_PAGE) {
            setPage(page + 1)
        }
    }

    function past_page() {

        if (page != FIRST_PAGE) {
            setPage(page - 1)
        }
    }

    //paragraphs['intro']
    return (
        <OutsideContainer>
            <WelcomeMessage>Symptom Severity Tracker</WelcomeMessage>
            <Container>


                <PageButton onClick={past_page}>
                    <ButtonImage src={LeftArrow} />
                </PageButton>

                {page == 0 && (
                    <InnerContainer>
                        <TextBlock>
                            <Title>{paragraphs[page]['Title']}</Title>
                            <SubTitle>{paragraphs[page]['SubTitle']}</SubTitle>
                            <Body>{paragraphs[page]['Body']}</Body>
                            <SubTitle>{paragraphs[page]['SubTitle1']}</SubTitle>
                            <Body>{paragraphs[page]['Body1']}</Body>
                            <SubTitle>{paragraphs[page]['SubTitle2']}</SubTitle>
                            <Body>{paragraphs[page]['Body2']}</Body>
                        </TextBlock>
                        <StyledImage src={chartPicture} />
                    </InnerContainer>
                )}
                {page == 1 && (
                    <InnerContainer>

                        <AbleorNot paragraphs={paragraphs[1]} list={EasyHard}></AbleorNot>

                    </InnerContainer>
                )}
                {page == 2 && (
                    <InnerContainer>
                        <BodilyNeeds paragraphs={paragraphs[2]} list={goodBadScale}></BodilyNeeds>
                    </InnerContainer>
                )}

                {page == 3 && (
                    <InnerContainer>

                        <Improvement paragraphs={paragraphs[3]} list={EasyHard}></Improvement>

                    </InnerContainer>
                )}

                <PageButton onClick={next_page}>
                    <ButtonImage src={RightArrow} />
                </PageButton>




            </Container>
        </OutsideContainer>
    );
};

const fadeInOut = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const OutsideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    text-align: center;
    width: 100vw;
    max-height: 100vh;
    min-height: 100vh;
    overflow-y: hidden;
    background-color:  #EAEAEA;
    padding: 0;
    margin: 0;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    text-align: center;
    width: 100%;
    max-height: 90vh;
    
    

    background-color:  #EAEAEA;
  
    padding: 0;
    margin: 0;
`;

const WelcomeMessage = styled.h1`
    width: 100%;
    min-height: 5vh;
    
    color: #820000;

    padding: 0;
    margin: 0;
`;

const InnerContainer = styled.div`
    animation: ${fadeInOut} 1s ease;  

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    min-height: 90vh;
    width: 100%;
    height: auto;

    border: 3px solid #B83A4B;
    box-shadow: 0px 0px 0px 4px #820000;
    background-color:   #979694;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    
    overflow-y: auto;
`;

const PageButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 10vh;
    height: 100%;

    border: none;
    
    background-color:   transparent;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0;
    padding: 0;
`;


const ButtonImage = styled.img`
    z-index: 2;
    width: 80%;
    height: auto;

    background: color: 
    margin: none;
    padding:none;

    
    background: #820000;

    &:hover{
        scale: 1.1;
    }

    &:active{
        scale: 0.9;
    }
`;

const TextBlock = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: left;
    min-width: 50%;
    max-width: 50%;
    height: 100%;

    border: none;
    
    background-color: transparent;
    overflow-x: hidden;

`;



const Title = styled.div`
    font-family: 'Source Sans 3', sans-serif;
    font-size: 5rem;
    width: auto;
    
    min-height: 5vh;
    background: transparent;
    color: #820000;
    text-align: center;
    padding: 0;
    margin-bottom: 5vh;
    border-bottom: 3px solid white;
`;

const SubTitle = styled.div`
    font-family: 'Source Sans 3', sans-serif;
    font-size: 2.3rem;
    width: auto;
    min-height: auto;
    background: transparent;
    color: #820000;
    
    padding: 0;
    margin-bottom: 2vh;

`;

const Body = styled.div`
    font-family: 'Source Sans 3', sans-serif;
    font-size: 1.5rem;
    width: auto;
    min-height: auto;
    background: transparent;
    color: white;

    padding: 0;
    margin-bottom: 2vh;
`;





const StyledImage = styled.img`
    z-index: 2;
    max-width: 50%;
    height: auto;
    object-fit: contain;
`;



export default HomePage;
