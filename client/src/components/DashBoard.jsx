import React, { useState, useEffect } from "react";
import { getCars, getMakeOptions } from "../helpers/getCars";
import Search from "./Search";
import Stats from "./Stats";
import Listing from "./Listings";

import Container from "react-bootstrap/Container";

export default function DashBoard() {
  const [cars, setCars] = useState();
  const [stats, setStats] = useState();
  const [makeOptions, setMakeOptions] = useState();
  useEffect(() => {
    getSetData();
  }, []);

  function getSetData(query = {}) {
    getCars(query).then((res) => {
      const { cars, ...stats } = res;
      setCars(cars);
      setStats(stats);
    });
  }

  function getSetMakeOptions(make) {
    getMakeOptions(make).then((res) => {
      setMakeOptions(res);
    });
  }

  return (
    <Container>
      <Search
        getSetData={getSetData}
        getSetMakeOptions={getSetMakeOptions}
        makeOptions={makeOptions}
      ></Search>
      <Stats stats={stats}></Stats>
      <Listing cars={cars}></Listing>
    </Container>
  );
}
