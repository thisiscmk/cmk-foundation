import {Paper} from '@material-ui/core';
import React from 'react';
import {Card, CardContent, CardMedia, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundHeader from "../src/Gallery/charity-background1.jpg";
import Grid from '@material-ui/core/Grid';
import SafetyPicture from "../src/Gallery/safety.jpg";
import SolarRadio from "../src/Gallery/Solar-Radio.jpg";
import Meal from "../src/Gallery/meal.jpg";
import Goma from "../src/Gallery/goma.jpg";
import Student from "../src/Gallery/student.jpg";
import { Link } from 'react-router-dom';
import './Home.css';


const useStyles = makeStyles ((theme) =>({
    root: {
      width: 250,
      marginTop: 80,
      height: 470,
      marginLeft:40,
      marginRight:10,
      [theme.breakpoints.down('sm')]: {
        height: 380,
        width:310,
        marginLeft:20,
      }
    },
    card:{
      height: 200,
      border: '0px',
      marginLeft:40,
      marginTop: 80,
      marginRight:10,
      [theme.breakpoints.down('sm')]: {
        height: 100,
        width: '100%',
        marginLeft: 10,
        marginTop: 40,
        marginRight:10,
      }
    },
    media: {
      height: 0,
    paddingTop: '56.25%'
    },
    paperCard: {
        height: 500,
        background: '#dedbdb'
      },
      picture: {
          height: 600,
          width: '100%',
          [theme.breakpoints.down('sm')]: {
          height: 250,
          
    },
      },
      paper: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        paddingTop: theme.spacing(2),
        padding: theme.spacing(10),
        display: 'flex',
        overflow: 'hidden',
        textAlign: "justify",
        flexDirection: 'column',
        minHeight: 200,
  },

  pictureContainer: {
    height: 404,
    backgroundImage: 'url('+ Meal+')',
    //minHeight: 900,
    backgroundSize: 'cover',
    // backgroundPosition: 'center',
    //width: `calc(94vw + 24px)`,
    margin:  -10,
    padding: 24,
    [theme.breakpoints.down('sm')]: {
      height: 200,
    }
},



    button: {
      backgroundColor: '#f7ecec',  
      marginTop: 140, 
      [theme.breakpoints.down('sm')]: {
        marginTop:40,
      }        
    },
    
    statsPaper: {
     // margin: 80,
      height: 500,
    },

    historypicDiv:{
      [theme.breakpoints.down('sm')]: {
        height: 200,
      }
    },
    historyDiv:{
      marginTop: 80, 
      fontFamily: "Arial", 
      fontSize: 20,
      [theme.breakpoints.down('sm')]: {
        marginTop:0,
        fontSize: 15,
      }
    },

    historyDivButton:{
      backgroundColor: '#f7ecec',
      [theme.breakpoints.down('sm')]: {
        marginTop: 0,
        
      }
    },

    gridStat:{
      [theme.breakpoints.down('sm')]: {
        marginTop: 40,        
      }
      
    },

    gridStatHeading: {
      [theme.breakpoints.down('sm')]: {
        fontSize: 40,        
      }

    },

      gridStatSubHeading: {
        [theme.breakpoints.down('sm')]: {
          fontSize: 13,        
        }  
      
    },

    
      
  }));

  

