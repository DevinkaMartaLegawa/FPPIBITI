function Header(props){
    const {Title} =props;
    return(
        <header>
            <h1>Selamat Datang di {Title}</h1>
        </header>
    )
}

export default Header;