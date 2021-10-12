import React from 'react';
import styled from 'styled-components';
import SkillSection from '../components/sections/SkillSection';

const Skills = () => {
    return (
        <Wrapper>
            <SkillSection />
        </Wrapper>
    )
}

export default Skills

const Wrapper = styled.div`
    padding: 5rem;
    @media screen and (max-width:768px){
        padding: 3.5rem;
    }
`