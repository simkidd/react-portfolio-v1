import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact'
import Skills from '../pages/Skills';
import Services from '../pages/Services';

const Pages = () => {
    return (
        <Switch>
            <Route path='/' exact >
                {Home}
            </Route>
            <Route path='/about'>
                {About}
            </Route>
            <Route path='/skills'>
                {Skills}
            </Route>
            <Route path='/services'>
                {Services}
            </Route>
            <Route path='/portfolios'>
                {Portfolio}
            </Route>
            <Route path='/contact'>
                {Contact}
            </Route>
        </Switch>
    )
}

export default Pages
