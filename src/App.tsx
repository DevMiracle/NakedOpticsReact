import React from "react";
import "./App.scss";
import  Header  from "./shared/Header/Header";
import Footer from './shared/Footer/Footer'
import TopNotification from "./shared/TopNotification/TopNotification";

function App() {
  return (
    <>
    <TopNotification />
    <Header />
    <Footer />
    </>
  );
}

export default App;
