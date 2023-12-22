import { Box, Typography } from "@mui/material";

export default function HomePage() {

  return (
    <Box display='flex' justifyContent='center' sx={{ p: 8, mt: 8 }} >
      <Typography variant='h1'>Welcome to The Cocktail DB!</Typography>
    </Box>
  );
}