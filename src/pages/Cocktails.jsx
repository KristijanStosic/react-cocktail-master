import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktails, fetchGlasses, fetchCategories, fetchIngredients, fetchSingleCocktail } from "../store/actions.js";

import { Box, Grid, Paper, List, ListSubheader, Pagination } from "@mui/material";
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
import { setFilteredCocktails } from "../store/slice.js";

export default function Cocktails() {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { searchTerm, firstLetter, glass, ingredient, type, category } = useParams();

  const { filteredCocktails, cocktails, glasses, categories, ingredients, isLoading, error } = useSelector((state) => state.cocktail);

  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 6;

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = cocktails.slice(indexOfFirstResult, indexOfLastResult);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const ingredientsParams = ingredient?.split(',');

  async function checkCocktailIngredient() {
    const detailedCocktails = [];
    let requestCount = 0;

    for (const item of cocktails) {
      if (requestCount >= 10) {
        break;
      }

      try {
        const response = await dispatch(fetchSingleCocktail(item.idDrink));

        if (response.payload) {
          const cocktailDetails = response.payload.drinks[0];
          const ingredientsArray = [
            cocktailDetails.strIngredient1,
            cocktailDetails.strIngredient2,
            cocktailDetails.strIngredient3,
            cocktailDetails.strIngredient4,
            cocktailDetails.strIngredient5,
            cocktailDetails.strIngredient6,
          ];

          const ingredientsPresent = ingredientsParams.every(param => ingredientsArray.includes(param));

          if (ingredientsPresent) {
            detailedCocktails.push(cocktailDetails);
            requestCount++;
          }
        }
      } catch (error) {
        console.error("Error fetching single cocktail:", error);
      }
    }

    dispatch(setFilteredCocktails(detailedCocktails));
  }


  useEffect(() => {
    if (ingredientsParams?.length === 1) {
      dispatch(fetchCocktails({ ingredient }));
    } else if (ingredientsParams?.length > 1) {
      checkCocktailIngredient();
    } else {
      dispatch(fetchCocktails({ searchTerm, firstLetter, glass, type, category }));
    }
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
      </Grid>

      <Grid item xs={9}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <CocktailList cocktails={currentResults} />
        )}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            sx={{ mt: 3 }}
            count={Math.ceil(cocktails.length / resultsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </Grid>
    </Grid>
  );
};