import { useSelector } from 'react-redux';

import { Grid, Typography, Box } from "@mui/material";

import CocktailCard from "./CocktailCard.jsx";
import { useTranslation } from 'react-i18next';

export default function MyFavouritesCocktails() {
  const { t } = useTranslation();

  const { favouriteCocktails } = useSelector((state) => state.cocktail);

  return (
    <>
      {favouriteCocktails.length === 0 ? (
        <Box sx={{ height: '100%' }}>
          <Typography variant='h6' sx={{ textAlign: 'center', mt: 4}}>
           {t('myFavouriteCocktails.myFavouritesCocktailsNotAvailable')}
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={4}>

          {favouriteCocktails.map((cocktail) => (
            <Grid item key={cocktail.idDrink} xs={3}>
              <CocktailCard cocktail={cocktail} />
            </Grid>
          ))}
          
        </Grid>
      )}
    </>
  );
}