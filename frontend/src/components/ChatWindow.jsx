import { useState } from "react";
import { sendChat } from "../api/client";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ mode, model }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSend() {
        if (!input.trim() || isLoading) return;

        const userMsg = { role: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);

        try {
            const res = await sendChat(input, model, mode);
            setMessages(prev => [...prev, { role: res.role, text: res.content }]);
        } catch (error) {
            console.error("Chat Error:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="chat">
            <div className="messages">
                {messages.length === 0 && (
                    <div style={{ textAlign: 'center', marginTop: '20%', color: '#666' }}>
                        <h1>How can I help you today?</h1>
                    </div>
                )}
                {messages.map((m, i) => (
                    <MessageBubble key={i} role={m.role} text={m.text} />
                ))}
                {isLoading && <div className="message assistant"><div className="bubble">...</div></div>}
            </div>

            <div className="input-container">
                <div className="input-wrapper">
                    <textarea 
                        value={input} 
                        onChange={e => setInput(e.target.value)} 
                        placeholder="Message GenAI..."
                        rows={1}
                        onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                    />
                    <button className="send-button" onClick={handleSend} disabled={!input.trim()}>
                        ↑
                    </button>
                </div>
            </div>
        </div>
    );
}