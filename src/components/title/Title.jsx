import React from 'react';
import styled from 'styled-components';

const Title = ({title, span}) => {
    return (
        <TitleWrapper>
            <h2>{title} <b><span>{span}</span></b></h2>
        </TitleWrapper>
    )
}

export default Title

const TitleWrapper = styled.div`
    position: relative;
    h2{
        position: relative;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 3rem;
        color: var(--whiteColor);
        padding-bottom: 0.7rem;
        &::before{
            content: '';
            position: absolute;
            bottom:0;
            width:7.4rem;
            height: 0.33rem;
            background-color: var(--backgroundLightColor2);
            left:0;
            border-radius:15px;
        }
        &::after{
            content:'';
            position: absolute;
            bottom:0;
            width:3.5rem;
            height:0.33rem;
            background: var(--primaryColor);
            left:0;
            border-radius:15px;
        }
        span{
            font-weight: 900;
            color: rgba(25,29,43,0.44);
            font-size: 5rem;
            position: absolute;
            top:30%;
            left: 0;
            z-index: -1;

        }
    }
`
