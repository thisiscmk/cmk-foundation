import React from 'react';
import { Container, makeStyles, Paper } from '@material-ui/core';
import Kids from '../src/Gallery/kids.jpg';
//import axios from 'axios';

function WhatWeDo() {
      const useStyles = makeStyles((theme) => ({
            title: {
                  fontSize: 20,
                  textAlign: "left",
                  fontWeight: "bold",
                  paddingTop: theme.spacing(3),
                  paddingBottom: theme.spacing(1),
                  paddingLeft: theme.spacing(2)
            },
            gridList: {
                  width: 500,
                  height: 450,
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
                  // width:850
            },

            
      }));

      const classes = useStyles();

      return (
            <>
            {/* <br></br> */}
                  <Container>
                        <div>
                              <img src={Kids} alt = "kids" style={{height: 700, backgroundSize: 'cover', width: `calc(94vw + 70px)`, marginLeft:-64}}/>
                        </div>
                        <Paper className={classes.paper} elevation={-1}> 

                              <h2 style={{fontFamily: "Gill Sans MT", textAlign: "center"}}>What We Do </h2>
                              <br></br>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> CMK Foundation is committed to realising the rights of all children to help them build a strong foundation and have the best chance of fulfilling their potential. We believe that ensuring a happy and healthy child begins before birth: from 
                              ensuring that their mother has access to good neonatal care and delivers her baby in a clean, safe environment, to reaching adulthood as a responsible, healthy and informed parent. This journey relies on a child having access to shelter, good nutrition, clean water and sanitation, 
                              health care and education.</p>
                              

                              <h2 style= {{textAlign: "center", fontFamily: "Gill Sans MT"}}>Our Programmes</h2>
                              <ul style={{fontFamily: "Arial", fontSize: 19}}>
                                    <li>Child Protection</li>
                                    <li>Education</li>
                                    <li>Child Health</li>
                                    <li>Nutrition</li>
                                    <li>Water, Sanitation and Hygiene</li>
                                    <li>Early Childhood Development</li>
                              </ul>
                              <br/><br/><br/>

                             
                         </Paper> 
                  </Container>
            </>
      );
}

export default WhatWeDo;