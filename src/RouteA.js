import React from 'react';
import './App.css';
import CopyrightFooter from './Components/Copyright';
import ButtonSocial from './Components/Social';
import ChatbotApp from './Chatbot/ChatbotApp';
import LogoContainer from './Components/Logo';
import TopBar from './Components/TopBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import NewTabs from './Components/MenuBar';
import Login from './Pages/Login';
//import Login from './Pages/TestLogin';
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/AboutUs';
import Register from './Pages/Register';
import SimpleMap from './Pages/ContactUs';
// import Demo from './Pages/Demo';
import RouteB from './RouteB';

function RouteA() {
  return (
    <Router>
      <div className="App">
     {/*  <TopBar /> */}
        <LogoContainer />
        <NewTabs />
        <div className="Content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/aboutus" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contactus" component={SimpleMap} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
            <Route path="/Demo" component={RouteB} />
          </Switch>
        </div>
        <CopyrightFooter />
        <ButtonSocial style={{ position: 'absolute', left: '50%' }} />
        <ChatbotApp />
      </div>
    </Router>
  );
}

export default RouteA;