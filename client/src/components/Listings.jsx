import React from "react";
import { TextField, Grid, Box, Button, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
export default function Listing({ cars }) {
  return (
    <Grid>
      <Box mb={20} />
      <Box mx={4}>
        <List>
          <Hidden smDown>
            <ListItem>
              <Grid container direction="row">
                <Grid item xs={12} sm={3}>
                  <Typography>Make</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography>Model</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography>Price</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography>Year</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography>Vehicle Count</Typography>
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
          </Hidden>
          {cars &&
            cars.map((car) => (
              <ListItem key={car.id}>
                <Grid container direction="row">
                  <Hidden smUp>
                    <Grid item xs={6}>
                      <Typography>Make:</Typography>
                    </Grid>
                  </Hidden>
                  <Grid item xs={6} sm={3}>
                    <Typography>{car.make}</Typography>
                  </Grid>
                  <Hidden smUp>
                    <Grid item xs={6}>
                      <Typography>Model:</Typography>
                    </Grid>
                  </Hidden>
                  <Grid item xs={6} sm={3}>
                    <Typography>{car.model}</Typography>
                  </Grid>
                  <Hidden smUp>
                    <Grid item xs={6}>
                      <Typography>Price:</Typography>
                    </Grid>
                  </Hidden>
                  <Grid item xs={6} sm={2}>
                    <Typography>{car.price}</Typography>
                  </Grid>
                  <Hidden smUp>
                    <Grid item xs={6}>
                      <Typography>Year:</Typography>
                    </Grid>
                  </Hidden>
                  <Grid item xs={6} sm={2}>
                    <Typography>{car.year}</Typography>
                  </Grid>
                  <Hidden smUp>
                    <Grid item xs={6}>
                      <Typography>Count:</Typography>
                    </Grid>
                  </Hidden>
                  <Grid item xs={6} sm={2}>
                    <Typography>{car.vehicle_count}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
        </List>
      </Box>
    </Grid>
  );
}
