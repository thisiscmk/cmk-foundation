import React from "react";
import {Typography, Grid, Paper, Button, Container, makeStyles} from '@material-ui/core';
import Doctor from '../src/Gallery/doctor.jpg';
import Vaccine from "../src/Gallery/vaccinepic.jpg";
import { Link } from 'react-router-dom';
import './Ideas.css';


  const useStyles = makeStyles((theme) => ({
    
    pictureContainer: {
      height: 400,
      backgroundImage: 'url('+ Doctor+')',
      padding: 24,
      margin: -10,
      backgroundSize: 'cover',
      [theme.breakpoints.down('sm')]: {
        height: 200,
        width: 150,
        paddingLeft: 0,


        }
  },

  gridOne:{
    marginTop: 80, 
    fontFamily: "Arial",
    fontSize: 30,
    

    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      fontSize: 20,
      marginLeft: 10,
      }
  },
  picContainer: {
    height: 400,
    backgroundImage: 'url('+ Vaccine+')',
    backgroundSize: 'cover',
    padding: 24,
    margin: -10,
    [theme.breakpoints.down('sm')]: {
      height: 200,
      width: 150,
      paddingLeft: 0,


      }
},

button:{
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 10,

    }
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

      
  }));

const routes = ["/covidnews", "/vaccine"];

function Ideas(){
    
  const classes = useStyles();
    return (

      <Container>
          
          <h1 style={{fontFamily: "Gill Sans MT", textAlign: "center", fontSize:50}}> Ideas</h1>
          <Typography>Latest news, research, and ideas from across the foundation</Typography>
          <br></br> <br></br><br></br>       
        <div>
        <Grid container >
            <Grid item xs>
                <Paper className = {classes.pictureContainer}>
                    
                </Paper>

            </Grid>

            <Grid item xs>
                <h1 className={classes.gridOne}> Coronavirus in Africa: Concern grows over third wave of infections</h1>
                <Button component = {Link} to = {routes[0]} className={classes.button}> Read Article</Button>
            </Grid>

        </Grid>
        </div>
<br></br>


        <div style={{marginTop: 40}}>
        <Grid container spacing={2}>
            <Grid item xs={6} >
                <Paper className = {classes.picContainer}>
                    
                </Paper>

            </Grid>

            <Grid item xs={6}>
                <h1 className={classes.gridOne}>The COVID-19 Vaccine: Myths vs. Facts</h1>
                <Button component = {Link} to = {routes[1]} > Read Article</Button>
            </Grid>

        </Grid>
        </div>

        
        <br></br><br></br>
        </Container>
    )
}
export default Ideas;