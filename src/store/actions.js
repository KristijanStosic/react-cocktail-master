import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { extractErrorMessage } from '../util/errorMessage.js';

let ENV = import.meta.env;

const baseUrl = ENV.VITE_BASE_URL;
const searchUrl = ENV.VITE_SEARCH_URL;
const filterByGlass = ENV.VITE_FILTER_BY_GLASS_URL;
const filterByIngredient = ENV.VITE_FILTER_BY_INGREDIENT_URL;
const filterByCategory = ENV.VITE_FILTER_BY_CATEGORY_URL;
const firstLetterUrl = ENV.VITE_FIRST_LETTER_URL;

const cocktailUrl = ENV.VITE_COCKTAIL_URL;
const categoryUrl = ENV.VITE_CATEGORY_URL;
const glassUrl = ENV.VITE_GLASS_URL;
const ingredientsUrl = ENV.VITE_INGREDIENTS_URL;
const ingredientUrl = ENV.VITE_INGREDIENT_URL;
const typeUrl = ENV.VITE_TYPE_URL;

export const fetchCocktails = createAsyncThunk(
  "cocktail/getAll",
  async ({ searchTerm, firstLetter, glass, category, ingredient, type }, thunkAPI) => {
    try {
      let endpoint;

      if (searchTerm) {
        endpoint = searchUrl + '=' + searchTerm;
      } else if (firstLetter) {
        endpoint = firstLetterUrl + '=' + firstLetter;
      } else if (glass) {
        endpoint = filterByGlass + '=' + glass;
      } else if (ingredient) {
        endpoint = filterByIngredient + '=' + ingredient;
      } else if (category) {
        endpoint = filterByCategory + '=' + category;
      } else if (type) {
        endpoint = typeUrl + '=' + type;
      } else {
        endpoint = baseUrl;
      }

      const { data } = await axios.get(endpoint);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  },
);

export const fetchSingleCocktail = createAsyncThunk(
  "cocktail/getSingle",
  async (cocktailId, thunkAPI) => {
    try {
      const { data } = await axios.get(cocktailUrl + cocktailId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  },
);

export const fetchCategories = createAsyncThunk(
  "category/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(categoryUrl);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  },
);

export const fetchGlasses = createAsyncThunk(
  "glasses/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(glassUrl);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  },
);

export const fetchIngredients = createAsyncThunk(
  "ingredients/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(ingredientsUrl);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  },
);

export const fetchSingleIngredient = createAsyncThunk(
  "ingredients/getSIngleIngredinet",
  async (ingredient, thunkAPI) => {
    try {
      const { data } = await axios.get(ingredientUrl + ingredient);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  },
);