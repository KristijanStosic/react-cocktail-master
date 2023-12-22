import { Link } from "react-router-dom";

import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { indigoColor } from "../util/colors.js";

import AddToFavouriteButton from "../components/AddToFavouriteButton.jsx";

export default function CocktailCard({ cocktail }) {
    return (
        <Card>
            <CardHeader
                title={cocktail.strDrink}
                titleTypographyProps={{
                    sx: { fontSize: '16px', fontWeight: 'bold', color: indigoColor }
                }}
            />

            <Link to={`/cocktail/${cocktail.idDrink}`}>
                <CardMedia
                    sx={{ height: 200, backgroundSize: 'cover', objectFit: 'cover' }}
                    image={`${cocktail.strDrinkThumb}/preview`}
                    title={cocktail.strDrink}
                />
            </Link>

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {cocktail.strCategory ?  `Category: ${cocktail.strCategory}` : ''}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {cocktail.strAlcoholic ?  `Type: ${cocktail.strAlcoholic}` : ''}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {cocktail.strGlass ?  `Glass: ${cocktail.strGlass}` : ''}
                </Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button sx={{ color: indigoColor }} component={Link} to={`/cocktail/${cocktail.idDrink}`} size="small">
                    View Details
                </Button>
                
                <AddToFavouriteButton cocktail={cocktail} />
            </CardActions>
        </Card>
    );
}