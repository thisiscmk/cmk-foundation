import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Button, Container, IconButton, Toolbar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },

    containerSpacing: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    navColour: {
        background: 'white'
    },

    buttons: {
        position: 'absolute',
        right: '0px',
        indicatorColor:'primary'
        
//   width: 300px;
//   border: 3px solid #73AD21;
//   padding: '10px'
    },
    
    logo: {
      left: '0px',
      alignContent: 'left',
      margin: '0 auto'
    }

  }));

  function NavigationBar(){
      const classes = useStyles();
    return(
        <div className={classes.root}>
        
        <div className= {classes.logo}>
        <img src= "cmk_logo.png" alt="Web Logo" width= "100px" />
        </div>
                         
                     
      
    </div>
    );
  }

  export default NavigationBar;