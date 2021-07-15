const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const db = require("./db.json");
const _ = require("lodash");

const middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router

server.get("/api", (req, res) => {
  try {
    const make = req.query.make;
    const model = req.query.model;
    const min = req.query.min;
    const max = req.query.max;
    const year = req.query.year;

    if (min && max && min > max) {
      throw new Error("min has to be greater than max");
    }
    const makeModelSubGroup = new Set();
    const prices = [];
    let totalNumber = 0;
    // const cars = router.db.get("cars");
    const cars = db.cars;
    const filter = cars.filter((car) => {
      if (make && !car.make.toLowerCase().includes(make.toLowerCase()))
        return false;
      if (model && !car.model.toLowerCase().includes(model.toLowerCase()))
        return false;
      if (min && car.price < min) return false;
      if (max && car.price > max) return false;
      if (year && car.year != year) return false;
      totalNumber += car.vehicle_count;
      makeModelSubGroup.add(`${car.make} ${car.model}`);
      prices.push(car.price);
      return true;
    });

    const totalSubGroup = makeModelSubGroup.size;
    const lowestPrice = prices[0];
    const highestPrice = prices[prices.length - 1];
    let medianPrice;
    const midIdx = Math.ceil(prices.length / 2);
    if (prices % 2 === 0)
      medianPrice = (prices[midIdx] + prices[midIdx - 1]) / 2;
    else medianPrice = prices[midIdx - 1];
    res.jsonp({
      totalNumber,
      totalSubGroup,
      lowestPrice,
      medianPrice,
      highestPrice,
      cars: filter,
    });
  } catch (error) {
    res.jsonp({
      msg: error,
    });
  }
});

server.get("/:path", (req, res) => {
  res.jsonp({
    msg: "not found",
  });
});

// Use default router
server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
