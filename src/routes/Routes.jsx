import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { CharacterList } from "../pages/Characters";
import { Navbar } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";


export const AppRouter = () => {
    return (
        <>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/character" element={<CharacterList />} />
            </Routes>
         <Footer />
        </>
    )
}