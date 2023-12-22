import { Box, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { indigoColor } from '../../util/colors.js';
import { useTranslation } from 'react-i18next';

function Copyright() {
    const { t } = useTranslation();

    return (
        <Typography variant="body.2" color="white">
            {t('footer.copyrightSymbol')}
            <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>
                {t('footer.name')}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                backgroundColor: indigoColor,
                width: '100%',
                marginTop: "auto"
            }}
        >
            <Container maxWidth="sm"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Copyright />
            </Container>
        </Box>
    );
}