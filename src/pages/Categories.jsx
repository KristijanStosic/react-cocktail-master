import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from "../store/actions.js";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

import LoadingSpinner from '../components/UI/LoadingSpinner.jsx';
import { useTranslation } from "react-i18next";

export default function Categories() {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { categories, isLoading, error } = useSelector((state) => state.cocktail);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (isLoading) return <LoadingSpinner />;

  if (error) return <p>{error.error.message}</p>;

  return (
    <>
      <Typography
        variant='h4'
        sx={{ textAlign: 'center', fontWeight: 'bold' }}
        mb={2}
      >
        {t('navigationMenu.categories')}
      </Typography>

      <TableContainer sx={{ width: '50%', margin: 'auto' }} component={Paper}>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell sx={{ fontSize: 24 }}>#</TableCell>
              <TableCell align="right" sx={{ fontSize: 24 }}>{t('navigationMenu.categories')}</TableCell>

            </TableRow>
          </TableHead>

          <TableBody>
            {categories.map((category, idx) => (

              <TableRow
                key={category.strCategory}
                sx={{ '&:nth-of-type(even)': { backgroundColor: '#f2f2f2' } }}
              >
                <TableCell align='left' sx={{ fontSize: 20 }} component="th" scope="row">
                  {idx + 1}
                </TableCell>

                <TableCell align="right" sx={{ fontSize: 20 }} component="th" scope="row">
                  {category.strCategory}
                </TableCell>

              </TableRow>

            ))}
          </TableBody>

        </Table>

      </TableContainer>
    </>
  );
}