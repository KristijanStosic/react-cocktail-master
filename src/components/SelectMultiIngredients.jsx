import { useEffect, useState } from 'react';
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    FormControlLabel,
    Checkbox,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredCocktails, toggleSelectedIngredient } from '../store/slice.js';
import { useNavigate } from 'react-router-dom';
import { fetchIngredients } from '../store/actions.js';

export default function SelectMultiIngredients({ label }) {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { selectedIngredients, cocktails, ingredients } = useSelector((state) => state.cocktail);

    const [openIngredient, setOpenIngredient] = useState(false);

    const handleExpandIngredientMenu = () => {
        setOpenIngredient((prevState) => !prevState);
    };

    const handleToggleIngredient = (selectedIngredient) => {
        dispatch(toggleSelectedIngredient(selectedIngredient));
    };

    const handleApplySelection = () => {
        let filteredCocktails = cocktails.filter(cocktail => {
            return selectedIngredients.includes(cocktail.strIngredient1) ||
                selectedIngredients.includes(cocktail.strIngredient2) ||
                selectedIngredients.includes(cocktail.strIngredient3) ||
                selectedIngredients.includes(cocktail.stringredient4) ||
                selectedIngredients.includes(cocktail.stringredient5) ||
                selectedIngredients.includes(cocktail.stringredient6);
        });

        dispatch(setFilteredCocktails(filteredCocktails));

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        navigate('/cocktails/filter-by-multi-ingredients');
    };

    useEffect(() => {
        dispatch(fetchIngredients());
    }, [dispatch]);

    return (
        <>
            <ListItemButton onClick={handleExpandIngredientMenu}>
                <ListItemIcon>
                    <LocalBarIcon />
                </ListItemIcon>
                <ListItemText primary={label} />
                {openIngredient ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openIngredient} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {ingredients.map((ingredient, index) => (
                        <ListItemButton sx={{ pl: 4 }} key={index}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={selectedIngredients.includes(ingredient.strIngredient1)}
                                        onChange={() => handleToggleIngredient(ingredient.strIngredient1)}
                                    />
                                }
                                label={ingredient.strIngredient1}
                            />
                        </ListItemButton>
                    ))}
                    <ListItemButton onClick={handleApplySelection}>
                        <ListItemText primary="Apply" />
                    </ListItemButton>
                </List>
            </Collapse>
        </>
    );
}
