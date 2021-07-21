import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AboutUsPic from '../src/Gallery/AboutUsPic.jpg';
import Doctor from '../src/Gallery/doctor.jpg';
import Graph from '../src/Gallery/graph.png';
import Vaccine from '../src/Gallery/vaccinepic.jpg';
//import axios from 'axios';

function CovidNews() {
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
                              <img src={Vaccine} alt= "Vaccine" style={{height: 700, backgroundSize: 'cover', width: `calc(94vw + 70px)`, marginLeft:-64}}/>
                        </div>
                        <Paper className={classes.paper} elevation={-1}> 

                              <h2 style={{fontFamily: "Gill Sans MT", textAlign: "center"}}>The COVID-19 Vaccine: Myths vs. Facts </h2>
                              <br></br>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> Unfortunately, there has been a lot of misinformation surrounding the vaccines and their development. When deciding whether to get the vaccine, it’s important to separate myths from facts.</p>
                              <p style={{fontFamily: "Arial", fontSize: 19}}>
                              <b>Myth:</b> The COVID-19 vaccine is unsafe because it was developed so quickly. <br></br><b>Fact:</b> The authorized vaccines are proven safe and effective. Although they were developed in record time, they have gone through the same rigorous Food and Drug Administration 
                              process as other vaccines, meeting all safety standards. No steps were skipped. Instead, we can thank the unprecedented worldwide collaboration and investment for the shorter timeframe on the development of the vaccines. The clinical trials and safety 
                              reviews actually took about the same amount of time as other vaccines.
                              </p>

                              <p style={{fontFamily: "Arial", fontSize: 19}}>
                              <b>Myth:</b> The COVID-19 vaccine will alter my DNA. <br/> <b>Fact:</b> The first vaccines granted emergency use authorization contain messenger RNA (mRNA), which instructs cells to make the “spike protein” found on the new coronavirus. When the immune system recognizes this protein, it builds 
                              an immune response by creating antibodies — teaching the body how to protect against future infection. The mRNA never enters the nucleus of the cell, which is where our DNA (genetic material) is kept. The body gets rid of the mRNA soon after it’s finished using the instructions.
                              </p>

                              <p style={{fontFamily: "Arial", fontSize: 19}}>
                              <b>Myth:</b> The COVID-19 vaccine includes a tracking device. <br/><b>Fact:</b> A video shared thousands of times on Facebook makes false claims about the products of syringe maker Apiject Systems of America, which has a contract with the government to provide medical-grade injection devices for vaccines. The company 
                              has an optional version of its product that contains a microchip within the syringe label that helps providers confirm a vaccine dose’s origin. The chip itself is not injected into the person getting the vaccine.
                              </p>

                              <p style={{fontFamily: "Arial", fontSize: 19}}>
                              <b>Myth:</b> The COVID-19 vaccine has severe side effects such as allergic reactions. <br/> <b>Fact: </b>Some participants in the vaccine clinical trials did report side effects similar to those experienced with other vaccines, including muscle pain, chills and headache. And although extremely rare, people can have severe allergic reactions 
                              to ingredients used in a vaccine. That’s why experts recommend people with a history of severe allergic reactions — such as anaphylaxis — to the ingredients of the vaccine should not get the vaccination.
                              </p>


                             
                         </Paper> 
                  </Container>
            </>
      );
}

export default CovidNews;