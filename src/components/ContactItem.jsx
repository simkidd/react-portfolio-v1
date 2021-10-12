import React from 'react';
import styled from 'styled-components';

const ContactItem = ({icon, title, cont}) => {
    return (
        <ItemWrapper>
            <Left>
                {icon}
            </Left>
            <Right>
                <h6>{title}</h6>
                <p>{cont}</p>
            </Right>
        </ItemWrapper>
    )
}

export default ContactItem

const ItemWrapper=styled.div`
    background: var(--backgroundDarkGrey);
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 2rem;
    }
`
const Left = styled.div`
    padding: 1.5rem;
    border: 1px solid var(--borderColor);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2.5rem;
    svg{
        font-size: 2rem;
    }
`
const Right = styled.div`
    h6{
        color: var(--whiteColor);
        font-size: 1rem;
        padding-bottom: 0.6rem;
    }
    p{
        padding: 0.1rem 0;
        font-size: 14px;
    }
`