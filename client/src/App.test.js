import { render, screen } from "@testing-library/react";
import App from "./App";
import Search from "./components/Search";
import Stats from "./components/Stats";
import Listing from "./components/Listings";

test("renders Search", () => {
  render(<Search />);
  const linkElement = screen.getByText(/search/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Stats", () => {
  render(<Stats />);
  const linkElement = screen.getByText(/total vehicles matched/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Listing", () => {
  render(<Listing />);
  const linkElement = screen.getByText(/matches by make and model/i);
  expect(linkElement).toBeInTheDocument();
});
