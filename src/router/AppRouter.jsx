import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Home from "../pages/Home";
import NotFound from "../pages/404";
import Services from "../pages/Servicess/page";
import Works from "../pages/Works/page";
import About from "../pages/About/page";
import Contacts from "../pages/Contacts/page";
import Product from "../pages/Product/page";





const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={'/'} element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.CONTACTS} element={<Contacts />} />
        <Route path={routes.PRODUCT} element={<Product />} />
        <Route path={routes.WORKS} element={<Works />} />
        <Route path={routes.SERVICES} element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
