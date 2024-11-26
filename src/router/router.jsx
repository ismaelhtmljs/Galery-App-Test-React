import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Header from "../components/header";
import Images from "../pages/images";
import Home from "../pages/home";
import CopyRight from "../pages/copyright";

function Index() {
    return (
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/images" element={<Images />} />
                    <Route path="/copyright" element={<CopyRight />} />
                </Routes>
        </>
    );
}

export default Index;
