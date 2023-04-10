import { render, screen } from '@testing-library/react';
import LandingPage from "./LandingPage";

test('renders name input field', () => {
    render(<LandingPage />);
    const nameInput = screen.getByLabelText("Full Legal Name");
    expect(nameInput).toBeInTheDocument();
});

test('renders logo', () => {
    render(<LandingPage />);
    const appLogo = screen.getByRole("img");
    expect(appLogo).toBeInTheDocument();
    expect(appLogo).toHaveAttribute("alt", "logo");
});

test('renders birth-date input field', () => {
    render(<LandingPage />);
    const birthDate = screen.getByLabelText("Birth Date");
    expect(birthDate).toBeInTheDocument();
});

test('renders Address Line 1 input field', () => {
    render(<LandingPage />);
    const addressLine1 = screen.getByLabelText("Address Line 1");
    expect(addressLine1).toBeInTheDocument();
});

test('renders Address Line 2 input field', () => {
    render(<LandingPage />);
    const addressLine1 = screen.getByLabelText("Address Line 2 (optional)");
    expect(addressLine1).toBeInTheDocument();
});

test('renders city input field', () => {
    render(<LandingPage />);
    const addressLine2 = screen.getByLabelText("City");
    expect(addressLine2).toBeInTheDocument();
});

test('renders state select field', () => {
    render(<LandingPage />);
    const stateSelect = screen.getByLabelText("State");
    expect(stateSelect).toBeInTheDocument();
});

test('renders zip input field', () => {
    render(<LandingPage />);
    const zipCode = screen.getByLabelText("Zip Code");
    expect(zipCode).toBeInTheDocument();
});

test('renders summary field', () => {
    render(<LandingPage />);
    const summary = screen.getByLabelText("Summary");
    expect(summary).toBeInTheDocument();
    expect(summary).toHaveDisplayValue("Please provide a short summary of your legal matter with as much detail as possible so we can best assist you.")
});

test('renders submit button', () => {
    render(<LandingPage />);
    const submitButton = screen.getByRole("button", {name: "Submit"});
    expect(submitButton).toBeInTheDocument();
});




