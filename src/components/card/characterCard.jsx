import './characterCard.css';


export const CharacterCard = ( character ) => {

    return (
      <>
        <div class="card-character">
          <div class="card-character_header">
            <img src={character.image} alt="" class="card-header_img" />
            <h3 class="card-header_title">{character.name}</h3>
            <p>
              <span className="text-blue-600 dark:text-sky-400">ID: </span>
              {character.id}
            </p>
          </div>
        </div>
      </>
    );
};