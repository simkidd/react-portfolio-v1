import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Pages from './routes/Pages';
import { Brightness4, Menu } from '@material-ui/icons';
import { IconButton, Switch } from '@material-ui/core'

const App = () => {
  const [navToggle, setNavToggle] = useState(false)
  const [theme, setTheme] = useState('dark-theme')
  const [checked, setChecked] = useState(false)

  useEffect(()=>{
    document.documentElement.className = theme
  },[theme]);

  const themeToggler = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false)
    }else{
      setTheme('light-theme');
      setChecked(true)
    }
  }

  return (
    <Router>
      <div className="App">
        <Sidebar toggle={navToggle} />

        <div className='theme'>
          <div className='light-dark-mode'>
            <div className="left">
            <IconButton style={{marginRight:'0.5rem'}}  >
              <Brightness4 />
            </IconButton>
            </div>
            <div className="right">
              <Switch 
                value=''
                checked={checked}
                inputProps={{'aria-label': ''}}
                size='medium'
                onClick={themeToggler}
              />
            </div>
          </div>
        </div>

        <MenuButton>
          <IconButton onClick={() => setNavToggle(!navToggle)}>
            <Menu />
          </IconButton>
        </MenuButton>
        
        <MainContent>
          <Pages />
        </MainContent>
      </div>
    </Router>
  )
}

export default App

const MainContent = styled.div`
  position: relative;
  margin-left: 16.3rem;
  min-height:100vh;
  @media screen and (max-width: 1200px){
    margin-left: 0;
  }
`

const MenuButton = styled.div`
  position: absolute;
  right: 5%;
  top: 3%;
  display: none;
  z-index:15;
  svg{
    font-size: 2.5rem;
  }
  @media screen and (max-width:1200px){
    display: block;
  }
`
