import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const App = () => {
  return (
    <div>
      <SignUp />;
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
