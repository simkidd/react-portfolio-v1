import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import ProgressBar from '../ProgressBar';
import Title from '../title/Title'

const SkillSection = () => {
    return (
        <Wrapper>
            <Title title='My Skills' span='My Skills' />
            <InnerLayout>
                <Skills>
                    <ProgressBar title='HTML5' text='90%' width='90%' />
                    <ProgressBar title='CSS3' text='70%' width='70%' />
                    <ProgressBar title='JAVASCRIPT' text='50%' width='50%' />
                    <ProgressBar title='REACT JS' text='50%' width='50%' />
                </Skills>
            </InnerLayout>
        </Wrapper>
    )
}

export default SkillSection

const Wrapper =styled.div`
`
const Skills =styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 3rem;
    @media screen and (max-width:768px){
        grid-template-columns: repeat(1, 1fr);
    }
`
