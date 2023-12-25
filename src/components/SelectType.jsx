import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, RadioGroup, Radio, FormControlLabel } from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LiquorIcon from '@mui/icons-material/Liquor';
import { useTranslation } from 'react-i18next';

export default function SelectType({ label }) {
    const { t } = useTranslation(); 
    
    const navigate = useNavigate();

    const [selectedType, setSelectedType] = useState('');

    const [openType, setOpenType] = useState(false);

    function handleExpandTypeMenu() {
        setOpenType((prevState) => !prevState);
    };

    function handleSelectType(event) {
        setSelectedType(event.target.value);
    }

    function handleRadioClickType(type) {
        navigate(`/cocktails/filter-by-type/${type}`);
    }

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton onClick={handleExpandTypeMenu}>

                <ListItemIcon>
                    <LiquorIcon />
                </ListItemIcon>

                <ListItemText primary={label} />
                {openType ? <ExpandLess /> : <ExpandMore />}

            </ListItemButton>

            <Collapse in={openType} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>

                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={selectedType}
                        onChange={handleSelectType}
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <FormControlLabel
                                value='Alcoholic'
                                control={<Radio />}
                                label='Alcoholic'
                                onClick={() => handleRadioClickType('Alcoholic')}
                            />
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 4 }}>
                            <FormControlLabel
                                value='Non alcoholic'
                                control={<Radio />}
                                label='Non alcoholic'
                                onClick={() => handleRadioClickType('Non alcoholic')}
                            />
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 4 }}>
                            <FormControlLabel
                                value='Optional alcohol'
                                control={<Radio />}
                                label='Optional alcohol'
                                onClick={() => handleRadioClickType('Optional alcohol')}
                            />
                        </ListItemButton>
                        
                    </RadioGroup>
                </List>
            </Collapse>
        </List>
    );
}