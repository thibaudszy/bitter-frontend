import translation_brewing_terms from "./translation_brewing_terms";
import translation_general from "./translation_general";
import translation_navigation from "./translation_navigation";
import store from "../store";
const translationObjects = [
  translation_brewing_terms,
  translation_general,
  translation_navigation,
];

export default function getTranslation(
  stringToDisplay: string,
  translationObjectsIndex: number = 0,
  language?: Language
): string {
  const userLanguage = language || store.getState().user.language;
  if (translationObjectsIndex > translationObjects.length - 1)
    return stringToDisplay;

  const translatedString: string =
    translationObjects[translationObjectsIndex][userLanguage][stringToDisplay];
  return (
    translatedString ||
    getTranslation(stringToDisplay, translationObjectsIndex + 1, userLanguage)
  );
}
