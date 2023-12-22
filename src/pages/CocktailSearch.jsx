import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

export default function CoctailSearch() {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmitSearch(event) {
        event.preventDefault();

        if (searchTerm.trim()) {
            navigate(`/cocktails/search/${searchTerm}`);
        } else {
            navigate('/cocktails');
        }
    };

    function onChangeSearch(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <form onSubmit={handleSubmitSearch}>

            <TextField
                label={t('filters.search')}
                variant='outlined'
                fullWidth
                onChange={onChangeSearch}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="submit">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />

        </form>
    );
}
