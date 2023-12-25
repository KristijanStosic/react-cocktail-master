import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleIngredient } from "../store/actions.js";

import { Divider, Grid, Typography } from "@mui/material";

import GoBackButton from "../components/UI/GoBackButton.jsx";
import LoadingSpinner from '../components/UI/LoadingSpinner.jsx';
import Wrapper from '../components/UI/Wrapper.jsx';

import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export default function IngredientDetails() {
    const { t } = useTranslation();

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
                        {t('ingredientDetails.title')}
                    </Typography>

                    <GoBackButton />

                    <Typography variant='h4'>
                        #{idIngredient} {strIngredient}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <Typography variant='body1' gutterBottom>
                                <strong>
                                    {t('ingredientDetails.type')}:
                                </strong>{' '}
                                {strType ?? t('ingredientDetails.detailNotAvailable')}
                            </Typography>

                            <Typography variant='body1' gutterBottom>
                                <strong>
                                    {t('ingredientDetails.alcohol')}:
                                </strong>{' '}
                                {strAlcohol ?? t('ingredientDetails.detailNotAvailable')}
                            </Typography>

                            <Typography variant='body1' gutterBottom>
                                <strong>
                                    {t('ingredientDetails.alcoholicStrength')}:
                                </strong>{' '}
                                {strABV ?? t('ingredientDetails.detailNotAvailable')}
                            </Typography>
                        </Grid>

                    </Grid>

                    <Divider sx={{ my: 2 }} />

                    <Grid item>
                        <Typography variant='body1' gutterBottom align='justify'>
                            <strong>
                                {t('ingredientDetails.description')}:
                            </strong>{' '}
                            {strDescription ?? t('ingredientDetails.detailNotAvailable')}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                    </Grid>

                </Grid>

            </Grid>
        </Wrapper>
    );
}