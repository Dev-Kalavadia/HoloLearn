import React, { useState } from "react";

import Message from "./Message";
import Input from "./Input";
import History from "./History";
import Clear from "./Clear";

import "./chat.module.css";

type MessageItem = {
    role: string;
    content: string;
};

type HistoryItem = {
    question: string;
    answer?: string;
};


export default function App() {
    const [input, setInput] = useState<string>("");
    const initialMessages = JSON.parse(localStorage.getItem('messages') || '[]');
    const [messages, setMessages] = useState<MessageItem[]>(initialMessages);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const savedMessages = localStorage.getItem('messages');
        if (savedMessages) {
            try {
                const parsedMessages = JSON.parse(savedMessages);
                if (Array.isArray(parsedMessages)) { // Validate that it's an array
                    setMessages(parsedMessages);
                }
            } catch (error) {
                console.error("Error parsing messages from local storage:", error);
            }
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(messages));
    }, [messages]);


    const scrollToBottom = () => {
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
    };

    const simulateTypingEffect = (completeMessage: string) => {
        let currentContent = '';
        const typingSpeed = 60; // milliseconds

        for (let i = 0; i <= completeMessage.length; i++) {
            setTimeout(() => {
                currentContent = completeMessage.substring(0, i);
                setMessages(oldMessages => {
                    const lastMessage = oldMessages[oldMessages.length - 1];
                    if (lastMessage && lastMessage.role === "assistant") {
                        return [...oldMessages.slice(0, -1), { role: "assistant", content: currentContent }];
                    } else {
                        return [...oldMessages, { role: "assistant", content: currentContent }];
                    }
                });
                scrollToBottom(); // Call scrollToBottom as each character is added
            }, i * typingSpeed);
        }
    };


    const handleSubmit = async () => {
        if (input) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/holotutor`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: input }),
            });

            const data = await response.json();

            if (response.ok) {
                const newUserMessage: MessageItem = { role: "user", content: input };

                setMessages(oldMessages => [...oldMessages, newUserMessage]);

                simulateTypingEffect(data.response);



                // Update history
                setHistory([...history, { question: input, answer: data.response }]);

                // Clear the input field
                setInput('');
            } else {
                console.error('Error from server:', data);
            }
        }
    };

    const clear = () => {
        // Clear logic here
        setMessages([]);
    };

    return (
        <div className="chatContainer">
            <div className="App">
                <div className="Column">
                    <div className="Content" ref={contentRef}>
                        {messages.map((el, i) => (
                            <Message key={i} role={el.role} content={el.content} />
                        ))}
                    </div>

                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}
