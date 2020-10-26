import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Card } from 'semantic-ui-react';
import Container from '@material-ui/core/Container';
import { Button } from 'semantic-ui-react'
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Profile from "./Profile";
import MyClaims from './MyClaims';
import './Dashboard.css'



  
 



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
      
    };
    
    };
    
  
  signOut = () => {

    this.setState({
      islogout: true
    });
  };
  /* useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }));

  classes = useStyles(); */
  
  render() {
    if (this.state.islogout) {
      return <Redirect to="/Login" />;
    }
    const { match } = this.props;
    return (
      <Container maxWidth="xl" display='flex' maxHeight='xl'> 
        <div className='main-container'>
        <div>
        <Router>
        <div className='menu-container'>
      <Paper className={Paper}>
        <MenuList>
          <Link to="/profile">
          <MenuItem>Profile</MenuItem>
          </Link>
          <Link to="/myclaims">
          <MenuItem>My claims</MenuItem>
          </Link>
          <MenuItem onClick={this.signOut} Redirect to="/Login">Logout</MenuItem>
        </MenuList>
      </Paper>
      
    </div>

    <div className='content-container'> 
    
      <Switch>
            <Route path="/profile"  component={Profile} />
            <Route path="/myclaims" component={MyClaims} />
            
          </Switch>
          
          </div>
          </Router>
          {/* <h1>My Page</h1>
          <br></br>
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header content='Customer A' />
                <Card.Meta content='Text 1' />
                <Card.Description content='This is your contract info' />
              </Card.Content>
            </Card>

            <Card>
              <Card.Content
                header='Address'
                meta='Text 2'
                description='This is your address'
              />
            </Card>
            <Card>
              <Card.Content
                header='Options'
                meta='Text 3'
                description='This is are the options available for you to upgrade'
              />
            </Card>


          </Card.Group>
          <br></br>
          <Button onClick={this.signOut} Redirect to="/">
            Sign Out
            </Button> */}
        </div>
        </div>
       </Container> 
    );
  }
}

export default withRouter(Dashboard);
/* const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));


  const classes = useStyles(); */