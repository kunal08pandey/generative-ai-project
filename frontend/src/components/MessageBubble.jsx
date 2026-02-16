import TypeWriter from "./TypeWriter";
export default function MessageBubble({role, text}) {
    const isUser = role === "user";

    return (
        <div className={`message ${isUser ? "user" : "assistant"}`}>
            <div className="bubble markdown">
                {isUser ? text : <TypeWriter text={text} speed={15}/> }
            </div>
        </div>
    );
}