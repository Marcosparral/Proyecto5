import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { CharacterList } from "../pages/Characters";
import { Navbar } from "../components/header/Header";


export const AppRouter = () => {
    return (
        <>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/character" element={<CharacterList />} />
            </Routes>
        </>
    )
}