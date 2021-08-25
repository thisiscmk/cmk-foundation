import React from 'react';
import { Container, makeStyles, Paper } from '@material-ui/core';
import Kids from '../src/Gallery/kids.jpg';
//import axios from 'axios';
import './OurWork.css';

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
                  display: 'flex',
                  overflow: 'hidden',
                  textAlign: "justify",
                  flexDirection: 'column',
                  minHeight: 200,
                  // width:850
            },
            picture: {
                  height: 700,
                  width: `calc(94vw + 70px)`,
                  marginLeft:-64,
                  [theme.breakpoints.down('sm')]: {
                  height: 200,
                  width: '300',
                  marginLeft:-64,


                  }
            }, 
            
      }));

      const classes = useStyles();

      return (
            <>
            {/* <br></br> */}
                  <Container>
                        <Paper>
                              <img src={Kids} alt = "kids" className={classes.picture}/>
                        </Paper>
                        <Paper className={classes.paper} elevation={-1}> 

                              <h2 >What We Do </h2>
                              <br></br>
                              <p > CMK Foundation is committed to realising the rights of all children to help them build a strong foundation and have the best chance of fulfilling their potential. We believe that ensuring a happy and healthy child begins before birth: from 
                              ensuring that their mother has access to good neonatal care and delivers her baby in a clean, safe environment, to reaching adulthood as a responsible, healthy and informed parent. This journey relies on a child having access to shelter, good nutrition, clean water and sanitation, 
                              health care and education.</p>
                              

                              <h2 >Our Programmes</h2>
                              <ul >
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