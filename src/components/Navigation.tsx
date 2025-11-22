import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Главная", path: "/", icon: "Home" },
    { name: "Фитнес", path: "/fitness", icon: "Dumbbell" },
    { name: "SPA", path: "/spa", icon: "Sparkles" },
    { name: "Бронирования", path: "/bookings", icon: "Calendar" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 hover-scale">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>L</span>
            </div>
            <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Lime Hotels
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>

        <div className="md:hidden pb-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                <Icon name={item.icon} size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
