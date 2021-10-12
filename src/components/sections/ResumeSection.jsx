import React from 'react';
import styled from 'styled-components';
import ResumeItem from '../ResumeItem';
import SmallTitle from '../title/SmallTitle';
import Title from '../title/Title';
import {School, Work } from '@material-ui/icons';
import works from '../../data/Work';
import qualifications from '../../data/Education';
import { InnerLayout } from '../../styles/Layouts';

const ResumeSection = () => {

    return (
        <Wrapper>
            <Title title='Resume' span='Resume' />
            <InnerLayout>
                <SmallWrap>
                    <SmallTitle
                    icon={<Work/>} 
                    title='Experience'
                    />
                </SmallWrap>
                <ResumeContent>
                {
                    works.map((w)=>{
                        return <ResumeItem key={w.id} 
                            year={w.year}
                            title={w.title}
                            subTitle={w.subTitle}
                            text={w.text}
                        />
                    })
                }
                </ResumeContent>

                <SmallWrap style={{marginTop:'4rem'}}>
                    <SmallTitle 
                    icon={<School/>} 
                    title='Education'
                    />
                </SmallWrap>
                <ResumeContent>
                {
                    qualifications.map((q)=>{
                        return <ResumeItem key={q.id} 
                            year={q.year}
                            title={q.title}
                            subTitle={q.subTitle}
                            text={q.text}
                        />
                    })
                }
                </ResumeContent>
            </InnerLayout>
        </Wrapper>
    )
}

export default ResumeSection

const Wrapper = styled.div`
    padding: 5rem 0;
`

const SmallWrap = styled.div`
    padding-bottom: 3rem;
`
const ResumeContent = styled.div`
    border-left: 2px solid var(--borderColor);
`
