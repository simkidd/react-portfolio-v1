import React from 'react';
import styled from 'styled-components';
import ContactItem from '../components/ContactItem';
import Title from '../components/title/Title'
import { Phone, Email, LocationOn } from '@material-ui/icons';
import PrimaryButton from '../components/buttons/PrimaryButton';

const Contact = () => {
    return (
        <Layout>
            <Title title='Contact' span='Contact' />
            <ContactPage>
                <Inner>
                    <ContactTitle>
                        <h4>Get In Touch</h4>
                    </ContactTitle>
                    <Wrapper>
                        <Left>
                            <ContactItem
                                icon={<Phone />}
                                title='Phone'
                                cont='+234 7033101706'
                            />
                            <ContactItem
                                icon={<Email />}
                                title='E-mail'
                                cont='johnmsn22@gmail.com'
                            />
                            <ContactItem
                                icon={<LocationOn />}
                                title='Location'
                                cont='Port Harcourt, Rivers, Nigeria'
                            />
                        </Left>
                        <Right>

                            <Form>
                                <InputField>
                                    <label>Name</label>
                                    <input type="text" />
                                </InputField>
                                <InputField>
                                    <label>E-mail</label>
                                    <input type="email" />
                                </InputField>
                                <InputField>
                                    <label>Subject</label>
                                    <input type="text" />
                                </InputField>
                                <InputField>
                                    <label>Message</label>
                                    <textarea type="text" cols='30' rows='10' />
                                </InputField>
                                <InputField>
                                    <PrimaryButton title='Send' />
                                </InputField>
                            </Form>
                        </Right>
                    </Wrapper>
                </Inner>
            </ContactPage>
        </Layout>
    )
}

export default Contact

const Layout = styled.div`
    padding: 5rem;
    @media screen and (max-width:768px){
        padding: 3.5rem;
    }
`
const ContactPage = styled.div`
`
const Inner = styled.div`
    padding: 5rem 0;
    `
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3.5rem;
    @media screen and (max-width:768px){
        grid-template-columns: repeat(1, 1fr);
    }

`
const Left = styled.div`
    @media screen and (max-width:768px){
        margin-bottom:3rem;
    }
`
const Right = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    @media screen and (max-width:768px){
        width: 70%;
    }
`
const ContactTitle = styled.div`
    margin-bottom: 2rem;
    h4{
        color: var(--whiteColor);
        font-size: 1.8rem;
    }
`
const Form = styled.form`
    width: 100%;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
const InputField = styled.div`
    width: 100%;
    position: relative;
    &:not(:last-child){
        margin-bottom: 2rem;
    }
    label{
        position: absolute;
        left:20px;
        top: -12px;
        display:inline-block;
        background: var(--backgroundDarkColor);
        padding: 0 0.5rem;
        color:inherit;
    }
    input{
        border: 1px solid var(--borderColor);
        background: transparent;
        padding: 0 15px;
        height: 50px;
        width:100%;
        outline:none;
        color: inherit;
    }
    textarea{
        background: transparent;
        border: 1px solid var(--borderColor);
        outline: none;
        width:100%;
        color: inherit;
        padding: 0.8rem 1rem;
        resize: none;
    }
`

