import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LocalBarIcon from '@mui/icons-material/LocalBar';

export default function SelectIngredient({ ingredients }) {
    const navigate = useNavigate();

    const [selectedIngredient, setSelectedIngredient] = useState('');

    const [openIngredient, setOpenIngredient] = useState(false);

    function handleExpandIngredientMenu() {
        setOpenIngredient((prevState) => !prevState);
    };

    function handleSelectIngredient(event) {
        setSelectedIngredient(event.target.value);
    }

    function handleRadioClickIngredient(ingredient) {
        navigate(`/cocktails/filter-by-ingredient/${ingredient}`);
    }

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Filter by
                </ListSubheader>
            }
        >
            <ListItemButton onClick={handleExpandIngredientMenu}>
                <ListItemIcon>
                    <LocalBarIcon />
                </ListItemIcon>

                <ListItemText primary="Ingredients" />
                {openIngredient ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openIngredient} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>

                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={selectedIngredient}
                        onChange={handleSelectIngredient}
                    >

                        {ingredients.map((ingredient, index) => (
                            <ListItemButton sx={{ pl: 4 }} key={index}>
                                <FormControlLabel
                                    value={ingredient.strIngredient1}
                                    control={<Radio />}
                                    label={ingredient.strIngredient1}
                                    onClick={() => handleRadioClickIngredient(ingredient.strIngredient1)}
                                />
                            </ListItemButton>
                        ))}
                        
                    </RadioGroup>
                </List>
            </Collapse>
        </List>
    );
}