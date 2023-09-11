import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Asegúrate de tener un archivo CSS correspondiente
import App from "./App"; // Asegúrate de tener un componente principal similar a 'App.js'
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
