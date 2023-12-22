import { Link } from "react-router-dom";

import { AppBar, Box, Stack, Toolbar } from "@mui/material";
import { indigoColor } from "../../util/colors.js";

import Heading from "../UI/Heading.jsx";
import NavigationMenu from '../UI/NavigationMenu.jsx';
import LocalBarIcon from '@mui/icons-material/LocalBar';

const linkStyles = {
    textDecoration: 'none'
};

export default function Header() {
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
                    <LocalBarIcon sx={{ marginRight: '5px' }} />
                    <Link style={linkStyles} to='/home'>
                        <Heading>
                            Cocktails DB
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
                            Home
                        </Heading>
                    </Link>

                    <Link style={linkStyles} to='/cocktails'>
                        <Heading>
                            Cocktails
                        </Heading>
                    </Link>

                    <Link style={linkStyles} to='/my-favourites'>
                        <Heading>
                            My Favourites
                        </Heading>
                    </Link>

                    <NavigationMenu label='Menu' />
                </Stack>

            </Toolbar>
        </AppBar>
    );
}