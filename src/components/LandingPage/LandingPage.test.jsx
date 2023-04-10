import { render, screen } from '@testing-library/react';
import LandingPage from "./LandingPage";

test('renders name input field', () => {
    render(<LandingPage />);
    const nameInput = screen.getByTestId("name-input");
    expect(nameInput).toBeInTheDocument();
});
