import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { About } from "../pages/about/About"
import { Navbar } from "../components/navbar/Navbar"

export const AppRouter = () => {
    return (
        <>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path=
                </Routes>
       </>
    )
}