import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { CharacterList } from "../pages/Characters";
import { Navbar } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { SearchPage } from "../pages/Searchpages";

import '../styles/layoult.css'


export const AppRouter = () => {
    return (
        <>
        <div className="app-container">
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/character" element={<CharacterList />} />
                </Routes>
            <Footer />
        </div>
        </>
    )
}