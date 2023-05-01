import React from "react";
import "./App.scss";
import  Header  from "./shared/Header/Header";
import Footer from './shared/Footer/Footer'
import TopNotification from "./shared/TopNotification/TopNotification";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewsLetter from "./shared/NewsLetter/NewsLetter";
import HomePage from "./pages/HomePage/HomePage"

function App() {
  return (
    <>
    <TopNotification />
    <Header />
    <HomePage />
    <LoginPage />
    <NewsLetter />
    <Footer />
    </>
  );
}

export default App;
