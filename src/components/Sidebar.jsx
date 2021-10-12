import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook, GitHub, Instagram, Twitter, LinkedIn } from '@material-ui/icons'

const Sidebar = ({toggle}) => {
    return (
        <SideBarWrapper className={`${toggle ? 'navToggle' : '' }`}>
            <Navigation>
                <AvatarWrap>
                    <img src="/images/logo.jpg" alt="" />
                </AvatarWrap>
                <NavLinks>
                    <li>
                        <NavLink activeClassName='active' to='/' exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/about' >About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/services'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/skills'>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/portfolios'>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/contact'>Contact</NavLink>
                    </li>
                </NavLinks>
                <Social>
                    <Link to='#' target='_blank' >
                        <Facebook />
                    </Link>
                    <Link to='#' target='_blank' >
                        <Instagram  />
                    </Link>
                    <Link to='#' target='_blank' >
                        <GitHub />
                    </Link>
                    <Link to='#' target='_blank' >
                        <Twitter />
                    </Link>
                    <Link to='#' target='_blank' >
                        <LinkedIn />
                    </Link>
                </Social>
                <Footer>
                    <p>&copy; 2021 <b>John Mason</b></p>
                </Footer>
            </Navigation>
        </SideBarWrapper>
    )
}

export default Sidebar

const SideBarWrapper = styled.div`
    background: var(--backgroundDarkGrey);
    width:16.3rem;
    height:100vh;
    position: fixed;
    overflow: hidden;
    overflow-x: scroll;
    transition: all 0.4s ease;
    @media screen and (max-width: 1200px){
        transform: translateX(-100%);
        z-index: 20;
    }
    &.navToggle{
    transform: translateX(0);
    z-index:20;
}
`
const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--borderColor);
`
const AvatarWrap = styled.div`
    width: 100%;
    border-bottom: 1px solid var(--borderColor);
    text-align: center;
    padding: 1rem 0;
    img{
        width: 70%;
        border: 6px solid var(--borderColor);
        border-radius: 50%;
        object-fit: cover;
    }
`
const NavLinks = styled.ul`
    width:100%;
    text-align: center;
    .active{
        background: var(--primaryColorLight);
        color: #fff;
    }
    li{
        display: block;

        a{
            display: block;
            padding: 0.45rem 0;
            position: relative;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 1px;
            z-index:10;
            color:inherit;
            transition: all 0.4s ease-in-out;
            &:hover{
                color: var(--whiteColor);
                cursor: pointer;
            }
            &::before{
                content:'';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height:50%;
                background: var(--primaryColor);
                transition: all 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
                opacity:0.21;
                z-index: -1;
            }
        }
        a:hover::before{
            width: 100%;
            height: 100%;
        }
    }

`
const Footer = styled.footer`
    width: 100%;
    border-top: 1px solid var(--borderColor);
    p{
        padding: 1.3rem 0;
        font-size: 12px;
        display: block;
        text-align: center;
    }
`
const Social = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    /* position: absolute;
    bottom: 4rem; */
    
    a{
        display:flex;
        align-items:center;
        justify-content: center;
        border-radius:50%;
        /* border: 1px solid #fff; */
        /* margin-right: 0.5rem; */
        color: var(--whiteColor);
        font-size: 14px;
        transition: all 0.5s ease;
        &:not(:last-child){
            margin-right:0.5rem;
        }
        &:hover{
            color: #007bff;
        }
        svg{
            margin:0.5rem;
            font-size:1rem;
            &:hover{
                transform: scale(1.5)
            }
        }
    }
    
`