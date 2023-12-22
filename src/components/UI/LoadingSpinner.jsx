import { CircularProgress, Box } from '@mui/material';

export default function CircularIndeterminate() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                height: "100vh",
                marginTop: '144px'
            }}
        >
            <CircularProgress size={72} color='primary' />
        </Box>
    );
}