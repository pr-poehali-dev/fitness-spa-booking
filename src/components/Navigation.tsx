import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Главная", path: "/" },
    { name: "Гостиницы", path: "/hotels" },
    { name: "Контакты", path: "/contacts" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="bg-[#CDFF00] px-6 py-2 rounded">
              <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                LIME
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium transition-colors ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <Link
            to="/"
            className="hidden md:flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Назад на главную
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
