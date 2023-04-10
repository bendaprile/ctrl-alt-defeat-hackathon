import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import LandingPage from "./LandingPage";
import { MemoryRouter } from "react-router-dom";
import * as router from "react-router";

describe("LandingPage", () => {
  const navigate = jest.fn()

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
    render(<MemoryRouter initialEntries={["/"]}><LandingPage /></MemoryRouter>);
  })

  test('renders name input field', () => {
    const nameInput = screen.getByLabelText("Full Legal Name");
    expect(nameInput).toBeInTheDocument();
  });

  test('renders logo', () => {
    const appLogo = screen.getByRole("img");
    expect(appLogo).toBeInTheDocument();
    expect(appLogo).toHaveAttribute("alt", "logo");
  });

  test('renders birth-date input field', () => {
    const birthDate = screen.getByLabelText("Birth Date");
    expect(birthDate).toBeInTheDocument();
  });

  test('renders Address Line 1 input field', () => {
    const addressLine1 = screen.getByLabelText("Address Line 1");
    expect(addressLine1).toBeInTheDocument();
  });

  test('renders Address Line 2 input field', () => {
    const addressLine1 = screen.getByLabelText("Address Line 2 (optional)");
    expect(addressLine1).toBeInTheDocument();
  });

  test('renders city input field', () => {
    const addressLine2 = screen.getByLabelText("City");
    expect(addressLine2).toBeInTheDocument();
  });

  test('renders state select field', () => {
    const stateSelect = screen.getByLabelText("State");
    expect(stateSelect).toBeInTheDocument();
  });

  test('renders zip input field', () => {
    const zipCode = screen.getByLabelText("Zip Code");
    expect(zipCode).toBeInTheDocument();
  });

  test('renders summary field', () => {
    const summary = screen.getByLabelText("Summary");
    expect(summary).toBeInTheDocument();
    expect(summary).toHaveAttribute("placeholder", "Please provide a short summary of your legal matter with as much detail as possible so we can best assist you.")
  });

  test('renders submit button', () => {
    const submitButton = screen.getByRole("button", {name: "Submit"});
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test('enables submit button when form fields filled', async () => {
    const nameInput = screen.getByLabelText("Full Legal Name");
    const summary = screen.getByLabelText("Summary");
    const zipCode = screen.getByLabelText("Zip Code");
    const stateSelect = screen.getByLabelText("State");
    const city = screen.getByLabelText("City");
    const addressLine1 = screen.getByLabelText("Address Line 1");
    const birthDate = screen.getByLabelText("Birth Date");

    await userEvent.type(nameInput, "Name");
    await userEvent.type(summary, "Summary");
    await userEvent.type(zipCode, "50021");
    await userEvent.click(stateSelect);
    await userEvent.click(screen.getByRole("option", {name: "Iowa"}));
    await userEvent.type(city, "Ankeny");
    await userEvent.type(addressLine1, "123 Place St");
    await userEvent.type(birthDate, "05/05/1920");

    const submitButton = screen.getByRole("button", {name: "Submit"});
    expect(submitButton).toBeInTheDocument();
    await waitFor(() => expect(submitButton).toBeEnabled());

    await userEvent.click(submitButton);

    expect(navigate).toHaveBeenCalledWith("/chat", {state: {address1: "123 Place St", birthDate: expect.anything(), city: "Ankeny", name: "Name", state: "IA", summary: "Summary", zipCode: "50021"}});
  });
});


