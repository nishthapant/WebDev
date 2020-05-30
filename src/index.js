import React from "react";
import ReactDOM from "react-dom";
import * as Auth from "./views/authentication";

const App = () => {
  return (
    <div>
      <Auth.SignIn />;
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
