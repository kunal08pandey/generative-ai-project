import ModelSelector from "./ModelSelector";

export default function Sidebar({ mode, setMode, model, setModel}) {
    return (
        <div className="sidebar">
            <h2>Generative AI</h2>

       <button 
                onClick={() => setMode("chat")} 
                className={`nav-button ${mode === "chat" ? "active" : ""}`}
            >
        Chat
        </button>
        
        <button 
                onClick={() => setMode("rag")}
                className={`nav-button ${mode === "rag" ? "active" : ""}`}
            >
                📚 Knowledge Base (RAG)
            </button>
        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                <label style={{ fontSize: '12px', color: '#888' }}>Select Model</label>
                <ModelSelector model={model} setModel={setModel} />
            </div>
        </div>
    );
}