import React from 'react';
import AboutSection from '../components/sections/AboutSection';
import ResumeSection from '../components/sections/ResumeSection';
import Title from '../components/title/Title';
import { MainLayout } from '../styles/Layouts';

const About = () => {
    return (
        <MainLayout>
            <Title title='About Me' span='About Me' />
            <AboutSection />
            <ResumeSection />
        </MainLayout>
    )
}

export default About


