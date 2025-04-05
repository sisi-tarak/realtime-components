import React from "react";
import CardWithExtend from "./Components/Cards/001";
import MediaControlCard from "./Components/Cards/003";
import DarkLogIn from "./Components/Login/002";
import SimpleLogIn from "./Components/Login/001";
import CardsWithGradient from "./Components/Cards/002";
import Services from "./Components/Services/Services";
import { TextBalloonsDemo } from "./Components/LaunchButtons/001/TextBalloonsDemo";
import { DefaultBalloonsDemo } from "./Components/LaunchButtons/002/DefaultBalloonsDemo";
import CounterDemo from "./Components/Counter/CounterDemo";
import NavbarWebortex from "./Components/Navbars/001/NavbarWebortex";
import NavbarSLPVD from "./Components/Navbars/002/NavbarSLPVD";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const AllComponents = () => {
  return (
    <>
      <div className="flex flex-wrap flex-col overflow-hidden">
        <NavbarWebortex />

        <NavbarSLPVD />

        <div className="flex justify-center items-center w-screen h-screen bg-black">
          <CounterDemo />
        </div>
        <div className="flex justify-center items-center w-screen h-screen overflow-hidden">
          <TextBalloonsDemo />
        </div>
        <div className="flex justify-center items-center w-screen h-screen overflow-hidden">
          <DefaultBalloonsDemo />
        </div>
        <div className="flex justify-center items-center w-screen h-screen">
          <CardWithExtend />
        </div>
        <div className="flex justify-center items-center w-screen h-screen">
          <MediaControlCard />
        </div>
        <div className="flex justify-center items-center w-screen h-screen">
          <SimpleLogIn />
        </div>
        <div className="flex justify-center items-center w-screen h-screen">
          <DarkLogIn />
        </div>
        <div className="flex justify-center items-center w-screen h-screen">
          <CardsWithGradient />
        </div>
        <div className="flex justify-center items-center w-screen h-screen">
          <Services />
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllComponents />} />
      </Routes>
    </Router>
  );
};

export default App;
