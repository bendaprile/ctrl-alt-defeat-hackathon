import React, { useEffect, useRef, useState } from "react";
import { callChatGPTAPI } from "../../common/api";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useLocation } from "react-router-dom";

const ChatPage = ({initialText}) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const messageEndRef = useRef(null);
    const { state } = useLocation(); // state is any or unknown

  useEffect(() => {
        // Scroll to the bottom of the messages list on mount or when a new message is added
        if (messageEndRef) {
            messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
            messageEndRef.current?.focus({preventScroll: true});
        }
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        callChatGPTAPI(message).then((response) => {
            setResponse(response);
            setMessages([...messages, { message, response: response }]);
            setMessage("");
        }).catch((err) => {
            console.error(err);
        });
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <div
                style={{
                    flex: 1,
                    overflowY: "scroll",
                    padding: "1rem",
                }}
            >
                {messages.map((msg, i) => (
                    <div key={i}>
                        <p className={"user-text"}>
                            <strong>You:</strong> {msg.message}
                        </p>
                        <p className={"chatgpt-text"}>
                            <strong>Bot:</strong> {msg.response}
                        </p>
                    </div>
                ))}
                <div ref={messageEndRef} />
            </div>
            <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
                <TextField
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message here"
                    style={{ marginRight: "1rem", width: "500px"}}
                />
                <Button type="submit" variant="outlined" size="large" style={{marginTop: "5px"}}>Send</Button>
            </form>
        </div>
    );
}

export default ChatPage;
