import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Select, MenuItem, Button, InputLabel, FormControl, Stack } from '@mui/material';
import { indigoColor } from '../util/colors.js';

import { alphabet } from '../util/alphabet.js';
import { useTranslation } from 'react-i18next';

export default function SelectLetter() {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const [selectedLetter, setSelectedLetter] = useState('A');

    function handleChange(event) {
        setSelectedLetter(event.target.value);
    };

    function handleSearch() {
        navigate(`/cocktails/filter-by-first-letter/${selectedLetter}`);
    };

    return (
        <>
            <Stack sx={{ gap: 2 }}>

                <FormControl fullWidth>
                    <InputLabel>{t('filters.firstLetter')}</InputLabel>
                    <Select
                        sx={{ backgroundColor: 'white' }}
                        value={selectedLetter}
                        label="Letter"
                        onChange={handleChange}
                    >

                        {alphabet.map((letterObj) => (
                            Object.entries(letterObj).map(([key, value]) => (
                                <MenuItem key={key} value={value}>{value}</MenuItem>
                            ))
                        ))}

                    </Select>
                </FormControl>

                <Button
                    variant='contained'
                    sx={{ backgroundColor: indigoColor, border: 'none' }}
                    onClick={handleSearch}
                >
                    {t('filters.filterButton')}
                </Button>
                
            </Stack>
        </>
    );
}
