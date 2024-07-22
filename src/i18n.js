import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "welcome": "Cook it!",
      "recipes": "Recipes",
      "events": "Events",
      "submit_yours": "Submit Yours",
      "meet_professionals": "Meet our Professionals",
      "cart": "Cart",
      "featured_recipes": "Featured Recipes",
      "home_chefs_reviews": "Home chefs reviews",
      "so_easy": "So easy!",
      "wish_found_earlier": "Wish I found cookit! earlier.",
      "does_not_lack_anything": "Does not lack in anything!",
      "see_more": "See more",
      "preparation_time": "Preparation Time",
      "cooking_time": "Cooking Time",
      "chilling_time": "Chilling Time",
      "servings": "Servings",
      "ingredients": "Ingredients",
      "for_the_crust": "For the Tart Crust",
      "for_the_cream": "For the Pastry Cream",
      "for_the_topping": "For the Topping",
      "submit_your_recipe": "Submit Your Recipe",
      "username": "Username",
      "member_id": "Member ID",
      "recipe": "Recipe",
      "upload_images": "Upload images",
      "upload": "Upload",
      "submit": "Submit",
      "photo_guidelines": "Photo Guidelines",
      "do": "Do's",
      "dont": "Don'ts",
      "meet_our_professionals": "Meet our Professionals",
    }
  },
  fr: {
    translation: {
      "welcome": "Cook it!",
      "recipes": "Recettes",
      "events": "Événements",
      "submit_yours": "Soumettez le vôtre",
      "meet_professionals": "Rencontrez nos professionnels",
      "cart": "Panier",
      "featured_recipes": "Recettes vedettes",
      "home_chefs_reviews": "Avis des chefs à domicile",
      "so_easy": "Tellement facile!",
      "wish_found_earlier": "J'aurais aimé trouver cookit! plus tôt.",
      "does_not_lack_anything": "Ne manque de rien!",
      "see_more": "Voir plus",
      "preparation_time": "Temps de préparation",
      "cooking_time": "Temps de cuisson",
      "chilling_time": "Temps de refroidissement",
      "servings": "Portions",
      "ingredients": "Ingrédients",
      "for_the_crust": "Pour la croûte",
      "for_the_cream": "Pour la crème pâtissière",
      "for_the_topping": "Pour la garniture",
      "submit_your_recipe": "Soumettez votre recette",
      "username": "Nom d'utilisateur",
      "member_id": "ID membre",
      "recipe": "Recette",
      "upload_images": "Télécharger des images",
      "upload": "Télécharger",
      "submit": "Soumettre",
      "photo_guidelines": "Directives pour les photos",
      "do": "À faire",
      "dont": "À ne pas faire",
      "meet_our_professionals": "Rencontrez nos professionnels",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

