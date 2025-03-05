import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import HomePage from "./HomePage";

// React app entry point
ReactDOM.createRoot(document.querySelector("#app")).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
