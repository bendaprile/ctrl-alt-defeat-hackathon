import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LandingPage', () => {
  render(<App />);
  const landingPage = screen.getByTestId("landing-page");
  expect(landingPage).toBeInTheDocument();
});
