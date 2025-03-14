import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
        <Link className="nav-link" to="/about">Acerca de Nosotros</Link>
        <Link className="nav-link" to="/digimon">Digimons</Link>
      </div>
    </div>
  </div>
</nav>
    )
}