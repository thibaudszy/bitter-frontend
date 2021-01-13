import getTranslation from ".";
import translation_brewing_terms from "./translation_brewing_terms";
import translation_general from "./translation_general";
import translation_navigation from "./translation_navigation";

describe("testing the get translation function", () => {
  describe("When given a valid variable to translate to English", () => {
    test("Should return the correct translation", () => {
      expect(getTranslation("t_import_recipe")).toEqual(
        translation_navigation["En-GB"]["t_import_recipe"]
      );
      expect(getTranslation("LogInPageTitle")).toEqual(
        translation_general["En-GB"]["LogInPageTitle"]
      );
      expect(getTranslation("t_enter_your_brewlength")).toEqual(
        translation_brewing_terms["En-GB"]["t_enter_your_brewlength"]
      );
    });
  });
  describe("When given a valid variable to translate to French", () => {
    test("Should return the correct translation", () => {
      expect(getTranslation("t_import_recipe", 0, "Fr-FR")).toEqual(
        translation_navigation["Fr-FR"]["t_import_recipe"]
      );
      expect(getTranslation("LogInPageTitle", 0, "Fr-FR")).toEqual(
        translation_general["Fr-FR"]["LogInPageTitle"]
      );
      expect(getTranslation("t_enter_your_brewlength", 0, "Fr-FR")).toEqual(
        translation_brewing_terms["Fr-FR"]["t_enter_your_brewlength"]
      );
    });
  });
  describe("When given an invalid variable to translate to English", () => {
    test("Should return the correct translation", () => {
      expect(getTranslation("t_xyz")).toEqual("t_xyz");
    });
  });
});
