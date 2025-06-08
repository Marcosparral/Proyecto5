import './InfoSection.css'

export const HomePage = ({generalInfo}) => {
    return (
      <div className="home-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
          alt="Rick and Morty Logo"
          className="home-logo"
        />
        <p className="home-leyenda">
          {generalInfo}
        </p>
        <a href='/character' className="home-button">
        Explorar personajes
        </a>
        <a href='/search' className="home-button">
        Busca personajes por su nombre
        </a>
      </div>
    );
  };