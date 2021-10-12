import React from 'react';
import styled from 'styled-components';

const PrimaryButton = ({title}) => {
    return (
        <Button>
            {title}
        </Button>
    )
}

export default PrimaryButton

const Button = styled.a`
    background: var(--primaryColor);
    padding: 0.8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    transition: all 0.4s ease-in-out;
    &::after{
        content:'';
        position: absolute;
        width:0;
        height: 0.2rem;
        transition: all 0.4s ease-in-out;
        left:0;
        bottom: 0;
        opacity: 0.7;
    }
    &:hover::after{
        width:100%;
        background: var(--whiteColor);
    }
`
