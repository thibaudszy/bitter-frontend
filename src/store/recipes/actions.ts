import Axios, { AxiosResponse } from "axios";
import { apiUrl } from "../../config/constants";
import { selectToken, selectUserId } from "../user/selectors";
import { ThunkAction } from "redux-thunk";
import { AppThunk } from "../types";

import { appDoneLoading, appLoading } from "../appState/actions";
import { disconnect } from "process";

export const SET_MY_RECIPES = "SET_MY_RECIPES";
export const SET_IMPORTABLE_RECIPES = "SET_IMPORTABLE_RECIPES";
export const IMPORT_RECIPE = "IMPORT_RECIPE";

export const getUserRecipes = (): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const token = selectToken(getState());
    try {
      const userRecipesRequest: AxiosResponse = await Axios.get(
        `${apiUrl}/users/library`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const userRecipes = userRecipesRequest.data;
      //console.log("loaded recipes:", userRecipes);
      dispatch({
        type: SET_MY_RECIPES,
        payload: userRecipes,
      });
      dispatch(appDoneLoading());
    } catch (e) {
      dispatch({
        type: "SET_MESSAGE",
        payload: {
          variant: "danger",
          dismissable: true,
          text: "request failed",
        },
      });
    }
  };
};

export const getImportableRecipes = (): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const token = selectToken(getState());
    try {
      const responseFromServer: AxiosResponse = await Axios.get(
        `${apiUrl}/recipes/not-in-library`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const importableRecipes = responseFromServer.data;

      dispatch({
        type: SET_IMPORTABLE_RECIPES,
        payload: importableRecipes,
      });
      dispatch(appDoneLoading());
    } catch (e) {
      dispatch({
        type: "SET_MESSAGE",
        payload: {
          variant: "danger",
          dismissable: true,
          text: "request failed",
        },
      });
    }
  };
};

export const addRecipeToLibrary = (recipeId: number): AppThunk => {
  console.log(1);
  return async (dispatch, getState) => {
    console.log(2);
    const token = selectToken(getState());
    const serverResponse: AxiosResponse = await Axios.post(
      `${apiUrl}/libraries`,
      {
        recipeId,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (!(serverResponse.status === 200)) {
      dispatch({
        type: "SET_MESSAGE",
        payload: {
          variant: "danger",
          dismissable: true,
          text: "request failed",
        },
      });
      return;
    }
    dispatch({
      type: IMPORT_RECIPE,
      payload: recipeId,
    });
  };
};
