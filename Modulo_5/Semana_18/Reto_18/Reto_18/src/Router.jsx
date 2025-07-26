import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import MovieList from "./Pages/MovieList/MovieList";
import Search from "./Pages/Search/Search";
import SingleMovie from "./Pages/MovieList/SingleMovie"; 
/* import { NotFound } from "./Pages/NotFound/NotFound";  */
import { Layout } from "./Components/Layout/Layout";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/peliculas" element={<MovieList />} />
            <Route path="/peliculas/:id" element={<SingleMovie />} />
            <Route path="/busqueda" element={<Search />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;