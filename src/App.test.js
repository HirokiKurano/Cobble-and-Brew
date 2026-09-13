import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Cobble & Brew header", () => {
  render(<App />);
  expect(screen.getAllByText(/Cobble & Brew/i).length).toBeGreaterThan(0);
});

test("renders primary navigation links", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Cafés" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Antiques" })).toBeInTheDocument();
});
