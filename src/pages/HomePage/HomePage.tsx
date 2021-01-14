import React from "react";
import { selectToken } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import "./HomePage.css";

import MyRecipesButton from "../../components/MyRecipesButton";

import RecipeCalculatorButton from "../../components/RecipeCalculatorButton";
import ExploreRecipesButton from "../../components/ExploreRecipesButton";
import getTranslation from "../../translation";

export default function HomePage() {
  const token = useSelector(selectToken);
  return (
    <div className="background">
      <h1 className="message">
        {getTranslation("t_brew_with_confidence")}
        {token ? (
          <h1>
            {" "}
            <MyRecipesButton /> <RecipeCalculatorButton />{" "}
            <ExploreRecipesButton />{" "}
          </h1>
        ) : (
          <h1 className="log-in-message">
            {" "}
            {getTranslation("t_not_logged_in_message")}
          </h1>
        )}
      </h1>
    </div>
  );
}
