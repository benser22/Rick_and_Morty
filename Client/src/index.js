import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// BrowserRouter para habilitar el enrutamiento en la aplicación
import { BrowserRouter } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store/store";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
