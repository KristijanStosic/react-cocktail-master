import { useSelector } from 'react-redux';

import { Grid, Typography, Box } from "@mui/material";

import CocktailCard from "./CocktailCard.jsx";

export default function MyFavouritesCocktails() {
  const { favouriteCocktails } = useSelector((state) => state.cocktail);

  return (
    <>
      {favouriteCocktails.length === 0 ? (
        <Box sx={{ height: '100%' }}>
          <Typography>
            You didn't add any cocktail to your favourite. Go and check all cocktails and add one of your choice
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