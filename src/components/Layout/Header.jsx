import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import { indigoColor } from "../../util/colors.js";

import Heading from "../UI/Heading.jsx";
import NavigationMenu from '../UI/NavigationMenu.jsx';
import Logo from "../UI/Logo.jsx";
import { linkStyles } from "../../styles/styles.js";

export default function Header() {
    const { t, i18n } = useTranslation();

    function changeLanguage(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <AppBar position='static'>
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: indigoColor
                }}
            >
                <Box display='flex' alignItems='center' textTransform='uppercase'>
                    <Link style={linkStyles} to='/home'>
                        <Heading>
                            <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                                <Logo /> {t('logo')}
                            </Stack>
                        </Heading>
                    </Link>
                </Box>

                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 3
                    }}
                >

                    <Link style={linkStyles} to='/home'>
                        <Heading>
                            {t('header.home')}
                        </Heading>
                    </Link>

                    <Link style={linkStyles} to='/cocktails'>
                        <Heading>
                            {t('header.cocktails')}
                        </Heading>
                    </Link>

                    <Link style={linkStyles} to='/my-favourites'>
                        <Heading>
                            {t('header.myFavourites')}
                        </Heading>
                    </Link>

                    <NavigationMenu>{t('header.menu')}</NavigationMenu>

                    <Typography
                        sx={{
                            cursor: 'pointer',
                            '&:hover': { color: 'grey.500' }
                        }}
                        variant='p'
                        onClick={() => changeLanguage('en')}
                    >
                        EN
                    </Typography>
                    |
                    <Typography
                        sx={{
                            cursor: 'pointer',
                            '&:hover': { color: 'grey.500' }
                        }}
                        variant='p'
                        onClick={() => changeLanguage('srb')}
                    >
                        SRB
                    </Typography>
                </Stack>

            </Toolbar>
        </AppBar>
    );
}