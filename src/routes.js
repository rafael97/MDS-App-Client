import React from 'react';
import {Route,Switch} from 'react-router-dom';

//components
import Categories from './components/Categories'
import App from './components/App'
import About from './components/About'
import Courses from './components/Courses'
import Page404 from './components/Page404'

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path = "/categories" component = {Categories}/>
            <Route path = "/about" component = {About}/>
            <Route path = "/courses" component = {Courses}/>
            <Route  component = {Page404}/>             
        </Switch>
    </App>
export default AppRoutes