import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ChatPage from "./ChatPage";

jest.mock("../../common/api", () => ({
    callChatGPTAPI: jest.fn(),
}));

describe("ChatPage component", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render the ChatPage component", () => {
        const { getByPlaceholderText } = render(<ChatPage />);
        const inputElement = getByPlaceholderText("Enter your message here");
        expect(inputElement).toBeInTheDocument();
    });

    it("should add a message when the user sends a message", async () => {
        const { getByPlaceholderText, getByText } = render(<ChatPage />);
        const inputElement = getByPlaceholderText("Enter your message here");
        fireEvent.change(inputElement, { target: { value: "hello" } });
        fireEvent.click(getByText("Send"));
        await waitFor(() => {
            expect(callChatGPTAPI).toHaveBeenCalledTimes(1);
        });
        const userTextElement = getByText("You: hello");
        const botTextElement = getByText("Bot:");
        expect(userTextElement).toBeInTheDocument();
        expect(botTextElement).toBeInTheDocument();
    });

    it("should clear the input field after sending a message", async () => {
        const { getByPlaceholderText, getByText } = render(<ChatPage />);
        const inputElement = getByPlaceholderText("Enter your message here");
        fireEvent.change(inputElement, { target: { value: "hello" } });
        fireEvent.click(getByText("Send"));
        await waitFor(() => {
            expect(callChatGPTAPI).toHaveBeenCalledTimes(1);
        });
        expect(inputElement.value).toBe("");
    });

    it("should scroll to the bottom of the messages list when a new message is added", async () => {
        const { getByPlaceholderText, getByText } = render(<ChatPage />);
        const inputElement = getByPlaceholderText("Enter your message here");
        fireEvent.change(inputElement, { target: { value: "hello" } });
        fireEvent.click(getByText("Send"));
        await waitFor(() => {
            expect(callChatGPTAPI).toHaveBeenCalledTimes(1);
        });
        const messageEndRef = document.querySelector("#message-end-ref");
        expect(messageEndRef).toHaveFocus();
    });
});

