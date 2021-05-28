import { AppBar, Button, Container, IconButton, Toolbar, Paper } from '@material-ui/core';
import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundHeader from "../src/Gallery/charity-background1.jpg";
import Grid from '@material-ui/core/Grid';
import SafetyPicture from "../src/Gallery/safety.jpg";
import SolarRadio from "../src/Gallery/Solar-Radio.jpg";
import SomalianKids from "../src/Gallery/somalian-kids.jpg";
import Meal from "../src/Gallery/meal.jpg";
import { MicNone, NoEncryption } from '@material-ui/icons';


const useStyles = makeStyles ((theme) =>({
    root: {
      maxWidth: 300,
      margin: 80,
      height: 500,
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
    paperContainer: {
        height: 500,
        backgroundImage: 'url('+ BackgroundHeader+')',
        //minHeight: 900,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        width: `calc(94vw + 24px)`,
        margin:  -10,
        padding: 24,
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
        const classes = useStyles();
        const [spacing, setSpacing] = React.useState(2);
       // const classes = myStyle();
      
        const handleChange = (event) => {
          setSpacing(Number(event.target.value));
        };

        return(

            <container>
                <br></br>
            <Paper style={styles.paperContainer}>                
            </Paper>

    
    <div style={{background:"#f7ecec"}}>
      <br></br><br></br>
    <Typography gutterBottom variant="h5" component="h2">We are a non-profit organisation fighting poverty, inequality and disease in Africa</Typography>
    <Grid container spacing={0}>
        <Grid item xs={4}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={SafetyPicture}
          title="Person wearing face mask"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          Talking to your loved ones about COVID-19 vaccines
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Tips for handling tough conversations with your loved ones during the ongoing pandemic.
          </Typography>
        </CardContent>
      </CardActionArea>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <CardActions>
        <Button size="small" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>

      
          
        <Grid item xs={4}>
        <Card className={classes.root}>
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
        </CardContent>
      </CardActionArea>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <CardActions>
        <Button size="small" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={SomalianKids}
          title="Somalian Children"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Children in Somalia suffer from acute malnutrition
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Malnutrition persists in Somalia due to years of conflict, the collapse of basic social services... 
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <CardActions>
        <Button size="small" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        

    
        
      </Grid>
      
    </div>

    <br></br><br></br><br></br><br></br><br></br>

    <Paper style={{width: `cover`}}>
      
    <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper style = {styles.pictureContainer}></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style = {styles.gridContainer} >
          <Typography style={{marginTop: 80, fontFamily: "Arial", fontSize: 20}}>For over 10 years, the CMK Foundation has been committed to tackling the greatest inequities in our continent.</Typography>
          <br></br><br></br>
          <Button variant="outlined" color="secondary">Learn more about our story</Button>
          </Paper>
        </Grid>
      </Grid>
    </Paper>

<br></br><br></br>
    <Paper className={classes.statsPaper}>
          <h1 style={{textAlign: "left", marginLeft: 100, fontFamily: "Arial"}}> Foundation Stats</h1>
          <Typography style={{textAlign: "left", marginLeft: 100}}>For the year ended December 2020, Amounts are in thousands of Rands. Value of donations total represents grants only.</Typography>

          <br></br><br></br><br></br><br></br>
          
          <Typography style={{fontFamily: "Patrick Hand SC", fontSize: 55, marginLeft: 50}}>1800 &nbsp;&nbsp;&nbsp;&nbsp; R500k &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1009 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 32 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1530 </Typography>
          <Typography style={{marginLeft: 15}}>Number of Grants &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Direct grantee support &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Grantees &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Program strategies &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Employees</Typography>

    </Paper>
    
        </container>

            
        )
    }


export default Home;