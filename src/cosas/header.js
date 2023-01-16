import { Grid,Box } from "@mui/material";
import React from "react";

const Header=()=>{
    return(
        <Box sx={{paddingBottom:2}}>
            <Grid container sx={{backgroundColor:'#EBEFEB', color: '#023047',borderRadius:1,width:'auto',pr:20,pl:20}} >
                <Grid item sx={{margin:'auto'}}><h1>Acceso a vehiculos</h1></Grid>
            </Grid>
            
        </Box>
    )
}

export default Header