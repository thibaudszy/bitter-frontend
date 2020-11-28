import React, { useEffect } from "react";
import {
  Button,
  Card,
  Jumbotron,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import translation from "./translation";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserLanguage } from "../../store/user/selectors";

import {
  getImportableRecipes,
  getUserRecipes,
} from "../../store/recipes/actions";
import {
  selectImportableRecipes,
  selectMyRecipes,
} from "../../store/recipes/selectors";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export default function ImportRecipes() {
  const userLanguage: Language = useSelector(selectUserLanguage);
  const {
    t_explore_recipes,
    t_my_recipes,
    t_recipe_calculator,
    t_import_recipe,
    t_color,
    t_author,
    t_see_recipe,
  } = translation[userLanguage];
  const importableRecipes = useSelector(selectImportableRecipes) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImportableRecipes());
  }, [dispatch]);
  console.log("importable recipes", importableRecipes);
  return (
    <div className="my-recipes">
      <div className="buttons-row">
        <Button className="MyRecipes-buttons"> {t_recipe_calculator}</Button>
        <Button className="MyRecipes-buttons"> {t_my_recipes}</Button>
      </div>
      <Jumbotron fluid>
        <h2>{t_explore_recipes}</h2>
      </Jumbotron>
      <div style={{ display: "flex" }}>
        {importableRecipes.map((recipe: RecipeWithAuthorName) => {
          const {
            id,
            imageURL,
            name,
            ABV,
            description,
            colorInEBC,
            author,
          } = recipe;
          return <RecipeCard recipe={recipe} isInLibrary={false} />;
        })}
      </div>
    </div>
  );
}
