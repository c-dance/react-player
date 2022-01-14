function Header(){
    return (
    <>
        <h1>
            <strong>React-Player</strong>
            <span>{new Date().getFullYear()}</span>
        </h1>
        <a href="#" className="menu">
            <i className="fas fa-hamburger"></i>
        </a>
    </>
    )
}

export default Header; 

