import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import router from './routes/router.jsx';

export default function App() {
  return (
    <main>
      <RouterProvider router={router} />
      <CssBaseline />
      <ToastContainer position='bottom-left' theme='colored' autoClose='2000' />
    </main>
  );
}