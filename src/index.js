import React from "react";
import ReactDOM from "react-dom";
import * as Auth from "./views/authentication";
import * as Dash from "./views/dashboard";
import * as oldDash from "./views/oldDashboard";

const App = () => {
  return (
    <div>
      <Auth.SignUp />;
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
