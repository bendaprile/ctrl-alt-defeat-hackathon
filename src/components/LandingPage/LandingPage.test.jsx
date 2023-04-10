import { render, screen } from '@testing-library/react';
import LandingPage from "./LandingPage";

test('renders name input field', () => {
    render(<LandingPage />);
    const nameInput = screen.getByTestId("name-input");
    expect(nameInput).toBeInTheDocument();
});

test('renders logo', () => {
    render(<LandingPage />);
    const appLogo = screen.getByTestId("app-logo");
    expect(appLogo).toBeInTheDocument();
});

test('renders birth-date input field', () => {
    render(<LandingPage />);
    const birthDate = screen.getByTestId("birth-date");
    expect(birthDate).toBeInTheDocument();
});

test('renders Address Line 1 input field', () => {
    render(<LandingPage />);
    const addressLine1 = screen.getByTestId("address-line-1");
    expect(addressLine1).toBeInTheDocument();
});

test('renders Address Line 2 input field', () => {
    render(<LandingPage />);
    const addressLine1 = screen.getByTestId("address-line-2");
    expect(addressLine1).toBeInTheDocument();
});

test('renders city input field', () => {
    render(<LandingPage />);
    const addressLine1 = screen.getByTestId("city");
    expect(addressLine1).toBeInTheDocument();
});



