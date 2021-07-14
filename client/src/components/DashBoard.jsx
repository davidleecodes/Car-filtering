import React, { useState, useEffect } from "react";
import { getCars, getOptions } from "../helpers/getCars";
import Search from "./Search";
import Stats from "./Stats";
import Listing from "./Listings";

import Container from "react-bootstrap/Container";

export default function DashBoard() {
  const [allCars, setAllCars] = useState();
  const [cars, setCars] = useState();
  const [stats, setStats] = useState();
  const [options, setOptions] = useState();
  useEffect(() => {
    getSetData();
  }, []);

  function getSetData(query = {}) {
    getCars(query).then((res) => {
      const { cars, ...stats } = res;
      setCars(cars);
      setStats(stats);
      if (query === {}) {
        setAllCars(cars);
        getSetOptions({}, cars);
      }
    });
  }

  function getSetOptions(query, cars = allCars) {
    getOptions(query, cars).then((res) => {
      setOptions(res);
    });
  }

  return (
    <Container>
      <Search
        getSetData={getSetData}
        getSetOptions={getSetOptions}
        options={options}
      ></Search>
      <Stats stats={stats}></Stats>
      <Listing cars={cars}></Listing>
    </Container>
  );
}
