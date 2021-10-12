import React from 'react';
import styled from 'styled-components'

const ResumeItem = ({year, title, subTitle, text}) => {
    return (
        <Wrapper>
            <Left>
                <p>{year}</p>
            </Left>
            <Right>
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </Right>
        </Wrapper>
    )
}

export default ResumeItem

const Wrapper = styled.div`
    display:flex;
    @media screen and (max-width: 768px){
        p,h5,h6{
            font-size: 80%;
        }
    }
    &:not(:last-child){
        padding-bottom: 3rem;
    }
`
const Left = styled.div`
    width:50%;
    padding-left:20px;
    position: relative;
    &::before{
        content:'';
        position: absolute;
        left: -10px;
        top: 5px;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background: var(--backgroundDarkColor);
        border: 2px solid var(--borderColor);
    }
    p{
        display: inline-block;
    }
`
const Right = styled.div`
    padding-left: 5rem;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        left:0;
        top:15px;
        height: 2px;
        width:3rem;
        background: var(--borderColor);
    }
    h5{
        color: var(--primaryColor);
        font-size: 2rem;
        padding-bottom: 0.4rem;
    }
    h6{
        padding-bottom: 0.6rem;
        font-size: 1.5rem;
    }
    p{
        line-height: 1.2;
    }
`
