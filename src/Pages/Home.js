import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import './Home.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    maxWidth: 450,
    alignSelf: 'right',
    height: 450
  },
});



export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" >
        <div className='cardContainer'>
          <Link to="/Services">
            <div className='card1'>
              <Card className={classes.root} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Bambino Plus"
                    height="350"
                    image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1568755264-41poqg4wCDL.jpg?crop=1.00xw:0.866xh;0,0.112xh&resize=480:*"
                    title="Bambino Plus"
                    href='https://www.google.com'
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" display='inline'>
                    Bambino Plus
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Perfect automatic machine for those who crave the traditional espresso making experience
          </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            </div>
          </Link>
          <div className='card2'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Nescafé Dolce Gusto - By De'Longhi"
                  height="350"
                  image="https://media.debenhams.com/i/debenhams/325004924860"
                  title="Nescafé Dolce Gusto - By De'Longhi"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Nescafé Dolce Gusto - By De'Longhi
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  The easy to use pod system means you can make the coffee you love, mess free whenever you want.
          </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
          </div>

          <div className='card3'>
            <Card className={classes.root} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Breville Filter Coffee Machine"
                  height="350"
                  image="https://www.thespruceeats.com/thmb/DizwPfPLyt9l5Fdd9LNiJCakjK8=/900x0/filters:no_upscale():max_bytes(150000):strip_icc()/BlackDecker5-CupCM0700CoffeeMaker-68f84e4980474c82b06280a11434c04a.jpg"
                  title="Breville Filter Coffee Machine"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2" display='inline'>
                  Filter Coffee Machine
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Effortlessly make your coffee beverages without hassle with this Breville coffee machine.
          </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
          </div>

        </div>

      </Container>
    </React.Fragment>
  );
}
