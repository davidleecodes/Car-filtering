import React, { useState, useEffect } from "react";
import { getCars } from "../helpers/getCars";
import Search from "./Search";
import Stats from "./Stats";
import Listing from "./Listings";

import Container from "react-bootstrap/Container";

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
    <Container>
      <Search getSetData={getSetData}></Search>
      <hr></hr>
      {cars && cars.length > 0 && stats && (
        <>
          <Stats stats={stats}></Stats>
          <Listing cars={cars}></Listing>
        </>
      )}
      {cars.length == 0 && <p>no results</p>}
    </Container>
  );
}
