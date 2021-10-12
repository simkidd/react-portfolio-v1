import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({title, width, text}) => {
    return (
        <Wrapper>
            <h6>{title}</h6>
            <Bar>
                <p>{text}</p>
                <Progress>
                    <span style={{width: width}}></span>
                </Progress>
            </Bar>
        </Wrapper>
    )
}

export default ProgressBar

const Wrapper = styled.div`
    h6{
        margin-bottom: 0.5rem;
    }
`
const Bar = styled.div`
    display: flex;
    align-items:center;
    p{
        padding-right: 1.1rem;
        font-size: 15px;
    }
`
const Progress = styled.div`
    position: relative;
    width:100%;
    height:0.4rem;
    background: var(--borderColor);
    span{
        position: absolute;
        background: var(--primaryColor);
        left: 0;
        bottom:0;
        height:100%;
    }
`