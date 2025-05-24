import './InfoSection.css'

export const InfoSection = ({infoTitle, generalInfo}) => {
    return (
        <div className='container-flex'>
            <div>
                <h1>{infoTitle}</h1>
            <div>
                <p>{generalInfo}</p>
            </div>
            </div>
        </div>
    )
}