const routes = ["/talking-about-vaccine", "/solar-powered-radios", "/crisis-in-goma", "/milestone-achievement-in-rwanda", "/whoweare"];


  function Home(){

       // const classes = myStyle();
       const classes = useStyles();
       

        return(

            <div id="container" className="container" >
                
                <div >
                    <img className= {classes.picture} src={BackgroundHeader} alt = "Background" />
                </div>

    {/* <Paper className={classes.paper} elevation={-1}> */}
    <div style={{background:"#f7ecec"}}>
      <br></br><br></br>
    <Typography gutterBottom variant="h5" component="h2">We are a non-profit organisation fighting poverty, inequality and disease in Africa</Typography>


    

    {/* First card */}
    <Grid container spacing={30} style={{paddingLeft: "20px"}} >
        <Grid item >
        <Card className={classes.root} >
      
        <CardMedia className={classes.media} image={SafetyPicture} title="Person wearing face mask"/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          Talking to your loved ones about the vaccine
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Tips for handling tough conversations with your loved ones during the pandemic.
          </Typography>
          
          <Button component = {Link} to = {routes[0]} className={classes.button}> Learn More</Button>
        </CardContent>
           
    </Card>

    {/* Second card */}
      </Grid>          
        <Grid item >
        <Card className={classes.root} >
      
        <CardMedia
          className={classes.media}
          image={SolarRadio}
          title="Solar Radio"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Solar-powered radios support remote learning  
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Discover how the Foundation has delivered radios to assist with remote learning
          </Typography>
          
          <Button component = {Link} to = {routes[1]} className={classes.button}> Learn More</Button>

        </CardContent>
      
      </Card>
      </Grid>

      {/* Third card */}        
        <Grid item >
        <Card className={classes.root} >
      
        <CardMedia
          className={classes.media}
          image={Goma}
          title="Congolese Child"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Crisis in the DRC in the province of Goma
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Up to 400,000 could be displaced by new Goma eruption in DR Congo 
          </Typography>
          
          <Button component = {Link} to = {routes[2]} className={classes.button}> Learn More</Button>
        
        </CardContent>
      
    </Card>
        </Grid>

        {/* Last card */}

        <Grid item >
        <Card className={classes.root}>
      
        <CardMedia
          className={classes.media}
          image={Student}
          title="Student"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Milestone achievement for Rwandan students
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Students in Rwanda discuss their preparation for exams during the pandemic 
          </Typography>
          
          <Button component = {Link} to = {routes[3]} className={classes.button}> Learn More</Button>
        </CardContent>
      
    </Card>
        </Grid>  
        
      </Grid>
      <br></br><br></br>
      
    </div>

    {/* <br></br><br></br><br></br><br></br><br></br> */}
    {/* style={{width: `cover`}} */}

    {/* <Paper >  */}
      <div style={{marginTop:60}} className={classes.historypicDiv}>
    <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper className = {classes.pictureContainer}></Paper>
        </Grid>
        <Grid item xs={6}>
          <br></br><br></br><br></br>
          <Typography className={classes.historyDiv}>For over 5 years, the CMK Foundation has been committed to tackling the greatest inequities in our continent.</Typography>
          <br></br>
          <Button component = {Link} to = {routes[4]} className={classes.historyDivButton}> Learn more</Button>
          
        </Grid>
      </Grid>
    {/* </Paper> */}
    </div>

<div style={{marginTop:100}}>
    <Paper className={classes.statsPaper} elevation={-1}>
          <h1 > Foundation Stats</h1>
          <Typography style={{textAlign: "left", marginLeft: "50px"}}>  For the year ended December 2020, Amounts are in thousands of Rands. Value of donations total represents grants only.</Typography>

          
          
          
                              {/* <Paper > */}
                              {/*Stats*/}
                              <Grid container spacing={1} className={classes.gridStat}>
                              <Grid item xs>
                              <Card className={classes.card}> 
                                <CardContent>
                                  <Typography gutterBottom variant="h3" component="h2" className={classes.gridStatHeading}> 1800 </Typography>
                                  <Typography variant="body" component="h2" className={classes.gridStatSubHeading}> Number of Grants </Typography>          
                                </CardContent>
                              </Card>
                              </Grid>
                              <Grid item xs>
                              <Card className={classes.card}> 
                                <CardContent>
                                  <Typography gutterBottom variant="h3" component="h2" className={classes.gridStatHeading}> R500k </Typography>
                                  <Typography variant="body" component="h2" className={classes.gridStatSubHeading}> Direct grantee support </Typography>          
                                </CardContent>
                              </Card>
                              </Grid>
                              <Grid item xs>
                              <Card className={classes.card}> 
                                <CardContent>
                                  <Typography gutterBottom variant="h3" component="h2" className={classes.gridStatHeading}> 1009 </Typography>
                                  <Typography variant="body" component="h2" className={classes.gridStatSubHeading}> Grantees </Typography>          
                                </CardContent>
                              </Card>
                              </Grid>
                              <Grid item xs>
                              <Card className={classes.card}> 
                                <CardContent>
                                  <Typography gutterBottom variant="h3" component="h2" className={classes.gridStatHeading}> 32 </Typography>
                                  <Typography variant="body" component="h2" className={classes.gridStatSubHeading}> Program Strategies </Typography>          
                                </CardContent>
                              </Card>
                              </Grid>
                              <Grid item xs>
                              <Card className={classes.card}> 
                                <CardContent>
                                  <Typography gutterBottom variant="h3" component="h2" className={classes.gridStatHeading}> 1530 </Typography>
                                  <Typography variant="body" component="h2" className={classes.gridStatSubHeading}> Employees </Typography>          
                                </CardContent>
                              </Card>
                              </Grid>
                              {/* <Paper>
                              <Typography style={{fontFamily: "Arial", fontSize: 55}}>1800 </Typography>
                              <Typography>Number of Grants </Typography>
                              </Paper>
                              <Grid item xs>
                              <Typography style={{fontFamily: "Arial", fontSize: 55}}>R500k </Typography>
                              <Typography >Direct grantee support </Typography>
                              </Grid>
                              <Grid item xs>
                              <Typography style={{fontFamily: "Arial", fontSize: 55}}>1009 </Typography>
                              <Typography >Grantees </Typography>
                              </Grid>
                              <Grid item xs>
                              <Typography style={{fontFamily: "Arial", fontSize: 55}}>32 </Typography>
                              <Typography> Program strategies </Typography>
                              </Grid>
                              <Grid item xs>
                              <Typography style={{fontFamily: "Arial", fontSize: 55}}>1530 </Typography>
                              <Typography style={{textAlign:"center"}}>Employees </Typography>
                              </Grid> */}
                              </Grid>
                              
                              {/* </Paper> */}
    </Paper>
    
    </div>
    {/* </Paper> */}
        </div>

            
        )
    }


export default Home;