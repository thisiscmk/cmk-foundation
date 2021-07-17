import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Safety from '../src/Gallery/safety.jpg';
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
                              <img src={Safety} style={{height: 700, backgroundSize: 'cover', width: `calc(94vw + 70px)`, marginLeft:-64, marginTop:15}}/>
                        </div>
                        {/* <Paper className={classes.paper} elevation={-1}>  */}
<div style={{marginLeft:170, textAlign:'justify', width:850, marginTop:80}}>
                              <h1 style={{fontFamily: "Gill Sans MT", textAlign: "center"}}>How to talk to your friends and family about COVID-19 vaccines </h1>
                              <br></br>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> Vaccines save 2 to 3 million lives each year and are amongst the greatest advances 
                              of modern medicine. The development of safe and effective COVID-19 vaccines is a huge step forward in our global effort to end the pandemic.</p>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> This is exciting news, but there are still some people who are skeptical or hesitant about COVID-19 
                              vaccines. Chances are you know a person who falls into this category – maybe among your group of friends or in your family.

                              If you are unsure of how to approach conversations about vaccines with vaccine skeptics you know, you’re not alone. We spoke to Dr. Saad Omer, Director 
                              at the Yale Institute for Global Health, about the do’s and don’ts of navigating these difficult discussions.</p>
<br></br>
                              <h2 style= {{textAlign: "center", fontFamily: "Gill Sans MT"}}>Do connect with their values</h2>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> Even if you are feeling frustrated, it is important to be empathetic. “Make them feel heard,” advises Omer. 
                              Attempt to connect with their underlying sentiment. For example, if they are tired of being kept from doing the things they want to do because of COVID-19, 
                              connect with them on the fact that places they enjoy will begin to open up again if we are all vaccinated against the disease. He suggests talking about COVID-19 
                              and how devastating it has been. If you only speak about vaccines “it’s not a full picture, and has somewhat lower chances of succeeding,” he explains. When the 
                              discussion comes back to COVID-19, it places the focus on the trade-offs we have all had to make such as physically distancing ourselves from loved ones and missing
                              out on normal daily activities.</p>
<br></br>
                              <h2 style={{textAlign: "center", fontFamily: "Gill Sans MT"}}> Don’t interrupt.</h2>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> Make sure not to cut off, speak over or jump into correcting your loved one. Listen to the person you are talking to 
                              and meet them where they are. “You shouldn’t agree with any false information, but you should empathize and continue the process rather than ending your relationship 
                              or ending the conversation,” says Omer.</p>
<br></br>
                              <h2 style={{textAlign: "center", fontFamily: "Gill Sans MT"}}> Do help them feel empowered.</h2>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> Right now, many people are scared. The pandemic has completely transformed our lives. Omer suggests giving your loved 
                              one an empowering message: You can do something about this disease. Remind them that they can help change their own trajectory and their loved ones’ trajectories in 
                              this pandemic by getting vaccinated. “[They] can do something about it. These vaccines work.”</p>
<br></br>
                              <h2 style={{textAlign: "center", fontFamily: "Gill Sans MT"}}> Do assume they are going to get vaccinated.</h2>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> Simply say to your friend or family member, “Let’s go get vaccinated!” This method is called presumptive communication. 
                              “The announcement approach or presumptive approach has been shown to be successful in the clinic and is likely to work in personal communication,” says Omer. You’re not 
                              taking away someone’s autonomy, all you are doing is establishing a verbal default.</p>
                              <br></br>

                              <h2 style={{textAlign: "center", fontFamily: "Gill Sans MT"}}>Don’t get discouraged. </h2>
                              <p style={{fontFamily: "Arial", fontSize: 19}}>Convincing someone who is opposed to vaccines is a long process. “It’s extremely tough,” says Omer. Remember that for those 
                              who are strongly opposed to vaccines in general, their opinions will not likely be changed in one conversation. The important thing? “Maintain a connection with them.”</p>
                              <br/><br/><br/>
                              </div>
                              

                            
                         {/* </Paper>  */}
                  </Container>
            </>
      );
}

export default Vaccine;