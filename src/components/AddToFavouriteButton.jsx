import { useDispatch, useSelector } from "react-redux";
import { toggleFavouriteCocktail } from "../store/slice.js";

import { IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTranslation } from "react-i18next";

export default function AddToFavouriteButton({ cocktail, ...props }) {
    const { t } = useTranslation();

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
                <Tooltip title={t('cocktailCard.removeFromFavourite')}>
                    <FavoriteIcon sx={{
                        fontSize: 35,
                        color: '#ef4444'
                    }} />
                </Tooltip>
            ) : (
                <Tooltip title={t('cocktailCard.addToFavourite')}>
                    <FavoriteIcon sx={{
                        fontSize: 35,
                        color: 'inherit'
                    }} />
                </Tooltip>
            )}
        </IconButton>
    );
}