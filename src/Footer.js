import React from "react";
import {AppBar, Container, Toolbar} from '@material-ui/core';


function BottomNavigation(){

    return (
      <div>
        <AppBar position="static" style={{background:"#f7ecec"}} >
          <Container >
            <Toolbar>
              <div>
                <h4 style={{textAlign: "center", paddingLeft: 350, color: 'black'}}>Copyright © 2021 CMK Foundation. All rights reserved.</h4>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
        </div>
    )
}
export default BottomNavigation;