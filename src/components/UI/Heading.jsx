import { Typography } from "@mui/material";

const styles = {
    textDecoration: 'none',
    color: 'white',
    typography: 'p',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
};

// eslint-disable-next-line react/prop-types
export default function Heading({ children, ...props }) {
    return (
        <Typography variant='p' sx={styles} {...props}>
            {children}
        </Typography>
    );
}