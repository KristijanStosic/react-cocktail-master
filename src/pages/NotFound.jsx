import { Box, Typography } from '@mui/material';
import GoBackButton from '../components/UI/GoBackButton.jsx';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap={3}
      sx={{ p: 4, mt: 4 }}
    >
      <Typography variant='h1'>{t('notFound.title')}</Typography>
      <Typography variant='p'>{t('notFound.text')}</Typography>
      <Typography variant='p'>
        <GoBackButton />
      </Typography>
    </Box>
  );
}