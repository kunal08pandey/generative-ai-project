import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function TypeWriter({text, speed = 20}) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prevText => prevText + text[index]);
                setIndex(prevIndex => prevIndex + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);
    return (<div className="bubble markdown">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{displayedText}</ReactMarkdown>
    </div>);
}