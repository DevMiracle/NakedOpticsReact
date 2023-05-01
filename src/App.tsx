import React from "react";
import "./App.scss";
import Header  from "./shared/Header/Header";
import Footer from './shared/Footer/Footer'
import TopNotification from "./shared/TopNotification/TopNotification";
import NewsLetter from "./shared/NewsLetter/NewsLetter";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <TopNotification />
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="login" element={<LoginPage/>} />
      </Routes>
    </main>
    <NewsLetter />
    <Footer />
    </>
  );
}

export default App;
