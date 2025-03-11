import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="nav-container">
            <ul>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/about'}>Sobre Nosotros</Link>
                <Link to={'/digimon'}>Personajes</Link>
            </ul>
        </nav>
    )
}