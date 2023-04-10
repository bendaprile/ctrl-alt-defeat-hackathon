import React, { useState } from "react";
import {callChatGPTAPI} from "../../common/api";

function MessagingPage() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        callChatGPTAPI(message).then((response) => {
            console.log(response);
            setResponse(response);
            setMessage("");
        }).catch((err) => {
            console.error(err);
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message here"
                />
                <button type="submit">Send</button>
            </form>
            <p>{response}</p>
        </div>
    );
}

export default MessagingPage;
