import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block bg-[#CDFF00] px-8 py-4 mb-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              LIME
            </h2>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#CDFF00]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Добро пожаловать в LIME
          </h1>
          
          <p className="text-xl text-gray-600 mb-12" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Выберите, что вас интересует
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Link 
            to="/hotels" 
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative h-80">
              <img 
                src="https://cdn.poehali.dev/files/b5467ff7-8a4e-4bd3-bc37-b751538424e9.png"
                alt="Гостиницы"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Hotel" size={32} className="text-[#CDFF00]" />
                  <h3 className="text-3xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Гостиницы
                  </h3>
                </div>
                <p className="text-lg opacity-90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Комфортное размещение для вашего отдыха
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 text-center">
              <button className="w-full py-3 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                Выбрать гостиницу
                <Icon name="ArrowRight" size={18} />
              </button>
            </div>
          </Link>

          <Link 
            to="/restaurant" 
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative h-80">
              <img 
                src="https://cdn.poehali.dev/files/b5467ff7-8a4e-4bd3-bc37-b751538424e9.png"
                alt="Ресторан"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="UtensilsCrossed" size={32} className="text-[#CDFF00]" />
                  <h3 className="text-3xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Ресторан
                  </h3>
                </div>
                <p className="text-lg opacity-90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Изысканная кухня и уютная атмосфера
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 text-center">
              <button className="w-full py-3 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                Перейти в ресторан
                <Icon name="ArrowRight" size={18} />
              </button>
            </div>
          </Link>
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-gray-600 mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Или изучите весь комплекс услуг на{' '}
            <Link to="/about" className="text-[#CDFF00] hover:underline font-semibold">
              главной странице
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
