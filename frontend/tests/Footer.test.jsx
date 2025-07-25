import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Footer from "../src/components/Footer";
import { test, expect } from "vitest";

test("renders Footer component", () => {
    render(
        <Router>
            <Footer />
        </Router>
    );
    expect(screen.getByText("Coverage")).toBeInTheDocument();
});
