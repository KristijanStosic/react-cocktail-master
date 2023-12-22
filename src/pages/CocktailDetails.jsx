import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../store/actions.js";

import { Divider, Grid, Typography, Stack } from "@mui/material";

import AddToFavouriteButton from "../components/AddToFavouriteButton.jsx";
import GoBackButton from "../components/UI/GoBackButton.jsx";
import LoadingSpinner from '../components/UI/LoadingSpinner.jsx';
import VideoPlayer from "../components/VideoPlayer.jsx";
import Wrapper from '../components/UI/Wrapper.jsx';

import { toast } from "react-toastify";

export default function CocktailDetails() {
  const dispatch = useDispatch();

  const { cocktailId } = useParams();

  const { singleCocktail, isLoading, error } = useSelector((state) => state.cocktail);

  useEffect(() => {
    dispatch(fetchSingleCocktail(cocktailId));
  }, [dispatch, cocktailId]);

  const {
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strCategory,
    strGlass,
    strIBA,
    strInstructions,
    strInstructionsES,
    strInstructionsFR,
    strInstructionsDE,
    strInstructionsIT,
    strVideo,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6
  } = singleCocktail;

  const measures = [
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6
  ];

  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];

  const newCocktail = {
    ...singleCocktail,
    ingredients,
    measures
  };

  if (isLoading) return <LoadingSpinner />;

  if (error) return toast.error(error?.error?.message);

  return (
    <Wrapper>
      <Grid container spacing={6}>

        {/* 1st GRID ITEM */}
        <Grid item xs={6}>
          <GoBackButton />
          <img src={strDrinkThumb} alt={strDrink} style={{ width: '100%', borderRadius: '15px' }} />
          <Grid item xs={12} mt={2}>
            {strVideo ?
              <div>
                <Typography variant='h5' gutterBottom>
                  Video Instructions
                </Typography>
                <VideoPlayer source={strVideo} />
              </div>
              :
              <Typography variant='h5' gutterBottom>
                <strong>Video instructions not available</strong>
              </Typography>
            }
          </Grid>
        </Grid>

        {/* 2nd GRID ITEM */}
        <Grid item xs={6}>
          
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >

            <Typography variant='h4'>
              {strDrink}
            </Typography>

            <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant='body2' sx={{ fontWeight: 500 }}>
                Add to my favourites
              </Typography>
              <AddToFavouriteButton cocktail={newCocktail} />
            </Stack>

          </Stack>

          <Typography variant='body1' mt={1}>
            {strIBA ? `IBA: ${strIBA}` : null}
          </Typography>

          <Divider sx={{ my: 2 }} />
          {/* INNER GRID CONTAINER */}
          <Grid container spacing={2}>
            {/* INNER GRID ITEM */}
            <Grid item xs={6}>
              <Typography variant='body1' gutterBottom>
                <strong>Name:</strong> {strDrink}
              </Typography>

              <Typography variant='body1' gutterBottom>
                <strong>Category:</strong> {strCategory}
              </Typography>
            </Grid>

            {/* DIVIDER */}
            <Divider sx={{ mt: 1, }} />
            {/* DIVIDER */}

            {/* INNER GRID ITEM */}
            <Grid item xs={6}>
              <Typography variant='body1' gutterBottom>
                <strong>Type:</strong> {strAlcoholic}
              </Typography>

              <Typography variant='body1' gutterBottom>
                <strong>Glass:</strong> {strGlass}
              </Typography>
            </Grid>
          </Grid>

          {/* DIVIDER */}
          <Divider sx={{ my: 2 }} />
          {/* DIVIDER */}

          {/* INNER GRID CONTAINER */}
          <Grid container spacing={2}>
            {/* INNER GRID ITEM */}
            <Grid item xs={6}>
              <Typography variant='body1'>
                <strong>Ingredients: </strong>
              </Typography>
              {ingredients.map((ingredient, index) => (
                <Typography variant='body2' key={index}>
                  {ingredient}
                </Typography>
              ))}
            </Grid>

            <Grid item xs={6}>
              <Typography variant='body1'>
                <strong>Measures: </strong>
              </Typography>
              {measures.map((measure, index) => (
                <Typography variant='body2' key={index}>
                  {measure}
                </Typography>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />

            <Typography variant='body1' gutterBottom align='justify'>
              <strong>Instructions (EN):</strong> {strInstructions}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant='body1' gutterBottom align='justify'>
              <strong>Instructions (ES):</strong> {strInstructionsES ?? 'Not available'}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant='body1' gutterBottom align='justify'>
              <strong>Instructions (DE):</strong> {strInstructionsDE ?? 'Not available'}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant='body1' gutterBottom align='justify'>
              <strong>Instructions (FR):</strong> {strInstructionsFR ?? 'Not available'}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant='body1' gutterBottom align='justify'>
              <strong>Instructions (IT):</strong> {strInstructionsIT ?? 'Not available'}
            </Typography>
          </Grid>

        </Grid>

      </Grid>
    </Wrapper>
  );
}