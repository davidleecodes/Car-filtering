import React from "react";
import { TextField, Grid, Box, Button } from "@material-ui/core";

export default function Search() {
  return (
    <Grid>
      <Box mb={20} />
      <Box mx={4}>
        <Grid container justifyContent="space-between">
          <TextField
            id="make"
            label="Make"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            id="model"
            label="Model"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            id="year"
            label="Year"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            id="min"
            label="Min"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            id="max"
            label="Max"
            defaultValue="Hello World"
            variant="outlined"
          />
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
}
