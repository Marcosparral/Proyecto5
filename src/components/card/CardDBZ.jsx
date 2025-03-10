export const CardDBZ = ({name, power, image}) => {
    return (
        <div className='card-DBZ'>
            <div className="card-DBZ_header">
                <img src={image} alt={name}/>
                <h3>{name}</h3>
                <p>{power}</p>
            </div>
        </div>
    )
}