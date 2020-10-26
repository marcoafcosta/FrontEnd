import React, { Component } from "react";
import '../Demo/Demo.css';
import DemoLogo from '../Demo/DemoLogo';
import DemoTabs from '../Demo/DemoMenuBar';
import CoffeeMachineDemo from '../Demo/CoffeeMachines';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Toasters from '../Demo/Toasters';
import MenuInputs from '../Demo/DemoTopBar';
import ProductDemo from '../Demo/ProductDemo';
import ProductDemoToaster from "../Demo/ProductDemoToaster";
import App from '../App'

export default function Demo() {


  return (
    <div>
      <Router>
      <Switch>
      <Route path="/" exact component={App} />
      <div className='demoContent'>
        <DemoLogo />
        <MenuInputs />
        <DemoTabs />

        <Switch>
          
          <Route path="/coffeemachines" exact component={CoffeeMachineDemo} />
          <Route path="/toasters" exact component={Toasters} />
          <Route path="/productdemo" exact component={ProductDemo} />
          <Route path="/productdemotoaster" exact component={ProductDemoToaster} />
        </Switch>
        </div>
        </Switch>
      </Router>
    </div>
  );
}








/* class Demo extends Component {
  render() {
    return (



        <div className='demoMainContainer'>

        <DemoLogo />
        <div>
        <DemoTabs />
        </div>
        <div className='imagesDemo'>
            <div className='image1'>
        <Image
    src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1568755264-41poqg4wCDL.jpg?crop=1.00xw:0.866xh;0,0.112xh&resize=480:*"
    as='a'
    size='medium'
    href='http://google.com'
    target='_blank'
    label='Coffee Machine'
    dimmer='Dimmer'
  /><button type='button'className='button1'> Check me out</button>
  </div>
  <Image
    src='https://react.semantic-ui.com/images/wireframe/image-text.png'
    as='a'
    size='medium'
    href='http://google.com'
    target='_blank'
  />
  <Image
    src='https://react.semantic-ui.com/images/wireframe/image-text.png'
    as='a'
    size='medium'
    href='http://google.com'
    target='_blank'
  />
  </div>
        </div>
    );
  }
}

export default Demo; */