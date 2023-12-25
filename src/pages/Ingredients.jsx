import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchIngredients } from "../store/actions.js";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Tooltip } from '@mui/material';
import { indigoColor } from "../util/colors.js";
import VisibilityIcon from '@mui/icons-material/Visibility';

import LoadingSpinner from '../components/UI/LoadingSpinner.jsx';
import { useTranslation } from "react-i18next";

export default function Ingredients() {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { ingredients, isLoading, error } = useSelector((state) => state.cocktail);

  useEffect(() => {
    dispatch(fetchIngredients());
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
        {t('navigationMenu.ingredients')}
      </Typography>

      <TableContainer sx={{ width: '50%', margin: 'auto' }} component={Paper}>
        <Table>

          <TableHead>

            <TableRow>
              <TableCell sx={{ fontSize: 24 }}>#</TableCell>
              <TableCell align="right" sx={{ fontSize: 24 }}>{t('navigationMenu.ingredients')}</TableCell>
              <TableCell align="right" sx={{ fontSize: 24 }}>{t('navigationMenu.ingredientDetails')}</TableCell>
            </TableRow>

          </TableHead>

          <TableBody>

            {ingredients.map((ingredient, idx) => (
              <TableRow
                key={ingredient.strIngredient1}
                sx={{ '&:nth-of-type(even)': { backgroundColor: '#f2f2f2' } }}
              >

                <TableCell sx={{ fontSize: 20 }} component="th" scope="row">
                  {idx + 1}
                </TableCell>

                <TableCell align="right" sx={{ fontSize: 20 }} component="th" scope="row">
                  {ingredient.strIngredient1}
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ fontSize: 20 }}
                  component="th"
                  scope="row"
                >
                  <Link
                    to={`/ingredient/${ingredient.strIngredient1}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <Tooltip title={t('navigationMenu.ingredientDetailsIcon')}>
                      <VisibilityIcon sx={{ color: indigoColor }} />
                    </Tooltip>
                  </Link>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </>
  );
}