import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tab, Tabs} from '@material-ui/core';
import Home from '../src/Home';
import { Link } from 'react-router-dom';
import './Header.css';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    
    bar:{
      top: 150,
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const routes = ["/home", "/whoweare", "/ourwork", "/ideas", "/gallery"];
  


  function NavigationBar (){
      const classes = useStyles();
      const [selectedTab, setSelectedTab] = React.useState({Home});
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

    return(
        <div className={classes.root}> {/* Open main divider */}
        
        <div className= "logo">
        <img src= "full_logo.png" alt="Web Logo"/>
        </div> 
                               
      <div> 
        <AppBar position="static" color="default" className={classes.bar}>        
      <Tabs
        value={selectedTab}
        textColor="secondary"
        onChange={handleChange}
        //variant= "fullWidth" 
        // className="tab"     
      >
        <Tab label="Home" component={Link} to ={routes[0]}/>
        <Tab label="Who we are" component={Link} to ={routes[1]}/>
        <Tab label="Our work" component={Link} to ={routes[2]}/>
        <Tab label="Ideas" component={Link} to = {routes[3]}/>
        <Tab label="Gallery" component = {Link} to = {routes[4]}/>
        


      </Tabs>
      </AppBar>
    {/* map the tab to the page */}
      {/* {selectedTab == 0 && <Home/>}
      {selectedTab == 1 && <AboutUs/>} */}
     
    </div>

    {/* <div>
      <AppBar position="static" color="white">
        <div style={{textAlign: 'left'}}>          
            <a href='/home' style={{background: 'white', color: 'black', textDecoration: 'none', paddingLeft: '20px', display: 'inline-block'}}>Home</a>
            <a href='whoweare' style={{background: 'white', color: 'black', textDecoration: 'none', paddingLeft: '20px', display: 'inline-block'}}>Money</a>
        </div>
      </AppBar>
    </div> */}

    
    

    </div> //Close main divider
    

    
    );
  }

  export default NavigationBar;