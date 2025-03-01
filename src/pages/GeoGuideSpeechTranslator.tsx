import React, { useState, useEffect } from "react";
/// <reference path="../global.d.ts" />

// Define types for state
interface TranslatorState {
  recognizedText: string;
  translatedText: string;
  targetLang: string;
}

const SpeechTranslator: React.FC = () => {
  const [state, setState] = useState<TranslatorState>({
    recognizedText: "Waiting for speech...",
    translatedText: "",
    targetLang: "en",
  });

  // Speech recognition instance
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.lang = "auto";
      rec.interimResults = false;
      rec.onresult = handleSpeechResult;
      rec.onerror = handleSpeechError;
      setRecognition(rec);
    } else {
      console.error("Speech recognition not supported in this browser");
    }
  }, []);

  // Handle speech recognition result
  const handleSpeechResult = async (event: SpeechRecognitionEvent) => {
    const spokenText = event.results[0][0].transcript;
    setState((prevState) => ({ ...prevState, recognizedText: spokenText }));

    try {
      const translation = await translateText(spokenText, state.targetLang);
      setState((prevState) => ({ ...prevState, translatedText: translation }));
    } catch (error) {
      console.error("Translation Error:", error);
      setState((prevState) => ({ ...prevState, translatedText: "Translation failed." }));
    }
  };

  // Handle speech recognition errors
  const handleSpeechError = (event: SpeechRecognitionErrorEvent) => {
    console.error("Speech Recognition Error:", event.error);
    setState((prevState) => ({
      ...prevState,
      recognizedText: `Error: ${event.error}. Please try again.`,
    }));
  };

  // Function to start speech recognition
  const startListening = () => {
    if (recognition) {
      recognition.start();
    } else {
      setState((prevState) => ({
        ...prevState,
        recognizedText: "Speech recognition not supported in this browser",
      }));
    }
  };

  // Function to translate text
  const translateText = async (text: string, targetLang: string): Promise<string> => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data[0][0][0];
    } catch (error) {
      console.error("Translation Error:", error);
      throw error;
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#f4f4f4" }}>
      <h2>Live Speech Translator</h2>
      <button onClick={startListening} disabled={!recognition} style={{ margin: "10px" }}>
        🎤 Start Listening
      </button>
      <br />
      <label htmlFor="targetLang">Translate to: </label>
      <select
        id="targetLang"
        value={state.targetLang}
        onChange={(e) => setState((prevState) => ({ ...prevState, targetLang: e.target.value }))}
        style={{ margin: "10px" }}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="hi">Hindi</option>
        <option value="zh-CN">Chinese</option>
      </select>
      <h3>Recognized Speech:</h3>
      <div
        style={{
          fontSize: "18px",
          marginTop: "20px",
          padding: "10px",
          background: "white",
          border: "1px solid #ccc",
          display: "inline-block",
          minWidth: "300px",
        }}
      >
        <div>
          <b>Recognized:</b> {state.recognizedText}
        </div>
        <div>
          <b>Translated:</b> {state.translatedText}
        </div>
      </div>
    </div>
  );
};

export default SpeechTranslator;