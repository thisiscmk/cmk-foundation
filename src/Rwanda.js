import React from 'react';
import { Container, Paper, makeStyles} from '@material-ui/core';
import Student from '../src/Gallery/student.jpg';
//import axios from 'axios';

const useStyles = makeStyles((theme) => ({


      paper: {
            overflow: 'hidden',
            textAlign: "justify",
            flexDirection: 'column',
            minHeight: 200,
      },

      picture: {
            height: 700,
            width: `calc(94vw + 70px)`,
            marginLeft:-64,
            [theme.breakpoints.down('sm')]: {
            height: 400,
            width: '300',
            marginLeft:-64,


            }
      }, 
      h1: {
            fontFamily: "Gill Sans MT",
            textAlign: "center",
            [theme.breakpoints.down('sm')]: {
                  textAlign: "left",
            
                  }
        },
      
}));

function Vaccine() {  
      const classes = useStyles();

      return (
            <>
            {/* <br></br> */}
                  <Container>
                        <div>
                              <img src={Student} alt = "Student" className={classes.picture}/>
                        </div>
                         <Paper className={classes.paper} elevation={-1}> 
<div>
                              <h1 className={classes.h1}>Students Sitting in National Exams in Rwanda, a milestone achievement despite COVID-19 disruptions </h1>
                              <br></br>
                              <p > Rwanda is gearing up for the National Exams, marking a milestone for students and schools following the disruption caused 
                              by the COVID 19 pandemic. The National Exams kick off on 12 July, with over 450,000 pupils sitting for exams at all levels across the country.</p>
                              <p > These exams are made possible through the resilience and determination of teachers, students, and families, who quickly adjusted
                               to the new realities of school closures, remote learning from home, school calendar amendments, safe school reopening, and remedial education. Despite uncertainties caused by the 
                               pandemic, learning has continued, and these exams offer the students the opportunity to progress to the next level of education of their choice.</p>
<br></br>
                              
                              </div>
                              

                            
                         </Paper>
                                           </Container>
            </>
      );
}

export default Vaccine;