import './Header.css'

export const Navbar = () => {
    return (
        <header className='container-header'>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <a className="navbar-brand" href="/character">Characters</a>
                </div>
            </nav>
        </header>
    )
};