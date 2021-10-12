import React from 'react';
import Title from '../components/title/Title';
import {InnerLayout, MainLayout} from '../styles/Layouts';

const Portfolio = () => {
    return (
        <MainLayout>
        <Title title='Portfolio' span='Portfolio' />
            <InnerLayout>
                Portfolio is here...
            </InnerLayout>
        </MainLayout>
    )
}

export default Portfolio
