import './header.css'

export const Header = ({title, subtitle}) => {
    return (
        <header>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <img src="wallpaper_rick_and_mortis.jpeg" alt="Wallpaper" />
        </header>
    )
};