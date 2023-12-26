import { useDispatch, useSelector } from 'react-redux';

import { Grid, Paper, List, ListSubheader, Typography } from "@mui/material";

import CocktailList from "./CocktailList.jsx";
import { useTranslation } from "react-i18next";
import SelectMultiIngredients from '../components/SelectMultiIngredients.jsx';

export default function BartenderVeteran() {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const { filteredCocktails, ingredients } = useSelector((state) => state.cocktail);

    return (
        <Grid container columnSpacing={4}>
            <Grid item xs={3}>
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
                <CocktailList cocktails={filteredCocktails} />
            </Grid>

        </Grid>
    );
}