import { Box, Typography } from '@mui/material';
import GoBackButton from '../components/UI/GoBackButton.jsx';

export default function NotFound() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap={3}
      sx={{ p: 4, mt: 4 }}
    >
      <Typography variant='h1'>404 - Page not found!</Typography>
      <Typography variant='p'>It seems that what are you looking for does not exist.</Typography>
      <Typography variant='p'>
        <GoBackButton />
      </Typography>
    </Box>
  );
}