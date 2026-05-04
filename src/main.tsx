import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from 'react-ga4';
import App from "./App.tsx";
import "./index.css";

ReactGA.initialize('G-EXSXBXC2QD');

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);