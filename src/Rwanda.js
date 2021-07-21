import React from 'react';
import { Container} from '@material-ui/core';
import Student from '../src/Gallery/student.jpg';
//import axios from 'axios';

function Vaccine() {      
      return (
            <>
            {/* <br></br> */}
                  <Container>
                        <div>
                              <img src={Student} alt = "Student" style={{height: 700, backgroundSize: 'cover', width: `calc(94vw + 70px)`, marginLeft:-64, marginTop:15}}/>
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