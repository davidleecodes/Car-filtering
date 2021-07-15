const axios = require("axios");
const url = "http://localhost:3001/";

test("Gets all", async function () {
  const response = await axios.get(`${url}api`);
  const data = response.data;

  expect(response.status).toBe(200);
  expect(data).toHaveProperty("totalNumber");
  expect(data).toHaveProperty("totalSubGroup");
  expect(data).toHaveProperty("lowestPrice");
  expect(data).toHaveProperty("medianPrice");
  expect(data).toHaveProperty("highestPrice");
});

test("wrong path", async function () {
  const response = await axios.get(`${url}wrong`);
  const data = response.data;

  expect(data).toHaveProperty("msg");
});

test("Gets MAKE starting with 'a'", async function () {
  const response = await axios.get(`${url}api?make=a`);
  const cars = response.data.cars;

  expect(response.status).toBe(200);
  expect(cars[0].make).toEqual(expect.stringMatching(/a/i));
  expect(cars[cars.length - 1].make).toEqual(expect.stringMatching(/a/i));
});

test("Gets MODEL starting with 'a'", async function () {
  const response = await axios.get(`${url}api?model=a`);
  const cars = response.data.cars;

  expect(response.status).toBe(200);
  expect(cars[0].model).toEqual(expect.stringMatching(/a/i));
  expect(cars[cars.length - 1].model).toEqual(expect.stringMatching(/a/i));
});

test("Gets YEAR  '2017'", async function () {
  const response = await axios.get(`${url}api?year=2017`);
  const cars = response.data.cars;

  expect(response.status).toBe(200);
  expect(cars[0].year).toEqual(2017);
  expect(cars[cars.length - 1].year).toEqual(2017);
});

test("Gets max  '60000'", async function () {
  const response = await axios.get(`${url}api?max=60000`);
  const cars = response.data.cars;

  expect(response.status).toBe(200);
  expect(cars[0].price).toBeLessThan(60000);
  expect(cars[cars.length - 1].price).toBeLessThan(60000);
});
