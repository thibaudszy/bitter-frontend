import React from "react";
import { Button, Nav, NavDropdown } from "react-bootstrap";
import { logOut } from "../../store/user/actions";
import { useDispatch, useSelector } from "react-redux";
import translation from "./translation";
import { selectUser, selectUserLanguage } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import getTranslation from "../../translation";

export function LoggedInLinks() {
  const history = useHistory();
  return (
    <Nav>
      <Nav.Link onClick={() => history.push("/recipes")}>
        {getTranslation("t_my_recipes")}
      </Nav.Link>
      <NavDropdown
        title={getTranslation("t_new_recipes")}
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item onClick={() => history.push("/explore-recipes")}>
          {getTranslation("t_import_recipes")}
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => history.push("/recipe-calculator")}>
          {getTranslation("t_create_a_recipe")}
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}
export function LogOutButton() {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUser).email;
  const history = useHistory();
  const logOutClickHandler = () => {
    dispatch(logOut());
    history.push("/");
  };
  const userLanguage: Language = useSelector(selectUserLanguage);
  return (
    <Nav>
      <div style={{ marginRight: "1em", alignSelf: "center" }}>
        {" "}
        {userEmail}
      </div>
      <Button
        onClick={() => {
          logOutClickHandler();
        }}
      >
        {translation[userLanguage]["LogOut"]}
      </Button>
    </Nav>
  );
}
