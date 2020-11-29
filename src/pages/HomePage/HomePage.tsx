import React from "react";
import { selectToken, selectUserLanguage } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import translation from "./translation";

export default function HomePage() {
  const userLanguage: Language = useSelector(selectUserLanguage);
  const { t_not_logged_in_message } = translation[userLanguage];
  const token = useSelector(selectToken);
  if (!token) {
    return (
      <div>
        <h1> {t_not_logged_in_message}</h1>
      </div>
    );
  }
  return <h1> Let's get brewing </h1>;
}
