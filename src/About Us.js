import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles, Paper } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CMK from '../src/Gallery/CMK.jpg';
//import axios from 'axios';

function HouseRules() {
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
            },
      }));

      const classes = useStyles();

      return (
            <>
                  <Container>
                        <Paper className={classes.paper} elevation={3}>
                              <h2 style={{fontFamily: "Arial", textAlign: "center"}}>Background story </h2>
                              <br></br>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> We are a foundation that believes in helping the underpriviledged and giving them an equal opportunity. We believe that it is not only our responsibility as human beings, but also as christians.</p>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> Our vision was born in 2013 by the founder and CEO of the foundation, Mr Christ Kitenge Mbuyi. This was the result of his childhood experience: "I was born in a small city in the Republic of Congo called Pointed Noire. 
                              This is a city that has not been fortunate in infrastructure and service delivery and yet I grew up with so many smart and intellectual individuals. From a very young age, I noticed that there was a lack of opportunity and I was right because my parents moved my family and I 
                              to South Africa. I have seen my parents helping out in most if not all the communities that we have lived in. This inspired me to find a way to do the same and this foundation is a result of that."</p>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> At the CMK foundation, we believed that everyone has been created for a purpose. There is a legacy that we are all called to leave behind on this planet. However, there are factors outside of anyone's control that prevents people 
                              from reaching their full potential: sickness, lack of opportunity, poverty, lack of education. As such, we devote all our resources into making sure that we help change the lives of as many people as we can and help them reach their potential. We believe that the best way to 
                              leave this earth is knowing that we have accomplished everything that we are created to do.</p> <br></br>

                              <h2 style= {{textAlign: "center"}}>Leadership</h2>
                              <p style={{fontFamily: "Arial", fontSize: 19}}> The foundation’s leaders come from a broad range of backgrounds and have a diversity of expertise and experience that spans science and technology, medicine, public policy, education, communications, law, and business. Our leaders 
                              are guided by the foundation’s mission to create a world in which every person has the opportunity to live a healthy, productive life.</p>

                              <GridList cellHeight={180} className={classes.gridList}>
                              <GridListTile cols={2} style={{ height: 0, marginTop: -60 }}>
                              </GridListTile> 
                                    <GridListTile key={CMK}>
                                    <img src={CMK} alt="CMK" />
                                    <GridListTileBar title="Christ Kitenge Mbuyi" subtitle={<span>Co-chair</span>}/>
                              </GridListTile>        
                              </GridList>
      
                        </Paper>
                  </Container>
            </>
      );
}

export default HouseRules;