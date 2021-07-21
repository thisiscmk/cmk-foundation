import React from "react";
import {AppBar, Typography, Container, Toolbar, Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Doctor from '../src/Gallery/doctor.jpg';
import Vaccine from "../src/Gallery/vaccinepic.jpg";

const useStyles = makeStyles ((theme) => ({
    root: {
        textAlign: 'right'      
    },
    media: {
      height: 0,
    paddingTop: '56.25%'
    },
    paperCard: {
        margin: 80,
      },
    footer: {
        textAlign: "justify",
        
    },
      
  }));

  const styles = {
    
    pictureContainer: {
      height: 400,
      backgroundImage: 'url('+ Doctor+')',
      backgroundSize: 'cover',
      paddingLeft: 24,
  },
  picContainer: {
    height: 400,
    backgroundImage: 'url('+ Vaccine+')',
    backgroundSize: 'cover',
    paddingLeft: 24,
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


function Ideas(){
    const classes = useStyles();

    return (
      <div> {/*Main divider*/}
          <br></br><br></br>
          <h1 style={{fontFamily: "Gill Sans MT", textAlign: "center", fontSize:50}}> Ideas</h1>
          <Typography>Latest news, research, and ideas from across the foundation</Typography>
          <br></br> <br></br><br></br>       
        <div>
        <Grid container spacing={2}>
            <Grid item xs={6} >
                <Paper style = {styles.pictureContainer}>
                    
                </Paper>

            </Grid>

            <Grid item xs={6}>
                <h1 style={{marginTop: 80, fontFamily: "Arial", fontSize: 30}}>Coronavirus in Africa: Concern grows over third wave of infections</h1>
                <a href = "/covidnews">Read Article</a>
            </Grid>

        </Grid>
        </div>
<br></br>


        <div>
        <Grid container spacing={2}>
            <Grid item xs={6} >
                <Paper style = {styles.picContainer}>
                    
                </Paper>

            </Grid>

            <Grid item xs={6}>
                <h1 style={{marginTop: 80, fontFamily: "Arial", fontSize: 30}}>The COVID-19 Vaccine: Myths vs. Facts</h1>
                <a href = "/vaccine">Read Article</a>
            </Grid>

        </Grid>
        </div>

        
        <br></br><br></br>
        </div>
    )
}
export default Ideas;