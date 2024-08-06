import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Tasks } from "./pages/tasks";
import { Rating } from "./pages/rating";
import "./style.css"
import { Scan } from "./pages/scan";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="tasks" element={<Tasks />} />
          <Route path="rating" element={<Rating />} />
          <Route path="scan" element={<Scan />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
