import React from 'react';
import styled from 'styled-components';

const ServiceCard = ({icon, title, content}) => {
    return (
        <Card>
            <Container>
                <Icon>{icon}</Icon>
                <h4>{title}</h4>
                <p>{content}</p>
            </Container>
        </Card>
    )
}

export default ServiceCard

const Card= styled.div`
    background-color: var(--backgroundDarkGrey);
    border-left: 1px solid var(--borderColor);
    border-right: 1px solid var(--borderColor);
    border-top: 8px solid var(--borderColor);
    border-bottom: 1px solid var(--borderColor);
    &:hover{
        border-top: 8px solid var(--primaryColor);
        transform: translateY(3px);
    }
`
const Container = styled.div`
    padding:1.2rem;
    h4{
        color: var(--whiteColor);
        font-size: 1.6rem;
        padding: 1rem 0;
        position: relative;
        &::after{
            content: '';
            width: 4rem;
            background: var(--borderColor);
            height: 3px;
            position: absolute;
            left: 0;
            bottom:0;
            border-radius: 10px;
        }
    }
    p{
        padding:0.8rem 0;
    }
`
const Icon =styled.span`
    svg{
        font-size: 3rem;
    }
`