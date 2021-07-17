import React from "react";
import {AppBar, Typography, Container, Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({
    root: {
        textAlign: 'right'      
    },
    media: {
      height: 0,
    paddingTop: '56.25%'
    },
    paperCard: {
        margin: 80,
      },
    footer: {
        textAlign: "justify",
        
    },
      
  }));

  const styles = {
    footer: {
        textAlign: "justify",
        
    },
};  


function BottomNavigation(){
    const classes = useStyles();

    return (
      <div>
        <AppBar position="static" style={{background: "black", maxWidth: "150", height:500}} >
          <Container >
            <Toolbar>
              <div>
                <h4 style={{textAlign: "center", marginLeft: 300}}>Copyright © 2021 CMK Foundation. All rights reserved.</h4>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
        </div>
    )
}
export default BottomNavigation;