import React from "react";
import ReactDOM from "react-dom";
import * as Dash from "./views/dashboard";

import * as serviceWorker from "./serviceWorker";
import Firebase, { FirebaseContext } from "./views/dashboard/Firebase";

import "./assets/scss/material-kit-react.scss?v=1.9.0";

const App = () => {
  return (
    <div>
      <Dash.Dashboard />
    </div>
  );
};

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
