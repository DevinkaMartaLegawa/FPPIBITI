import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-6 justify-center">
          <li>
            <Link 
              to="/" 
              className={`px-4 py-2 rounded transition-colors ${
                isActive('/') 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/transactions" 
              className={`px-4 py-2 rounded transition-colors ${
                isActive('/transactions') 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              Transaksi
            </Link>
          </li>
          <li>
            <Link 
              to="/statistics" 
              className={`px-4 py-2 rounded transition-colors ${
                isActive('/statistics') 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              Statistik
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;