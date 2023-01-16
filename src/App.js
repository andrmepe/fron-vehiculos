import { Box } from '@mui/system';
import {Grid} from '@mui/material'
import './App.css';
import Tabla from './cosas/tabla';
import React from 'react';


function App() {
    return (
      <Box sx={{padding:2,backgroundColor:'#cbc0d3',height:530,}}>
        <Grid className="App">
          <Tabla></Tabla>
        </Grid>
      </Box>
    );
}




export default App;