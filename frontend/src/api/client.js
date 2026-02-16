const SCHEME = "http://";
const API_PORT = "8000";
const API_BASE = `${SCHEME}${window.location.hostname}:${API_PORT}`;

export async function getModels() {
    console.log("getModels called");
    const res = await fetch(`${API_BASE}/models/`)  
    return res.json();
}

export async function sendChat(prompt, model, mode) {
    const endpoint = mode === "rag" ? "/rag/chat" : "/chat";

    const body = 
        mode === "rag"
         ? { "query": prompt, model }
         : { prompt, model };

    const res = await fetch(`${API_BASE}${endpoint}`, {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    
    return res.json();
}