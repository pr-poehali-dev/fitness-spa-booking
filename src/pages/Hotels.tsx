import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Hotels = () => {
  const rooms = [
    {
      id: 1,
      name: "Стандарт",
      price: "3 500",
      guests: 2,
      image: "https://cdn.poehali.dev/files/725809ef-36a8-4885-b9c8-66ae4e1158b0.png",
      description: "Уютный номер с видом на город",
      features: ["Двуспальная кровать", "Wi-Fi", "Завтрак включен", "Кондиционер"]
    },
    {
      id: 2,
      name: "Полулюкс",
      price: "5 500",
      guests: 2,
      image: "https://cdn.poehali.dev/files/725809ef-36a8-4885-b9c8-66ae4e1158b0.png",
      description: "Просторный номер повышенной комфортности",
      features: ["Кровать king-size", "Wi-Fi", "Завтрак включен", "Мини-бар", "Балкон"]
    },
    {
      id: 3,
      name: "Люкс",
      price: "9 500",
      guests: 2,
      image: "https://cdn.poehali.dev/files/725809ef-36a8-4885-b9c8-66ae4e1158b0.png",
      description: "Роскошный номер премиум-класса",
      features: ["кровать king-size", "Wi-Fi", "Завтрак включен", "Мини-бар", "Панорамный балкон", "Джакузи", "Гостиная зона"]
    },
    {
      id: 4,
      name: "Семейный стандарт",
      price: "6 500",
      guests: 4,
      image: "https://cdn.poehali.dev/files/6881a54e-946c-4340-a056-285ff910ca67.png",
      description: "Комфортный номер для семьи",
      features: ["2 спальни", "Wi-Fi", "Завтрак включен", "Гостиная зона", "Детская кроватка"]
    },
    {
      id: 5,
      name: "Семейный",
      price: "8 500",
      guests: 4,
      image: "https://cdn.poehali.dev/files/6881a54e-946c-4340-a056-285ff910ca67.png",
      description: "Большой номер для всей семьи",
      features: ["2 спальни", "Wi-Fi", "Завтрак включен", "Гостиная зона", "Кухня", "Балкон"]
    },
    {
      id: 6,
      name: "Семейный люкс",
      price: "12 500",
      guests: 6,
      image: "https://cdn.poehali.dev/files/6881a54e-946c-4340-a056-285ff910ca67.png",
      description: "Премиальный семейный номер с максимальным комфортом",
      features: ["3 спальни", "Wi-Fi", "Завтрак включен", "Большая гостиная", "Кухня", "2 балкона", "Детская игровая зона"]
    },
    {
      id: 7,
      name: "Президентский",
      price: "25 000",
      guests: 2,
      image: "https://cdn.poehali.dev/files/6881a54e-946c-4340-a056-285ff910ca67.png",
      description: "Эксклюзивный номер высшей категории",
      features: ["Кровать king-size", "Wi-Fi", "Завтрак включен", "Личный дворецкий", "Панорамные окна", "Гостиная", "Кабинет", "Джакузи", "Сауна"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Гостиницы LIME
          </h1>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Выберите идеальный номер для вашего отдыха
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, idx) => (
            <Card 
              key={room.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#CDFF00] px-4 py-2 rounded-lg">
                  <span className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {room.price} ₽<span className="text-sm font-normal">/ночь</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {room.name}
                  </h3>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Icon name="Users" size={14} />
                    {room.guests} гостя
                  </Badge>
                </div>

                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {room.description}
                </p>

                <div className="space-y-2 mb-6">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#CDFF00] mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700">
                    Подробнее
                  </button>
                  <button className="flex-1 py-2 px-4 bg-[#CDFF00] rounded-lg hover:bg-[#B8E600] transition-colors font-semibold text-gray-900">
                    Забронировать
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
