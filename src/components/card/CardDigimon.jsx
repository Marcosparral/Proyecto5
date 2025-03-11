export const CardDigimon = ({ personaje }) => {
    return (
        <div className='card-Digimon'>
            <div className="card-Digimon_header">
                <img src={personaje.image} alt="" className="card-header_img"/>
                <h3 className="card-header_title">{personaje.name}</h3>
            </div>
        </div>
    )
}