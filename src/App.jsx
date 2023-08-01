import React from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./components/Home";

const App = () => <Home></Home>;

const globalApp = document.getElementById("app");

const root = createRoot(globalApp);

root.render(<App />);

export default App;
