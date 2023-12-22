import { useDispatch, useSelector } from "react-redux";
import { toggleFavouriteCocktail } from "../store/slice.js";

import { IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function AddToFavouriteButton({ cocktail, ...props }) {
    const dispatch = useDispatch();

    const { favouriteCocktails } = useSelector((state) => state.cocktail);

    function isCocktailFavorite(cocktailId) {
        return favouriteCocktails.some(cocktail => cocktail.idDrink === cocktailId);
    };

    const isFavourite = isCocktailFavorite(cocktail.idDrink);

    function handleFavouriteToggle() {
        dispatch(toggleFavouriteCocktail(cocktail));
    };

    return (
        <IconButton
            {...props}
            onClick={handleFavouriteToggle}
            sx={{
                '&:hover': {
                    backgroundColor: 'transparent',
                },
            }}
        >
            {isFavourite ? (
                <FavoriteIcon sx={{
                    fontSize: 35,
                    color: '#ef4444'
                }} />
            ) : (
                <FavoriteIcon sx={{
                    fontSize: 35,
                    color: 'inherit'
                }} />
            )}
        </IconButton>
    );
}