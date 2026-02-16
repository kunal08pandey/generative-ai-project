import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import "./styles/app.css";

export default function App() {
  const [mode, setMode] = useState("chat");
  const [model, setModel] = useState("llama3");
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className={`app ${isSidebarOpen ? "sidebar-open" : ""}`}>
      {/* Mobile Overlay to close sidebar when clicking outside */}
      {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)}></div>}
      <Sidebar
        mode={mode}
        setMode={setMode}
        model={model}
        setModel={setModel}
      />
      <div className="main-content">
          {/* Mobile Header with Hamburger */}
          <header className="mobile-header">
              <button className="menu-toggle" onClick={() => setIsSidebarOpen(true)}>☰</button>
              <span>{model} ({mode})</span>
          </header>
      <ChatWindow mode={mode} model={model} />
      </div>
    </div>
  );
}
