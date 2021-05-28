import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, useTheme } from '@material-ui/core/styles';



export default function DisabledTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Paper square>
      <Tabs
        value={value}
        //indicatorColor="secondary"
        textColor="secondary"
        onChange={handleChange}
        variant= "fullWidth"
        //background="secondary"
        
      >
        {/* <Tab label="Home" /> */}
        <Tab label="Home"/>
        <Tab label="Who we are" />
        <Tab label="Our work" />
        <Tab label="Ideas" />
        <Tab label="Get Involved" />
      </Tabs>
    </Paper>
  );
}