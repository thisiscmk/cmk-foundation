import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Student from '../src/Gallery/student.jpg';
//import axios from 'axios';

function Vaccine() {
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
                  width:850
            },

            
      }));

      const classes = useStyles();

      return (
            <>
            {/* <br></br> */}
                  <Container>
                        <div>
                              <img src={Student} style={{height: 700, backgroundSize: 'cover', width: `calc(94vw + 70px)`, marginLeft:-64, marginTop:15}}/>
                        </div>
                        {/* <Paper className={classes.paper} elevation={-1}>  */}
<div style={{marginLeft:170, textAlign:'justify', width:850, marginTop:80}}>
                              <h1 style={{fontFamily: "Gill Sans MT", textAlign: "center"}}>Students Sitting in National Exams in Rwanda, a milestone achievement despite COVID-19 disruptions </h1>
                              <br></br>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> Rwanda is gearing up for the National Exams, marking a milestone for students and schools following the disruption caused 
                              by the COVID 19 pandemic. The National Exams kick off on 12 July, with over 450,000 pupils sitting for exams at all levels across the country.</p>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> These exams are made possible through the resilience and determination of teachers, students, and families, who quickly adjusted
                               to the new realities of school closures, remote learning from home, school calendar amendments, safe school reopening, and remedial education. Despite uncertainties caused by the 
                               pandemic, learning has continued, and these exams offer the students the opportunity to progress to the next level of education of their choice.</p>
<br></br>
                              
                              </div>
                              

                            
                         {/* </Paper>  */}
                  </Container>
            </>
      );
}

export default Vaccine;