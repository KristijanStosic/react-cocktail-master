import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CategoryIcon from '@mui/icons-material/Category';

export default function SelectCategory({ label, categories }) {
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState('');

    const [openCategory, setOpenCategory] = useState(false);

    function handleExpandCategoryMenu() {
        setOpenCategory((prevState) => !prevState);
    };

    function handleSelectCategory(event) {
        setSelectedCategory(event.target.value);
    }

    function handleRadioClickCategory(category) {
        navigate(`/cocktails/filter-by-category/${category}`);
    }

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton onClick={handleExpandCategoryMenu}>

                <ListItemIcon>
                    <CategoryIcon />
                </ListItemIcon>

                <ListItemText primary={label} />
                {openCategory ? <ExpandLess /> : <ExpandMore />}

            </ListItemButton>

            <Collapse in={openCategory} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>

                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={selectedCategory}
                        onChange={handleSelectCategory}
                    >
                        {categories.map((category, index) => (
                            <ListItemButton sx={{ pl: 4 }} key={index}>
                                <FormControlLabel
                                    value={category.strCategory}
                                    control={<Radio />}
                                    label={category.strCategory}
                                    onClick={() => handleRadioClickCategory(category.strCategory)}
                                />
                            </ListItemButton>
                        ))}
                    </RadioGroup>
                </List>
            </Collapse>
        </List>
    );
}