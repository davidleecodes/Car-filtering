import { render, screen } from "@testing-library/react";
import App from "./App";
import Search from "./components/Search";
import Stats from "./components/Stats";
import Listing from "./components/Listings";

test("renders navBar rodo", () => {
  render(<App />);
  const linkElement = screen.getByText(/rodo/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Search", () => {
  render(<Search />);
  const linkElement = screen.getByText(/search/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Stats", () => {
  render(<Stats />);
  const linkElement = screen.getByText(/subgroup/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Listing", () => {
  render(<Listing />);
  const linkElement = screen.getByText(/model/i);
  expect(linkElement).toBeInTheDocument();
});
