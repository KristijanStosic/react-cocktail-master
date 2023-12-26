import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktails, fetchGlasses, fetchCategories, fetchIngredients } from "../store/actions.js";

import { Box, Grid, Paper, List, ListSubheader } from "@mui/material";
import { toast } from 'react-toastify';

import LoadingSpinner from '../components/UI/LoadingSpinner.jsx';
import SelectLetter from '../components/SelectLetter.jsx';
import CocktailList from "./CocktailList.jsx";
import CocktailSearch from './CocktailSearch.jsx';
import SelectIngredient from "../components/SelectIngredient.jsx";
import SelectGlass from "../components/SelectGlass.jsx";
import SelectType from "../components/SelectType.jsx";
import SelectCategory from "../components/SelectCategory.jsx";
import { useTranslation } from "react-i18next";
import SelectMultiIngredients from "../components/SelectMultiIngredients.jsx";

export default function Cocktails() {
  const { t } = useTranslation();

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
          <List
            subheader={
              <ListSubheader>
                {t('filters.filterBy')}
              </ListSubheader>
            }
          >
            <SelectIngredient label={t('filters.ingredients')} ingredients={ingredients} />
            <SelectGlass label={t('filters.glasses')} glasses={glasses} />
            <SelectCategory label={t('filters.categories')} categories={categories} />
            <SelectType label={t('filters.type')} />
          </List>
        </Paper>

        <Paper sx={{ mb: 2 }}>
          <List
            subheader={
              <ListSubheader>
                Filter by multiple ingredients
              </ListSubheader>
            }
          >
            <SelectMultiIngredients label={t('filters.ingredients')} ingredients={ingredients} />
          </List>
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