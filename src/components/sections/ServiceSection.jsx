import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../ServiceCard';
import Title from '../title/Title';
import {Brush, DeveloperMode} from '@material-ui/icons'

const ServiceSection = () => {
    return (
        <Section>
            <Title title='Services' span='Services' />
            <Services>
                <ServiceCard icon={<Brush/>} title='Web Design' content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, minus?' />
                <ServiceCard icon={<DeveloperMode/>} title='Web Development' content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, minus?' />
            </Services>
        </Section>
    )
}

export default ServiceSection

const Section =styled.div`
`
const Services = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin-top: 5rem;
    @media screen and (max-width:768px){
        grid-template-columns: repeat(1, 1fr);
    }
`

