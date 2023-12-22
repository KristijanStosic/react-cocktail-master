import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGlasses } from "../store/actions.js";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

import LoadingSpinner from '../components/UI/LoadingSpinner.jsx';

export default function Glasses() {
  const dispatch = useDispatch();

  const { glasses, isLoading, error } = useSelector((state) => state.cocktail);

  useEffect(() => {
    dispatch(fetchGlasses());
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
        Glasses
      </Typography>

      <TableContainer sx={{ width: '50%', margin: 'auto' }} component={Paper}>
        <Table>

          <TableHead>
            <TableRow>

              <TableCell sx={{ fontSize: 24 }}>#</TableCell>
              <TableCell align="right" sx={{ fontSize: 24 }}>Glass</TableCell>

            </TableRow>
          </TableHead>

          <TableBody>

            {glasses.map((category, idx) => (
              <TableRow
                key={category.strGlass}
                sx={{
                  '&:nth-of-type(even)': { backgroundColor: '#f2f2f2' }
                }}
              >

                <TableCell sx={{ fontSize: 20 }} component="th" scope="row">
                  {idx + 1}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 20 }} component="th" scope="row">
                  {category.strGlass}
                </TableCell>

              </TableRow>
            ))}

          </TableBody>

        </Table>
      </TableContainer>
    </>
  );
}