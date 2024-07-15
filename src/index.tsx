import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const AppWrapper = () => {
  const { id } = useParams<{ id: string }>();
  return <App identificador={id || "S/N"} />;
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App identificador={"S/N"}/>} />
        <Route path="/:id" element={<AppWrapper />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
