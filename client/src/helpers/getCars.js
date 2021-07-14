import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const REACT_APP_SERVER = "http://localhost:3001/";
const url = `${REACT_APP_SERVER}api`;

export async function getCars(query = {}) {
  query = queryBuilder(query);
  return await axios
    .get(`${url}${query}`)
    .then((res) => {
      const { cars, ...stats } = res.data;
      const carsWithIds = cars.map((car) => ({ ...car, id: uuidv4() }));
      return { cars: carsWithIds, ...stats };
    })
    .catch(() => ({
      error: { messge: "Unable to connect to server.Please try again" },
    }));
}

function queryBuilder(query) {
  let res = "";
  Object.entries(query).forEach(([key, value]) => {
    if (value) {
      res = `${res}&${key}=${value}`;
    }
  });
  if (res.length === 0) return "";
  else {
    res = res.slice(1);
    res = `?${res}`;
    return res;
  }
}

export async function getOptions(query, cars) {
  const { make, model, year } = query;

  const makes = new Set();
  const models = new Set();
  const years = new Set();

  cars.forEach((car) => {
    if (make && !car.make.toLowerCase().includes(make.toLowerCase()))
      return false;
    if (model && !car.model.toLowerCase().includes(model.toLowerCase()))
      return false;
    if (year && car.year !== year) return false;

    makes.add(`${car.make.toLowerCase()}`);
    models.add(`${car.model.toLowerCase()}`);
    years.add(car.year);
    return true;
  });

  return { makes: [...makes], models: [...models], years: [...years] };
}
