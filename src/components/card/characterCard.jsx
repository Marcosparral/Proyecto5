import './charactercard.css';


export const CharacterCard = ( character ) => {

    return (
      <>
        <div class="card-character">
          <div class="card-character_header">
            <p>
              <span>id: </span>
              {character.id}
            </p>
            <img src={character.image} alt="" class="card-header_img" />
            <h3 class="card-header_title">{character.name}</h3>
            <p>
              <span>Especie: </span>
              {character.species}
            </p>
            <p>
              <span>Status: </span>
              {character.status}
            </p>
            <p>
              <span>Type: </span>
              {character.type}
            </p>
            
          </div>
        </div>
      </>
    );
};