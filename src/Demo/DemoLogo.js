import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Image } from 'semantic-ui-react';


const LogoImage = () => (
  <Image src='https://www.ai4process.com/wp-content/uploads/2019/03/AI4Process-full-logo-299x57.png' size='medium' />
)



export default function DemoLogo() {
    return (
      <React.Fragment>
        <CssBaseline />
        
        <Container fixed align="left">
        <Link to="/">
         <LogoImage />
         </Link>
        </Container>       
      </React.Fragment>
    );
  }