import React from 'react';
import { CardActionArea, CardContent, CardMedia, Container, makeStyles, Paper, Typography, Card } from '@material-ui/core';
import CMK from '../src/Gallery/CMK.jpg';
import Archange from '../src/Gallery/Archange.JPG';
import Erdy from '../src/Gallery/Erdy.jpg';
import Joy from '../src/Gallery/Joy.JPG';
import Grid from '@material-ui/core/Grid';
import AboutUsPic from '../src/Gallery/AboutUsPic.jpg';
import './About Us.css';
//import axios from 'axios';

const useStyles = makeStyles((theme) => ({
      title: {
            fontSize: 20,
            textAlign: "left",
            fontWeight: "bold",
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(2)
      },

      card:{
            height: 250,
            width: 250,
            marginLeft:10,
            marginTop: 80,
            marginRight:10,
          },

      media: {
            height: 0,
          paddingTop: '56.25%'
          },

      gridList: {
            width: 500,
            height: 450,
          },

      paper: {
            // marginTop: theme.spacing(4),
            // marginBottom: theme.spacing(4),
            // paddingTop: theme.spacing(2),
            // padding: theme.spacing(10),
            // display: 'flex',
            overflow: 'hidden',
            textAlign: "justify",
            flexDirection: 'column',
            minHeight: 200,
            // width:850

            // [theme.breakpoints.down('sm')]: {
            //       marginLeft: 1,
            //       spacing: 0,
            //       marginRight: 1,
            //       textAlign: 'left'        
            //     }
      },

      root: {
            width: 250,
            marginTop: 80,
            height: 250,
            marginLeft:8,
            marginRight:10
            
          },

      picture: {
            height: 600,
            width: `calc(94vw + 70px)`,
            marginLeft:-64,
            [theme.breakpoints.down('sm')]: {
            height: 200,
            width: '300',
            marginLeft:-64,


            }
      }, 
      
      
      grid:{
            marginLeft: 30,
      },
      
}));

function WhoWeAre() {
      

      const classes = useStyles();

      return (
            <>
            {/* <br></br> */}
            <Container>
                        <div>
                              <img src={AboutUsPic} alt = "Kids" className={classes.picture}/>
                        </div>
                        <Paper className={classes.paper} elevation={-1}> 

                              <h2>Background story </h2>
                              <br></br>
                              <p > We are a foundation that believes in helping the underpriviledged and giving them an equal opportunity. We believe that it is not only our responsibility as human beings, but also as christians.</p>
                              <p > Our vision was born in 2013 by the founder and CEO of the foundation, Mr Christ Kitenge Mbuyi. This was the result of his childhood experience: "I was born in a small city in the Republic of Congo called Pointed Noire. 
                              This is a city that has not been fortunate in infrastructure and service delivery and yet I grew up with so many smart and intellectual individuals. From a very young age, I noticed that there was a lack of opportunity and I was right because my parents moved my family and I 
                              to South Africa. I have seen my parents helping out in most if not all the communities that we have lived in. This inspired me to find a way to do the same and this foundation is a result of that."</p>
                              <p > At the CMK foundation, we believed that everyone has been created for a purpose. There is a legacy that we are all called to leave behind on this planet. However, there are factors outside of anyone's control that prevents people 
                              from reaching their full potential: sickness, lack of opportunity, poverty, lack of education. As such, we devote all our resources into making sure that we help change the lives of as many people as we can and help them reach their potential. We believe that the best way to 
                              leave this earth is knowing that we have accomplished everything that we are created to do.</p> <br></br>

                              <h2>Leadership</h2>
                              <p > The foundation’s leaders come from a broad range of backgrounds and have a diversity of expertise and experience that spans science and technology, medicine, public policy, education, communications, law, and business. Our leaders 
                              are guided by the foundation’s mission to create a world in which every person has the opportunity to live a healthy, productive life.</p>
                              
                              

                              
                              <Grid container spacing={30} className={classes.grid}>
                              <Grid item >
                              <Card className={classes.root}>
                                          <CardActionArea>
                                                <CardMedia className={classes.media} image={CMK} title="CMK"/>
                                          
                                          <CardContent>
                                                <Typography gutterBottom variant="h6" component="h2"> Chris Kitenge</Typography>
                                                
                                                <Typography variant="body2" color="textSecondary" component="p"> Chair and Trustee </Typography>
                                                
                                          </CardContent>
                                          </CardActionArea>
                                    </Card>
                              </Grid>
                              <Grid item >
                              <Card className={classes.root}>
                                          <CardActionArea>
                                                <CardMedia className={classes.media} image={Erdy} title="Erdy"/>
                                          
                                          <CardContent>
                                                <Typography gutterBottom variant="h6" component="h2"> Erdy Kitenge</Typography>
                                                
                                                <Typography variant="body2" color="textSecondary" component="p"> Trustee </Typography>
                                                
                                          </CardContent>
                                          </CardActionArea>
                                    </Card>
                              </Grid>
                              <Grid item >
                                    <Card className={classes.root}>
                                          <CardActionArea>
                                                <CardMedia className={classes.media} image={Joy} title="Joy"/>
                                          
                                          <CardContent>
                                                <Typography gutterBottom variant="h6" component="h2"> Joy Kitenge</Typography>
                                                
                                                <Typography variant="body2" color="textSecondary" component="p"> Trustee </Typography>
                                                
                                          </CardContent>
                                          </CardActionArea>
                                    </Card>
                              </Grid>
                              <Grid item>
                                    <Card className={classes.root}>
                                          <CardActionArea>
                                                <CardMedia className={classes.media} image={Archange} title="Archange"/>
                                          
                                          <CardContent>
                                                <Typography gutterBottom variant="h6" component="h2"> Archange Ilunga</Typography>
                                                
                                                <Typography variant="body2" color="textSecondary" component="p"> Trustee </Typography>
                                                
                                          </CardContent>
                                          </CardActionArea>
                                    </Card>
                              </Grid>
                              </Grid>
                              
                         </Paper> 
                  </Container>
            </>
      );
}

export default WhoWeAre;