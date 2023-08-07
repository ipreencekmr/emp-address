import React from "react";
import PropTypes from "prop-types";
import { createRoot } from "react-dom/client";
import { Home } from "./components/Home";

const App = ({ formDispatch }) => <Home formDispatch={ formDispatch }></Home>;

const globalApp = document.getElementById("app");

const root = createRoot(globalApp);

root.render(<App formDispatch={ () => {} }/>);

App.propTypes = {
    formDispatch: PropTypes.func.isRequired 
};

App.defaultProps = {
    formDispatch: () => {}
};

export default App;
