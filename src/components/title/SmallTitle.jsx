import React from 'react';
import styled from 'styled-components';


const SmallTitle = ({icon, title}) => {
    return (
        <Wrapper>
            <p>{icon}</p>
            <h3>{title}</h3>
        </Wrapper>
    )
}

export default SmallTitle

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    p{
        padding-right: 1rem;
        svg{
            font-size: 3rem;
        }
    }
    h3{
        color: var(--whiteColor);
        font-size: 2rem;
    }
`
