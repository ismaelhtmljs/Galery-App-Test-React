import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Header from "../components/header";
import Images from "../pages/images";
import Home from "../pages/home";
import CopyRight from "../pages/copyright";
import Images_Second_Pag from "../pages/images-second-pag";

function Index() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/images" element={<Images />} />
                <Route path="/copyright" element={<CopyRight />} />
                <Route path="/images-second-pag" element={<Images_Second_Pag/>}></Route>
            </Routes>
        </>
    );
}

export default Index;
