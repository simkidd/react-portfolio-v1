import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../buttons/PrimaryButton';

const AboutSection = () => {
    return (
        <Section>
            <Left>
                <img src="/images/profile.jpg" alt="" />
            </Left>
            <Right>
                <Name>I am <span>Mason John</span></Name>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus vel cumque ratione vitae et recusandae quisquam est qui ipsam quia.</Desc>
                <AboutInfo>
                    <Info style={{paddingRight:'2rem'}}>
                        <Detail>Other Names</Detail>
                        <Detail>Nationality</Detail>
                        <Detail>Languages</Detail>
                        <Detail>Location</Detail>
                        <Detail>Service</Detail>
                    </Info>
                    <Info>
                        <Detail>: Onisofien</Detail>
                        <Detail>: Nigerian</Detail>
                        <Detail>: English</Detail>
                        <Detail>: Port Harcourt, Rivers, Nigeria</Detail>
                        <Detail>: </Detail>
                    </Info>
                </AboutInfo>
                <PrimaryButton title='Download CV' />
            </Right>
        </Section>
    )
}

export default AboutSection

const Section = styled.div`
    display: flex;
    margin-top:5rem;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }

`
const Left = styled.div`
    width: 100%;
    @media screen and (max-width: 768px){
        margin-bottom: 2rem;
    }
    img{
        width: 95%;
        object-fit: cover;
    }
`
const Right =styled.div`
    width:100%;

`
const Name = styled.h4`
    font-size: 1.5rem;
    color: var(--whiteColor);
    span{
        font-size: 2rem;
    }
`
const Desc = styled.p`
    padding: 1rem 0;
`
const AboutInfo = styled.div`
    display: flex;
    padding-bottom: 1.4rem;
`

const Detail = styled.p`
    font-weight: 600;
`
const Info= styled.div`
    p{
        padding:0.3rem 0;
    }
`

