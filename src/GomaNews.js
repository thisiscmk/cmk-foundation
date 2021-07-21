import React from 'react';
import { Container} from '@material-ui/core';
import Goma from '../src/Gallery/goma.jpg';
//import axios from 'axios';

function Vaccine() {
      

      return (
            <>
            {/* <br></br> */}
                  <Container>
                        <div>
                              <img src={Goma} alt="Goma" style={{height: 700, backgroundSize: 'cover', width: `calc(94vw + 70px)`, marginLeft:-64, marginTop:15}}/>
                        </div>
                        {/* <Paper className={classes.paper} elevation={-1}>  */}
<div style={{marginLeft:170, textAlign:'justify', width:850, marginTop:80}}>
                              <h1 style={{fontFamily: "Gill Sans MT", textAlign: "center"}}>Crisis in Goma </h1>
                              <br></br>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> Mercifully slow-moving lava spewed from the huge crater of Mount Nyiragongo last Saturday, causing 
                              thousands to flee Goma, a city of around two million. At least 32 people died as a direct result of the eruption, including three children, while 40 
                              people have been reported as missing</p>

                              <p style={{fontFamily: "Arial", fontSize: 19}}> The foundation has noticed the DRC Government’s “dedicated efforts” to protect people living in the 
                              Red Zone of eastern Goma from risks associated with further eruptions, and is warning of the potential that children would be at greater risk from 
                              further mass evacuation.</p>
<br></br>
                              <h2 style= {{textAlign: "center", fontFamily: "Gill Sans MT"}}>New exodus</h2>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> Thousands of those feeling Goma from the threat, are heading to the nearby town of Sake - 25 km 
                              northwest of the city - an area prone to cholera outbreaks where at least 19 suspected cases have been recorded in the last two weeks. “With an 
                              increased danger of a cholera epidemic, we are appealing for urgent international assistance to avert what threatens to be a catastrophe for children," 
                              added Mr. Beigbeder. Thousands of people fled Goma following the 22 May eruption, many of whom have headed to Sake. An order by the authorities on Thursday 
                              that residents of the ten neighbourhoods in the east of Goma known as the Red Zone must immediately vacate their homes has seen a further mass exodus</p>
<br></br>
                              <h2 style={{textAlign: "center", fontFamily: "Gill Sans MT"}}> Response ramps up</h2>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> In response to the crisis, the foundation is arranging the delivery of essential non-food items – such as jerry 
                              cans and tarpaulins in addition to providing vitally important Water and Sanitation (WASH) equipment. Steps have also been taken to establish a Volcano Information 
                              Centre (VIC), accessible through toll-free SMS system, which has played a crucial role in addressing misinformation surrounding the eruption and has so far been used 
                              by more than 5,200 people. Needs Assessments have also been conducted in all of the foundation’s main programme areas – including WASH, Child Protection, Education, Healthcare, 
                              Community for Development and Nutrition – all vitally important aid contributions in the DRC that remain critically underfunded. The agency said it was working closely with the 
                              Government of the DRC, especially in the areas of Health and Nutrition.</p>
<br></br>
                              
                              </div>
                              

                            
                         {/* </Paper>  */}
                  </Container>
            </>
      );
}

export default Vaccine;