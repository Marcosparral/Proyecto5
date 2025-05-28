import './characterCard.css';


export const CharacterCard = ( character ) => {

    return (
      <>
        <div class="card-character">
          <div class="card-character_header">
            <p>
              <span className="text-blue-600 dark:text-sky-400">id: </span>
              {character.id}
            </p>
            <img src={character.image} alt="" class="card-header_img" />
            <h3 class="card-header_title">{character.name}</h3>
            <p>
              <span className="text-blue-600 dark:text-sky-400">Especie: </span>
              {character.species}
            </p>
            <p>
              <span className="text-blue-600 dark:text-sky-400">Status: </span>
              {character.status}
            </p>
            <p>
              <span className="text-blue-600 dark:text-sky-400">Type: </span>
              {character.type}
            </p>
            
          </div>
        </div>
      </>
    );
};