import {
    AppBar,
    Box,
    TextField,
    Toolbar,
    Typography,
  } from "@mui/material";
  import React from "react";

  
  const AppBarComponent = ({callBackSearchText}) => {
    
    return (
      <div>
        <Box sx={{ flexGrow: 1, marginBottom:"30px"}}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Rick And Morty Characters
              </Typography>
              <TextField
                label="Search"
                variant="standard"
                size="small"
                placeholder="Search by name, status, gender"
                onChange={(e) =>{callBackSearchText(e.target.value)}}
              />
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  };
  
  export default AppBarComponent;
  