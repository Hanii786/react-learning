import './header.css'
function Header(){
    return(
        <header className="header__main">
            <div className="logo">
                <h1 className="logo__header">React development</h1>
            </div>
            <div className="nav_container">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">Docs</a></li>
                        <li><a href="/">Company</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;