import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "../askQ.css"; // Importing external CSS file

const AskQ = () => {
    const [query, setQuery] = useState(""); // Store user input
    const [response, setResponse] = useState(""); // Store AI response
    const [loading, setLoading] = useState(false); // Loading state

    const handleGenerate = async () => {
        if (!query.trim()) return;
        setLoading(true);
        setResponse("");
        try {
            const genAI = new GoogleGenerativeAI("AIzaSyDBw9bDwySu-EpAk5bgQwA1hyybkESE25M");
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

            const result = await model.generateContent(query);
            setResponse(result.response.text()); // Set response state
        } catch (error) {
            console.error("Error:", error);
            setResponse("Error generating response. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1 className="title">Ask Your Queries</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter your query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="query-input"
                />
                <button 
                    onClick={handleGenerate} 
                    className="generate-btn"
                    disabled={loading}
                >
                    {loading ? "Generating..." : "Generate"}
                </button>
            </div>
            {response && (
                <div className="response-container">
                    <h3>Response:</h3>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default AskQ;

