import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Box display='flex' justifyContent='center' sx={{ p: 8, mt: 8 }} >
      <Typography variant='h1'>{t('home.heading')}</Typography>
    </Box>
  );
}