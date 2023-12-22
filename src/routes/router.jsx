import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import RootLayout from '../components/Layout/RootLayout.jsx';

import Home from '../pages/Home.jsx';
import Cocktails from '../pages/Cocktails.jsx';
import Categories from '../pages/Categories.jsx';
import Ingredients from '../pages/Ingredients.jsx';
import Glasses from '../pages/Glasses.jsx';
import CocktailDetails from '../pages/CocktailDetails.jsx';
import MyFavouritesCocktails from '../pages/MyFavouritesCocktails.jsx';
import IngredientDetails from '../pages/IngredientDetails.jsx';
import NotFound from '../pages/NotFound.jsx'

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={<Navigate to='/cocktails' />} />

        <Route element={<RootLayout />}>
            <Route path='home' element={<Home />} />

            <Route path='cocktails' element={<Cocktails />} />
            <Route path='cocktail/:cocktailId' element={<CocktailDetails />} />
            <Route path='my-favourites' element={<MyFavouritesCocktails />} />

            <Route path='cocktails/search/:searchTerm' element={<Cocktails />} />

            <Route path='cocktails/filter-by-first-letter/:firstLetter' element={<Cocktails />} />
            <Route path='cocktails/filter-by-glass/:glass' element={<Cocktails />} />
            <Route path='cocktails/filter-by-ingredient/:ingredient' element={<Cocktails />} />
            <Route path='cocktails/filter-by-category/:category' element={<Cocktails />} />
            <Route path='cocktails/filter-by-type/:type' element={<Cocktails />} />


            <Route path='glasses' element={<Glasses />} />
            <Route path='categories' element={<Categories />} />
            <Route path='ingredients' element={<Ingredients />} />
            <Route path='ingredient/:ingredient' element={<IngredientDetails />} />

            <Route path='*' element={<NotFound />} />
        </Route>
    </>
));

export default router;