import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleIngredient } from "../store/actions.js";

import { Divider, Grid, Typography, Stack } from "@mui/material";

import GoBackButton from "../components/UI/GoBackButton.jsx";
import LoadingSpinner from '../components/UI/LoadingSpinner.jsx';
import Wrapper from '../components/UI/Wrapper.jsx';

import { toast } from "react-toastify";

export default function IngredientDetails() {
    const dispatch = useDispatch();

    const { ingredient } = useParams();

    const { singleIngredient, isLoading, error } = useSelector((state) => state.cocktail);

    useEffect(() => {
        dispatch(fetchSingleIngredient(ingredient));
    }, [dispatch, ingredient]);

    const {
        idIngredient,
        strIngredient,
        strDescription,
        strType,
        strAlcohol,
        strABV
    } = singleIngredient;

    if (isLoading) return <LoadingSpinner />;

    if (error) return toast.error(error?.error?.message);

    return (
        <Wrapper>
            <Grid container spacing={6}>

                <Grid item xs={12}>
                    
                    <Typography variant='h4' sx={{ textAlign: 'center' }}>
                        Ingredient Details
                    </Typography>

                    <GoBackButton />

                    <Typography variant='h4'>
                        #{idIngredient} {strIngredient}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <Typography variant='body1' gutterBottom>
                                <strong>Type:</strong> {strType ?? 'Not available'}
                            </Typography>

                            <Typography variant='body1' gutterBottom>
                                <strong>Alcohol:</strong> {strAlcohol ?? 'Not available'}
                            </Typography>

                            <Typography variant='body1' gutterBottom>
                                <strong>Alcoholic strength (%):</strong> {strABV ?? 'Not available'}
                            </Typography>
                        </Grid>

                    </Grid>

                    <Divider sx={{ my: 2 }} />

                    <Grid item>
                        <Typography variant='body1' gutterBottom align='justify'>
                            <strong>Description:</strong> {strDescription ?? 'Not available'}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                    </Grid>

                </Grid>

            </Grid>
        </Wrapper>
    );
}