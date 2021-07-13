import React from "react";
import { TextField, Grid, Box, Button, Typography } from "@material-ui/core";

export default function Stats({ stats }) {
  return (
    <Grid>
      <Box mb={10} />
      <Box mx={4}>
        <Grid container direction="row">
          <Typography>{stats.totalNumber}</Typography>
          <Typography>{stats.totalSubGroup}</Typography>
          <Typography>{stats.lowestPrice}</Typography>
          <Typography>{stats.medianPrice}</Typography>
          <Typography>{stats.highestPrice}</Typography>
        </Grid>
      </Box>
    </Grid>
  );
}
