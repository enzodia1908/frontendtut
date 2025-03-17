import { useState } from "react";
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import Favourites from "./pages/Favourites";
import NavBar from "./components/NavBar";

function App() {
    return (
        <MovieProvider>
            <NavBar />

            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favourites" element={<Favourites />} />
                </Routes>
            </main>
        </MovieProvider>
    );
}

export default App;
