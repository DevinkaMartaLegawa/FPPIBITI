function Header({ title }) {
    return (
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center">
            Selamat Datang di {title}
          </h1>
          <p className="text-center text-blue-100 mt-1">
            Aplikasi Pengelolaan Keuangan Personal
          </p>
        </div>
      </header>
    );
  }
  
  export default Header;