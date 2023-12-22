import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktails, fetchGlasses, fetchCategories, fetchIngredients } from "../store/actions.js";

import { Box, Grid, Paper } from "@mui/material";
import { toast } from 'react-toastify';

import LoadingSpinner from '../components/UI/LoadingSpinner.jsx';
import SelectLetter from '../components/SelectLetter.jsx';
import CocktailList from "./CocktailList.jsx";
import CocktailSearch from './CocktailSearch.jsx';
import SelectIngredient from "../components/SelectIngredient.jsx";
import SelectGlass from "../components/SelectGlass.jsx";
import SelectType from "../components/SelectType.jsx";
import SelectCategory from "../components/SelectCategory.jsx";

export default function Cocktails() {
  const dispatch = useDispatch();

  const { searchTerm, firstLetter, glass, ingredient, type, category } = useParams();

  const { cocktails, glasses, categories, ingredients, isLoading, error } = useSelector((state) => state.cocktail);

  useEffect(() => {
    dispatch(fetchCocktails({ searchTerm, firstLetter, glass, ingredient, type, category }));
    dispatch(fetchGlasses());
    dispatch(fetchIngredients());
    dispatch(fetchCategories());
  }, [dispatch, searchTerm, firstLetter, glass, ingredient, type, category]);

  if (error) return toast.error(error.error.message);

  return (
    <Grid container columnSpacing={4}>
      <Grid item xs={3}>
        <Paper sx={{ mb: 2 }}>
          <CocktailSearch />
        </Paper>

        <Box sx={{ mb: 2 }}>
          <SelectLetter />
        </Box>

        <Paper sx={{ mb: 2 }}>
          <SelectIngredient ingredients={ingredients} />
          <SelectGlass glasses={glasses} />
          <SelectCategory categories={categories} />
          <SelectType />
        </Paper>

      </Grid>

      <Grid item xs={9}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <CocktailList cocktails={cocktails} />
        )}
      </Grid>
      
    </Grid>
  );
}