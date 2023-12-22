import { useState } from 'react';
import { Link } from 'react-router-dom';

import Heading from './Heading.jsx';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const linkStyles = {
    textDecoration: 'none',
    color: '#334155',
};

export default function NavigationMenu({ label }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    };

    function handleClose() {
        setAnchorEl(null);
    };

    return (
        <>
            <Heading
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            >
                {label} {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Heading>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                sx={{ cursor: 'pointer' }}
                onClose={handleClose}
            >

                <MenuItem onClick={handleClose}>
                    <Link to='/categories' style={linkStyles}>
                        Categories
                    </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <Link to='/glasses' style={linkStyles}>
                        Glasses
                    </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <Link to='/ingredients' style={linkStyles}>
                        Ingredients
                    </Link>
                </MenuItem>
            </Menu>
        </>
    );
}