import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Button, Container, IconButton, Toolbar, Tab, Tabs, Paper} from '@material-ui/core';
import Home from '../src/Home';
import AboutUs from '../src/About Us';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    
    logo: {
      left: '0px',
      alignContent: 'left',
      margin: '0 auto'
    },
  }));

  const routes = ["/home", "/whoweare", "/ourwork", "/ideas", "/getinvolved"];
  


  function NavigationBar (){
      const classes = useStyles();
      const [selectedTab, setSelectedTab] = React.useState({Home});
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

    return(
        <div className={classes.root}> {/* Open main divider */}
        
        <div className= {classes.logo}>
        <img src= "cmk_logo.png" alt="Web Logo" width= "100px" />
        </div> 
                               
      <div>         
      <Tabs
        value={selectedTab}
        textColor="secondary"
        onChange={handleChange}
        variant= "fullWidth"        
      >
        <Tab label="Home" component={Link} to ={routes[0]}/>
        <Tab label="Who we are" component={Link} to ={routes[1]}/>
        <Tab label="Our work" />
        <Tab label="Ideas"/>
        <Tab label="Get Involved"/>


      </Tabs>

    {/* map the tab to the page */}
      {/* {selectedTab == 0 && <Home/>}
      {selectedTab == 1 && <AboutUs/>} */}
     
    </div>
    

    </div> //Close main divider
    

    
    );
  }

  export default NavigationBar;