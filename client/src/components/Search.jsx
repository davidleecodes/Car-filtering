import React, { useState } from "react";
import { TextField, Grid, Box, Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function Search({ getSetData }) {
  const defaultSearch = {
    make: "",
    model: "",
    year: "",
    min: "",
    max: "",
  };
  const [searchQuery, setSearchQuery] = useState(defaultSearch);

  function handleChange(e) {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  }

  function handleSearch(e) {
    e.preventDefault();
    getSetData(searchQuery);
    setSearchQuery(defaultSearch);
  }
  return (
    <Grid>
      <Box mb={20} />
      <Box mx={4}>
        <Grid container justifyContent="space-between">
          <TextField
            id="make"
            label="Make"
            variant="outlined"
            name="make"
            value={searchQuery.make}
            onChange={handleChange}
          />
          <TextField
            id="model"
            label="Model"
            variant="outlined"
            name="model"
            value={searchQuery.model}
            onChange={handleChange}
          />
          <TextField
            id="year"
            label="Year"
            variant="outlined"
            name="year"
            value={searchQuery.year}
            onChange={handleChange}
          />

          <FormControl variant="outlined">
            <InputLabel id="min-label">min price</InputLabel>
            <Select
              labelId="min-label"
              id="min"
              value={searchQuery.min}
              onChange={handleChange}
              name="min"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10000}>10k</MenuItem>
              <MenuItem value={20000}>20k</MenuItem>
              <MenuItem value={30000}>30k</MenuItem>
              <MenuItem value={40000}>40k</MenuItem>
              <MenuItem value={50000}>50k</MenuItem>
              <MenuItem value={60000}>60k</MenuItem>
              <MenuItem value={70000}>70k</MenuItem>
              <MenuItem value={80000}>80k</MenuItem>
              <MenuItem value={90000}>90k</MenuItem>
              <MenuItem value={100000}>100k</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel id="max-label">max price</InputLabel>
            <Select
              labelId="max-label"
              id="max"
              value={searchQuery.max}
              onChange={handleChange}
              name="max"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10000}>10k</MenuItem>
              <MenuItem value={20000}>20k</MenuItem>
              <MenuItem value={30000}>30k</MenuItem>
              <MenuItem value={40000}>40k</MenuItem>
              <MenuItem value={50000}>50k</MenuItem>
              <MenuItem value={60000}>60k</MenuItem>
              <MenuItem value={70000}>70k</MenuItem>
              <MenuItem value={80000}>80k</MenuItem>
              <MenuItem value={90000}>90k</MenuItem>
              <MenuItem value={100000}>100k</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
}
