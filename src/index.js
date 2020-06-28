import React from "react";
import ReactDOM from "react-dom";
import * as Auth from "./views/authentication";
import * as Dash from "./views/dashboard";
import * as oldDash from "./views/oldDashboard";

import * as serviceWorker from "./serviceWorker";
import Firebase, { FirebaseContext } from "./views/authentication/Firebase";

const App = () => {
  return (
    <div>
      <Dash.Dashboard />;
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
