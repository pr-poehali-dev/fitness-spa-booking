import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Fitness = () => {
  const services = [
    {
      title: "Тренажёрный зал",
      description: "Современное оборудование последнего поколения",
      features: [
        "Беговые дорожки - 8 шт",
        "Велотренажёры - 6 шт",
        "Силовые тренажёры - 15 шт",
        "Зона свободных весов",
        "Кардио-зона"
      ]
    },
    {
      title: "Групповые занятия",
      description: "Разнообразные программы с профессиональными тренерами",
      features: [
        "Йога - ежедневно в 07:00 и 19:00",
        "Пилатес - вт, чт, сб в 11:00",
        "CrossFit - пн, ср, пт в 18:00",
        "Стретчинг - ежедневно в 20:00",
        "Силовой тренинг - пн, ср, пт в 09:00"
      ]
    },
    {
      title: "Персональные тренировки",
      description: "Индивидуальный подход и программа тренировок",
      features: [
        "Составление личной программы",
        "Консультация по питанию",
        "Контроль прогресса",
        "Гибкий график занятий",
        "Опытные сертифицированные тренеры"
      ]
    }
  ];

  const pricing = [
    { name: "Разовое посещение", price: "1 500", period: "/день" },
    { name: "Абонемент 8 занятий", price: "9 600", period: "/месяц" },
    { name: "Безлимит 1 месяц", price: "12 000", period: "/месяц" },
    { name: "Безлимит 3 месяца", price: "30 000", period: "/3 мес" },
    { name: "Персональная тренировка", price: "3 500", period: "/занятие" },
    { name: "Сплит-тренировка (2 чел)", price: "5 000", period: "/занятие" }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Фитнес-центр LIME
          </h1>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Современное оборудование и профессиональные тренеры
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#CDFF00] mr-2 mt-1.5"></div>
                        <span style={{ fontFamily: 'Open Sans, sans-serif' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Стоимость услуг
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((item, idx) => (
              <Card 
                key={idx}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {item.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {item.price}
                    </span>
                    <span className="text-lg text-[#CDFF00] font-semibold">₽</span>
                    <span className="text-sm text-gray-600 ml-1" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {item.period}
                    </span>
                  </div>
                  <button className="w-full mt-4 py-2 px-4 bg-[#CDFF00] rounded-lg hover:bg-[#B8E600] transition-colors font-semibold text-gray-900">
                    Купить
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg text-center max-w-3xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Часы работы
          </h3>
          <p className="text-lg text-gray-700 mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Понедельник - Пятница: 06:00 - 23:00
          </p>
          <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Суббота - Воскресенье: 08:00 - 22:00
          </p>
          <button className="px-8 py-3 bg-[#CDFF00] rounded-lg hover:bg-[#B8E600] transition-colors font-semibold text-gray-900">
            Записаться на пробное занятие
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
