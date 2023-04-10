import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import ChatPage from "./ChatPage";
import { MemoryRouter } from "react-router-dom";
import * as api from "../../common/api";

jest.mock("../../common/api", () => ({
    callChatGPTAPI: jest.fn(),
}));

describe("ChatPage component", () => {
    const scrollMock = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderChat = () => {
        window.HTMLElement.prototype.scrollIntoView = scrollMock;
        render(<MemoryRouter initialEntries={["/chat"]}><ChatPage /></MemoryRouter>);
    }

    const mockChatGpt = (response = "potato") => {
        const callChatGPTAPI = jest.spyOn(api, "callChatGPTAPI");
        callChatGPTAPI.mockResolvedValue(response);
        return callChatGPTAPI;
    }

    it("should render the ChatPage component", () => {
        renderChat();
        const inputElement = screen.getByPlaceholderText("Enter your message here");
        expect(inputElement).toBeInTheDocument();
    });

    it("should add a message when the user sends a message", async () => {
        const callChatGPTAPI = mockChatGpt();
        renderChat();
        const inputElement = screen.getByPlaceholderText("Enter your message here");
        fireEvent.change(inputElement, { target: { value: "hello" } });
        fireEvent.click(screen.getByText("Send"));
        await waitFor(() => {
            expect(callChatGPTAPI).toHaveBeenCalledTimes(1);
        });
        const userTextElement = await screen.findByText("You:");
        const botTextElement = screen.getByText("Bot:");
        expect(userTextElement).toBeInTheDocument();
        expect(botTextElement).toBeInTheDocument();
    });

    it("should clear the input field after sending a message", async () => {
        const callChatGPTAPI = mockChatGpt();
        renderChat();
        const inputElement = screen.getByPlaceholderText("Enter your message here");
        fireEvent.change(inputElement, { target: { value: "hello" } });
        fireEvent.click(screen.getByText("Send"));
        await waitFor(() => {
            expect(callChatGPTAPI).toHaveBeenCalledTimes(1);
        });
        await waitFor(() => expect(inputElement).toHaveValue(""));
    });

    it("should scroll to the bottom of the messages list when a new message is added", async () => {
        const callChatGPTAPI = mockChatGpt();
        renderChat();
        const inputElement = screen.getByPlaceholderText("Enter your message here");
        fireEvent.change(inputElement, { target: { value: "hello" } });
        fireEvent.click(screen.getByText("Send"));
        await waitFor(() => {
            expect(callChatGPTAPI).toHaveBeenCalledTimes(1);
        });
        expect(scrollMock).toHaveBeenCalledTimes(1);
    });
});

