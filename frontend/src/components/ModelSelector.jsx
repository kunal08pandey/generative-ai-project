import { useEffect, useState } from "react";
import { getModels } from "../api/client";

export default function ModelSelector({ model, setModel }) {
    console.log("ModelSelector rendered");
    const [models, setModels] = useState([]);

    useEffect(()=> {
        console.log("useEffect called");
        getModels().then(data => {
            const allModels = Object.values(data).flat();
            setModels(allModels);
            console.log("Models set:", allModels);
        });
        console.log("setModels called");
    }, []);

    return (
        <select value={model} onChange={e => setModel(e.target.value)}>
            {Object.values(models).map(m => (
                <option key={m}>
                    {m}
                </option>
            ))}
        </select> 
    );
}