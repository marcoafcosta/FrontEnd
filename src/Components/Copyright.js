import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function CopyrightFooter() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{justifyContent:'center', alignItems:'center', position: 'absolute', bottom:'0', display:'block', width:'50%'}}>
      <Typography component="div" style={{ backgroundColor: '#FFFFFF00', height: '5vh', marginTop: 'auto' }} />
        <Typography 
        component="div" 
        style={{ backgroundColor: '#FFFFFF00', 
                height: '5vh', 
                marginTop: 'auto'}} >
        <div style={{justifyContent:'center', alignItems:'center', position: 'absolute', bottom:'0', display:'block', width:'50%'}}><p>Copyright © 2020 AI4Process Ltd.</p></div> 
        </Typography>
      </Container>
    </React.Fragment>
  );
}