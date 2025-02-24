import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import from 'react-dom/client'
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot()
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerServiceWorker();
