import React from "react";
import '../Demo/Demo.css';
import DemoLogo from '../Demo/DemoLogo';
import DemoTabs from '../Demo/DemoMenuBar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function CoffeeMachineDemo() {
    const classes = useStyles();

    return (
        <div>
            
            <div className='cardContainerDemo'>
                <div className='demoCard1'>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Breville Bit More 2-Slice Toaster"
                                height="240"
                                image="https://www.remodelista.com/files/styles/733_0s/public/fields/breville-bit-more-toaster-2-slice-remodelista.jpg"
                                title="Breville Bit More 2-Slice Toaster"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Breville Bit More 2-Slice Toaster
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                The Breville Bit More 2-Slice Toaster is one of the smallest among two-slice toasters
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            
                            <Button size="small" color="primary">
                                Buy now
                            </Button>
                            <Link to='/productdemotoaster'>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </div>
                <div className='demoCard2'>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="300"
                                image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1568755264-41poqg4wCDL.jpg?crop=1.00xw:0.866xh;0,0.112xh&resize=480:*"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Machine
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Machine description
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Buy now
        </Button>
                            <Button size="small" color="primary">
                                Learn More
        </Button>
                        </CardActions>
                    </Card>

                </div>
                <div className='demoCard3'>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="300"
                                image="https://thegoodguys.sirv.com/products/10125195/10125195_24945.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Breville Filter Coffee Machine
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Effortlessly make your coffee beverages without hassle with this Breville coffee machine.
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Buy now
        </Button>
                            <Button size="small" color="primary">
                                Learn More
        </Button>
                        </CardActions>
                    </Card>

                </div>


            </div>
        </div>
    );
}
