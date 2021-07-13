import React, { useState, useEffect } from "react";
import { getCars } from "../helpers/getCars";
import Search from "./Search";
import Stats from "./Stats";
import Listing from "./Listings";

import { TextField, Grid, Box, Button } from "@material-ui/core";

export default function DashBoard() {
  const [cars, setCars] = useState();
  const [stats, setStats] = useState();
  useEffect(() => {
    getSetData();
  }, []);

  function getSetData(query = {}) {
    console.log(query);
    getCars(query).then((res) => {
      console.log(res);
      const { cars, ...stats } = res;
      setCars(cars);
      setStats(stats);
    });
  }
  return (
    <Grid>
      <Search getSetData={getSetData}></Search>
      {cars && stats && (
        <>
          <Stats stats={stats}></Stats>
          <Listing cars={cars}></Listing>
        </>
      )}
    </Grid>
  );
}
