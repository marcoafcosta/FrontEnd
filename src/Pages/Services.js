import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Divider, Grid, Segment } from 'semantic-ui-react';
import './Home.css';


export default function Services() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Container maxWidth="md" >
          <Typography component="div" style={{ backgroundColor: '#FFFFFF', height: '5vh' }} align="flex" variant='h5'>
            What we do
        </ Typography>
          <Segment>
            <Grid columns={1} relaxed='very'>
              <Grid.Column>
                <div className='column1'>
                  Our consultants are highly qualified process automation specialists. <br></br>
        In addition to Camunda BPM, they master the BPMN and DMN standards and depending on
        the application scenario are also experienced software developers in Java and / or Javascript.<br></br>
                  <br></br>
        Our consulting services are meant to allow you to be self-sufficient: We enable you to automate your
        workflows and decisions as quickly as possible with Camunda and not depend on external consultants for the project implementation.<br></br>

                </div>
              </Grid.Column>
            </Grid>


          </Segment>
          {<Typography component="div" style={{ backgroundColor: '#FFFFFF', height: '5vh' }} />}
        </Container>
      </div>
    </React.Fragment>
  );
} 