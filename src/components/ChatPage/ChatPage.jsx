import React, { useState, useRef, useEffect } from "react";
import {callChatGPTAPI} from "../../common/api";

function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const messageEndRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom of the messages list on mount or when a new message is added
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        callChatGPTAPI(message).then((response) => {
            console.log(response);
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
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message here"
                    style={{ marginRight: "1rem" }}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ChatPage;
