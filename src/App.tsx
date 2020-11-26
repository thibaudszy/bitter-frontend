import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import "./App.css";
import AppNavbar from "./components/Navbar/AppNavbar";
import { login } from "./store/user/actions";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      hello
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}

        {/* <Route path="/signup" component={SignUp} /> */}
        <Route path="/login" component={Login} />
        {/* <Route path="/" component={Error404} /> */}
      </Switch>
    </div>
  );
}

export default App;