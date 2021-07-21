import React from "react";
import {Grid, Paper} from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import Pic1 from '../src/Gallery/pic1.png';
import Pic2 from '../src/Gallery/pic2.jpg';
import Pic3 from '../src/Gallery/pic3.jpg';
import Pic4 from '../src/Gallery/pic4.jpg';
import Pic5 from '../src/Gallery/pic5.webp';
import Pic6 from '../src/Gallery/pic6.jpg';



  const styles = {
    footer: {
        textAlign: "justify",
        
    },
    pic1Container: {
        height: 400,
        backgroundImage: 'url('+ Pic1+')',
        backgroundSize: 'cover',
        paddingLeft: 24,
    },
    pic2Container: {
        height: 400,
        backgroundImage: 'url('+ Pic2+')',
        backgroundSize: 'cover',
        paddingLeft: 24,
    },
    pic3Container: {
        height: 400,
        backgroundImage: 'url('+ Pic3+')',
        backgroundSize: 'cover',
        paddingLeft: 24,
    },
    pic4Container: {
        height: 400,
        backgroundImage: 'url('+ Pic4+')',
        backgroundSize: 'cover',
        paddingLeft: 24,
    },
    pic5Container: {
        height: 400,
        backgroundImage: 'url('+ Pic5+')',
        backgroundSize: 'cover',
        paddingLeft: 24,
    },
    pic6Container: {
        height: 400,
        backgroundImage: 'url('+ Pic6+')',
        backgroundSize: 'cover',
        paddingLeft: 24,
    },
};  


function Gallery(){
    

    return (
      <div>
        
        <br></br>

        <Grid container spacing={2}>
            <Grid item xs={4} >
                <Paper style={styles.pic1Container}> </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper style={styles.pic2Container}> </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper style={styles.pic3Container}> </Paper>
            </Grid>


        </Grid>


        <Grid container spacing={2}>
            <Grid item xs={4} >
                <Paper style={styles.pic4Container}> </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper style={styles.pic5Container}> </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper style={styles.pic6Container}> </Paper>
            </Grid>


        </Grid>
        </div>
    )
}
export default Gallery;