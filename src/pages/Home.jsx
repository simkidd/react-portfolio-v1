import React from 'react';
import styled from 'styled-components';
import Particle from '../components/Particle';

const Home = () => {
    return (
        <HomePage>
            <ParticleWrapper>

            </ParticleWrapper>
                <Particle />
            <Typography>
                <Name>
                    Hi, I<span>'</span>m <span>Mason John</span>
                </Name>
                <Desc>Front-End Web Developer</Desc>
                
            </Typography>
        </HomePage>
    )
}

export default Home

const HomePage = styled.div`
    width:100%;
    height: 100vh;
    position: relative;
`
const ParticleWrapper= styled.div``
const Typography=styled.div`
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width:80%;
`
const Name = styled.h1`
    font-size: 4rem;
    color: var(--whiteColor);
    margin-bottom: 0.4rem;
    span{
        font-size: 4rem;
        color: var(--primaryColor);
    }
    @media screen and (max-width: 768px){
        font-size: 3rem;
    }
`
const Desc = styled.p`

`