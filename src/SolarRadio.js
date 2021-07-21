import React from 'react';
import { Container} from '@material-ui/core';
import SolarRadio from '../src/Gallery/Solar-Radio.jpg';
import SolarPowerRadio from '../src/Gallery/solarPowerRadio.jpg';
//import axios from 'axios';

function Vaccine() {


      
      return (
            <>
            {/* <br></br> */}
                  <Container>
                        <div>
                              <img src={SolarRadio} alt = "Radio" style={{height: 650, backgroundSize: 'cover', width: `calc(94vw + 70px)`, marginLeft:-64}}/>
                        </div>
                        {/* <Paper className={classes.paper} elevation={-1}>  */}
<div style={{marginLeft:170, textAlign:'justify', width:850, marginTop:80}}>
                              <h1 style={{fontFamily: "Gill Sans MT", textAlign: "center"}}>Solar-powered radios support remote learning </h1>
                              <br></br>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> Tens of thousands of tin roofs, gleaming white in the sun, pour down the slopes of Kibera informal 
                              settlement in Nairobi. Under one, 16-year-old Selina Nekesa Mamati is studying. She huddles by a grey and orange radio in her small living space, on 
                              one of two chairs placed on the earthen floor. She leans into the set, writing quickly in an open binder.</p>
                              <p style={{fontFamily: "Arial", fontSize: 19}}>“I was out of school for eight months,” Selina explains. “Now I am behind.”</p>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> When the COVID-19 pandemic arrived in Kenya in March 2020, schools closed across the country. As a result, 
                              more than 17 million students like Selina had their education interrupted. The solar-powered radios are part of an effort to help them catch up. Blinking 
                              white and red lights, it is broadcasting lessons developed by the Kenya Institute of Curriculum Development, in partnership with the foundation, on Kenya 
                              Broadcasting Channel.</p>

                              <p style={{fontFamily: "Arial", fontSize: 19}}> CMK Foundation has delivered more than 10,000 of these solar-powered radio sets with light bulbs to vulnerable households 
                              across Kenya, helping at least 40,000 children to access remote learning. The sets have been distributed in areas where radio coverage is excellent, but access to 
                              remote learning is low. Textbooks were also distributed to assist with the learning process.</p>

                              <p style={{fontFamily: "Arial", fontSize: 19}}> For Selina’s family, the radio has proved a lifeline. During school closures, Selina struggled with the monotony of life 
                              stuck at home, without the learning opportunities and friendships she had at school. With the added financial pressures of the pandemic, her mother could not afford to 
                              buy a radio.</p>

                              
                              <p style={{fontFamily: "Arial", fontSize: 19}}> With the provision of solar radios, children can now continue their studies from home, without facing additional costs, 
                              and their parents can make sure they attend classes. “The solar radio has helped me a lot, explaining things with stories,” says Selina. “That way I am able to paint a 
                              picture in my mind, to help me follow my literature studies.”</p>

                              
                              <p style={{fontFamily: "Arial", fontSize: 19}}> More than 100 sets have been distributed in Kibera informal settlement. “We have quite a number of children who are now 
                              able to listen to the radio,” says Sub-County Director of Education Lydia Wangechi Mugeti. “When we gave the households the radios, we also asked them to allow their neighbours 
                              to come and listen to the lessons.”</p>
                              <br></br>
                              
                                <img src = {SolarPowerRadio} alt="Solar Radio" style={{height:400, width:850}}></img>
                                <br></br><br></br>
                              
                              <p style={{fontFamily: "Arial", fontSize: 19}}>Back in Kibera, the experience of using the solar radios has not only helped children keep up with their studies, it has also provided 
                              unexpected career inspiration for some. “When I grow up, I want to become a mechanic, so I am able to fix technical stuff like this,” says Bildad Kagia with a smile.</p>
                              <br/><br/><br/>
                              </div>
                              

                            
                         {/* </Paper>  */}
                  </Container>
            </>
      );
}

export default Vaccine;