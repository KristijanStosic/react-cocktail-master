import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import WineBarIcon from '@mui/icons-material/WineBar';

export default function SelectGlass({ label, glasses }) {
    const navigate = useNavigate();

    const [selectedGlasses, setSelectedGlasses] = useState('');

    const [openGlasses, setOpenGlasses] = useState(false);

    function handleExpandGlassesMenu() {
        setOpenGlasses((prevState) => !prevState);
    };

    function handleSelectGlasses(event) {
        setSelectedGlasses(event.target.value);
    }

    function handleRadioClickGlasses(glasses) {
        navigate(`/cocktails/filter-by-glass/${glasses}`);
    }

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton onClick={handleExpandGlassesMenu}>

                <ListItemIcon>
                    <WineBarIcon />
                </ListItemIcon>

                <ListItemText primary={label} />
                {openGlasses ? <ExpandLess /> : <ExpandMore />}

            </ListItemButton>

            <Collapse in={openGlasses} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>

                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={selectedGlasses}
                        onChange={handleSelectGlasses}
                    >
                        {glasses.map((glass, index) => (
                            <ListItemButton sx={{ pl: 4 }} key={index}>
                                <FormControlLabel
                                    value={glass.strGlass}
                                    control={<Radio />}
                                    label={glass.strGlass}
                                    onClick={() => handleRadioClickGlasses(glass.strGlass)}
                                />
                            </ListItemButton>
                        ))}
                    </RadioGroup>
                </List>
            </Collapse>
        </List>
    );
}