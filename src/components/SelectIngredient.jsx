import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Checkbox,
    Button,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSelectedIngredient } from '../store/slice.js';
import { indigoColor } from '../util/colors.js';

export default function SelectIngredient({ label, ingredients }) {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { selectedIngredients } = useSelector((state) => state.cocktail);

    const [openIngredient, setOpenIngredient] = useState(false);

    function handleExpandIngredientMenu() {
        setOpenIngredient((prevState) => !prevState);
    };

    const handleToggleIngredient = (selectedIngredient) => {
        dispatch(toggleSelectedIngredient(selectedIngredient));
    };

    function handleApplySelection() {
        navigate(`/cocktails/filter-by-ingredient/${selectedIngredients.join(',')}`);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

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
                            <ListItemIcon>
                                <Checkbox
                                    checked={selectedIngredients.includes(ingredient.strIngredient1)}
                                    onChange={() => handleToggleIngredient(ingredient.strIngredient1)}
                                />
                            </ListItemIcon>
                            <ListItemText primary={ingredient.strIngredient1} />
                        </ListItemButton>
                    ))}
                    <Button
                        sx={{ marginLeft: 3, color: indigoColor, }}
                        onClick={handleApplySelection}

                    >
                        Apply
                    </Button>
                </List>
            </Collapse>
        </>
    );
}
