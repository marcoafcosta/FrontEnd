import React from 'react';
import './App.css';
/* import CopyrightFooter from './Components/Copyright';
import ButtonSocial from './Components/Social';
import ChatbotApp from './Chatbot/ChatbotApp';
import LogoContainer from './Components/Logo';
import TopBar from './Components/TopBar'; */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* import Dashboard from './Pages/Dashboard';
import NewTabs from './Components/MenuBar';
import Login from './Pages/Login'; */
//import Login from './Pages/TestLogin';
/* import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/AboutUs';
import Register from './Pages/Register';
import SimpleMap from './Pages/ContactUs'; */
import Demo from './Pages/Demo';

function RouteB() {
    return (
        <Router>
            <Switch>
                <Route path="/Demo">
                    <Demo />
                </Route>
            </Switch>
        </Router>
    );
}

export default RouteB;