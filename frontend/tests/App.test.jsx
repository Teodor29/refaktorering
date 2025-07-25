import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";
import { test, expect } from "vitest";

test("App renderar utan krasch", () => {
    render(<App />);
    expect(screen.getByText("SSR Editor")).toBeInTheDocument();
    expect(screen.getByText("Dokument")).toBeInTheDocument();
});
