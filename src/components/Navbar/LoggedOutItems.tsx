import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import getTranslation from "../../translation";

export default function LoggedOutItems() {
  const history = useHistory();
  const loginClickHandler = () => {
    history.push("/login");
  };
  const signUpClickHandler = () => {
    history.push("/signup");
  };

  return (
    <div>
      <Button
        style={{ marginRight: "1em" }}
        onClick={() => loginClickHandler()}
      >
        {getTranslation("t_logIn")}
      </Button>
      <Button
        style={{ marginRight: "1em" }}
        onClick={() => signUpClickHandler()}
      >
        {getTranslation("t_signUp")}{" "}
      </Button>
    </div>
  );
}
