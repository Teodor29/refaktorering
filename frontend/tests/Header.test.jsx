import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../src/components/Header";
import { test, expect } from "vitest";

test("renders Header component", () => {
    render(
        <Router>
            <Header />
        </Router>
    );
    expect(screen.getByText("SSR Editor")).toBeInTheDocument();
});
