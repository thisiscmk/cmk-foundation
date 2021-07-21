import {Paper} from '@material-ui/core';
import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundHeader from "../src/Gallery/charity-background1.jpg";
import Grid from '@material-ui/core/Grid';
import SafetyPicture from "../src/Gallery/safety.jpg";
import SolarRadio from "../src/Gallery/Solar-Radio.jpg";
import Meal from "../src/Gallery/meal.jpg";
import Goma from "../src/Gallery/goma.jpg";
import Student from "../src/Gallery/student.jpg";



const useStyles = makeStyles ((theme) =>({
    root: {
      width: 250,
      marginTop: 80,
      height: 470,
      marginLeft:40,
      marginRight:10
    },
    media: {
      height: 0,
    paddingTop: '56.25%'
    },
    paperCard: {
        height: 500,
        background: '#dedbdb'
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
  

    statsPaper: {
     // margin: 80,
      height: 500,
    },
      
  }));

  const styles = {
    
    pictureContainer: {
      height: 404,
      backgroundImage: 'url('+ Meal+')',
      //minHeight: 900,
      backgroundSize: 'cover',
      // backgroundPosition: 'center',
      //width: `calc(94vw + 24px)`,
      margin:  -10,
      padding: 24,
  },

  gridContainer: {
    height: 400,
    margin: -9,
    padding: 26,
    textAlign: "justify",
    width: 600
},

    root: {
        maxWidth: 345,
      },
      media: {
        height: 250,
      },

      
};




  function Home(){

       // const classes = myStyle();
       const classes = useStyles();
       

        return(

            <container >
                
                <div>
                    <img src={BackgroundHeader} alt = "Background" style={{height: 600, backgroundSize: 'cover', width: `calc(94vw + 66px)`}}/>
                </div>

    {/* <Paper className={classes.paper} elevation={-1}> */}
    <div style={{background:"#f7ecec"}}>
      <br></br><br></br>
    <Typography gutterBottom variant="h5" component="h2">We are a non-profit organisation fighting poverty, inequality and disease in Africa</Typography>


    {/* First card */}
    <Grid container spacing={30} style={{paddingLeft: "60px"}} >
        <Grid item >
        <Card className={classes.root} >
      <CardActionArea>
        <CardMedia className={classes.media} image={SafetyPicture} title="Person wearing face mask"/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          Talking to your loved ones about COVID-19 vaccines
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Tips for handling tough conversations with your loved ones during the pandemic.
          </Typography>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          {/* <Button size="small" color="secondary">
          Learn More
        </Button> */}
        
        <a href= '/talking-about-vaccine'> Learn More</a>
        </CardContent>
      </CardActionArea>      
    </Card>

    {/* Second card */}
      </Grid>          
        <Grid item >
        <Card className={classes.root} >
      <CardActionArea>
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
            Discover how the CMK Foundation has delivered radios to assist with remote learning
          </Typography>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          {/* <Button size="small" color="secondary">
          Learn More
        </Button> */}

        <a href = '/solar-powered-radios'>Learn More</a>
        </CardContent>
      </CardActionArea>
      </Card>
      </Grid>

      {/* Third card */}        
        <Grid item >
        <Card className={classes.root} >
      <CardActionArea>
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
          <br></br>
          <br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          
        <a href= '/crisis-in-goma'>
          Learn More
        </a>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>

        {/* Last card */}

        <Grid item >
        <Card className={classes.root}>
      <CardActionArea>
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
          Four students in Rwanda discuss their preparation for exams during the Covid 19 pandemic 
          </Typography>
          <br></br>
          <br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          
        <a href = '/milestone-achievement-in-rwanda'> Learn More</a>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>  
        
      </Grid>
      <br></br><br></br>
      
    </div>

    {/* <br></br><br></br><br></br><br></br><br></br> */}
    {/* style={{width: `cover`}} */}

    {/* <Paper >  */}
      <div style={{marginTop:60}}>
    <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper style = {styles.pictureContainer}></Paper>
        </Grid>
        <Grid item xs={6}>
          <br></br><br></br><br></br>
          <Typography style={{marginTop: 80, fontFamily: "Arial", fontSize: 20}}>For over 5 years, the CMK Foundation has been committed to tackling the greatest inequities in our continent.</Typography>
          <br></br><br></br>
          <a href = '/whoweare'>Learn more about our story</a>
          
        </Grid>
      </Grid>
    {/* </Paper> */}
    </div>

<div style={{marginTop:80}}>
    <Paper className={classes.statsPaper} elevation={-1}>
          <h1 style={{textAlign: "left", fontFamily: "Arial", marginLeft: "50px"}}> Foundation Stats</h1>
          <Typography style={{textAlign: "left", marginLeft: "50px"}}>  For the year ended December 2020, Amounts are in thousands of Rands. Value of donations total represents grants only.</Typography>

          <br></br><br></br><br></br><br></br>
          
          

                              {/*Stats*/}
                              <Grid container spacing={1} >
                              <Grid item xs>
                              <Typography style={{fontFamily: "Arial", fontSize: 55}}>1800 </Typography>
                              <Typography>Number of Grants </Typography>
                              </Grid>
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
                              </Grid>
                              </Grid>
                              
    </Paper>
    
    </div>
    {/* </Paper> */}
        </container>

            
        )
    }


export default Home;