import React from 'react';
import { Container, makeStyles, Paper } from '@material-ui/core';
import Doctor from '../src/Gallery/doctor.jpg';
import Graph from '../src/Gallery/graph.png'
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
                              <img src={Doctor} alt = "Doctor" style={{height: 700, backgroundSize: 'cover', width: `calc(94vw + 70px)`, marginLeft:-64}}/>
                        </div>
                        <Paper className={classes.paper} elevation={-1}> 

                              <h2 style={{fontFamily: "Gill Sans MT", textAlign: "center"}}>Africa as a continent battles a third wave of infections. </h2>
                              <br></br>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> The number of deaths recorded for the past week has risen by more than 40% compared with the previous week, according to the World Health Organization 
                              (WHO). New and faster spreading variants such as the highly transmissible Delta variant are appearing in more and more countries. Less than 2% of the continent has been fully vaccinated.</p>
                              

                              <h2 style= {{textAlign: "center", fontFamily: "Gill Sans MT"}}>Where are cases and deaths rising?</h2>
                              <p style={{fontFamily: "Arial", fontSize: 19}}>
                              New cases have been increasing for eight weeks running and rose by 13% over the past week compared with the previous week, according to the Africa Centres for Disease Control and Prevention (CDC).
                              The countries reporting the highest number of deaths over the week include Namibia, South Africa, Tunisia, Uganda and Zambia.
                              </p>

                              <br></br>

                              <img src = {Graph} alt = "Average case"></img>
                                <br></br><br></br>
                              <p style={{fontFamily: "Arial", fontSize: 19}}>
                              Hospital admissions in around 10 countries have increased rapidly and at least six countries are facing shortages of intensive care unit beds. Demand for medical oxygen is estimated to be 50% higher 
                              than at the same time in 2020, yet supply has not kept up. "Deaths have climbed steeply for the past five weeks. This is a clear warning sign that hospitals in the most impacted countries are reaching a breaking point," 
                              said Matshidiso Moeti, WHO regional director for Africa.
                              </p>
                              <p style={{fontFamily: "Arial", fontSize: 19}}>The third wave has seen cases rising faster compared with the previous waves. Over the past month, Africa recorded an additional one million cases, the shortest time ever it has taken to add another million cases. 
                                 During the second wave daily cases peaked at 28 cases per one million population while during the ongoing third wave the rate stands at about 33 cases per 1 million population, the Africa CDC says. "The worst is yet to come 
                                 as the fast-moving third wave continues to gain speed and new ground," says Moeti.</p>

                              <br/><br/><br/>

                             
                         </Paper> 
                  </Container>
            </>
      );
}

export default CovidNews;