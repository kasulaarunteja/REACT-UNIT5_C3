import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";
import { BookCard } from "../Components/BookCard/BookCard";

export const AllRoutes = () => {
  return (
    <>
       <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/section/:section" element={<Section />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
