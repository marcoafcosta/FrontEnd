import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        inkBarStyle={{background: 'blue'}}
        TabIndicatorProps={{style: {background:'white'}}}
        
        
      >
        <Link to="/">
            <Tab label="Item One" />
        </Link>
        <Link to="/Services">
            <Tab label="Item Two" />
        </Link>
        <Link to="/AboutUs">
            <Tab label="Item Three" />
        </Link>
      </Tabs>
    </Paper>
  );
}
