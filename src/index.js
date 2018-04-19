import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { HashRouter } from "react-router-dom";
import store from "./ducks/store.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
