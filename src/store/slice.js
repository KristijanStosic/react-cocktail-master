import { createSlice } from "@reduxjs/toolkit";
import i18next from 'i18next';

import {
  fetchCategories,
  fetchCocktails,
  fetchGlasses,
  fetchIngredients,
  fetchSingleCocktail,
  fetchSingleIngredient
} from "./actions.js";

import { toast } from "react-toastify";

const existingFavouriteCocktails =
  localStorage.getItem('favouriteCocktails')
    ? JSON.parse(localStorage.getItem('favouriteCocktails'))
    : [];

const initialState = {
  favouriteCocktails: existingFavouriteCocktails,
  cocktails: [],
  categories: [],
  glasses: [],
  ingredients: [],
  selectedIngredients: [],
  filteredCocktails: [],
  singleCocktail: {},
  singleIngredient: {},
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {
    toggleFavouriteCocktail: (state, action) => {
      const cocktail = action.payload;

      const existingCocktailIndex = state.favouriteCocktails.findIndex(c => c.idDrink === cocktail.idDrink);

      if (existingCocktailIndex === -1) {
        state.favouriteCocktails.push({
          idDrink: cocktail.idDrink,
          strDrinkThumb: cocktail.strDrinkThumb,
          strDrink: cocktail.strDrink,
          strAlcoholic: cocktail.strAlcoholic,
          strCategory: cocktail.strCategory,
          strGlass: cocktail.strGlass,
          strIngredients: cocktail.ingredients,
          strMeasures: cocktail.measures,
          strInstructions: cocktail.strInstructions,
          strInstructionsES: cocktail.strInstructionsES,
          strInstructionsDE: cocktail.strInstructionsDE,
          strInstructionsFR: cocktail.strInstructionsFR,
          strInstructionsIT: cocktail.strInstructionsIT,
          strVideo: cocktail.strVideo
        });
        toast.info(`${cocktail.strDrink} ` + i18next.t('cocktailCard.addedToFavouriteMessage'));
      } else {
        state.favouriteCocktails.splice(existingCocktailIndex, 1);
        toast.info(`${cocktail.strDrink} ` + i18next.t('cocktailCard.removedFromFavouriteMessage'));
      }

      localStorage.setItem('favouriteCocktails', JSON.stringify(state.favouriteCocktails));
    },
    toggleSelectedIngredient: (state, action) => {
      const selectedIngredientIndex = state.selectedIngredients.findIndex((ingredient) => ingredient === action.payload);

      if (selectedIngredientIndex === -1) {
        state.selectedIngredients.push(action.payload);
      } else {
        state.selectedIngredients.splice(selectedIngredientIndex, 1);
      }
    },
    clearSelectedIngredients: (state) => {
      state.selectedIngredients = [];
    },
    setFilteredCocktails: (state, action) => {
      state.cocktails = action.payload;
    }
  },
  extraReducers: (builder) => {
    // COCKTAILS
    builder.addCase(fetchCocktails.pending, (state) => {
      state.isLoading = true;
    })

      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cocktails = action.payload.drinks;
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // SINGLE COCKTAIL
      .addCase(fetchSingleCocktail.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchSingleCocktail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleCocktail = action.payload.drinks[0];
      })

      .addCase(fetchSingleCocktail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // CATEGORIES
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload.drinks;
      })

      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // GLASSES
      .addCase(fetchGlasses.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchGlasses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.glasses = action.payload.drinks;
      })

      .addCase(fetchGlasses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // INGREDIENTS
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload.drinks;
      })

      .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // SINGLE Ingredient
      .addCase(fetchSingleIngredient.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchSingleIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleIngredient = action.payload.ingredients[0];
      })

      .addCase(fetchSingleIngredient.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleFavouriteCocktail, toggleSelectedIngredient, clearSelectedIngredients, setFilteredCocktails }
  = slice.actions;

export default slice.reducer;