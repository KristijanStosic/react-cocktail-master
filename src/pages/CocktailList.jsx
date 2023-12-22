import { Grid } from "@mui/material";

import CocktailCard from "./CocktailCard.jsx";

export default function CocktailList({ cocktails }) {

    return (
        <Grid container spacing={4}>

            {cocktails && cocktails.map((cocktail) => (
                <Grid key={cocktail.idDrink} item xs={4}>
                    <CocktailCard cocktail={cocktail} />
                </Grid>
            ))}

        </Grid>
    );
}