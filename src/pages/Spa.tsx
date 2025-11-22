import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Spa = () => {
  const services = [
    {
      category: "Массаж",
      icon: "Sparkles",
      description: "Профессиональный массаж для восстановления и релаксации",
      items: [
        { name: "Классический массаж", duration: "60 мин", price: "4 500" },
        { name: "Антицеллюлитный массаж", duration: "60 мин", price: "5 000" },
        { name: "Стоун-терапия", duration: "90 мин", price: "7 500" },
        { name: "Тайский массаж", duration: "120 мин", price: "9 000" },
        { name: "Спортивный массаж", duration: "60 мин", price: "5 500" }
      ]
    },
    {
      category: "Уход за лицом",
      icon: "Smile",
      description: "Профессиональная косметология и уход",
      items: [
        { name: "Классический уход", duration: "60 мин", price: "5 500" },
        { name: "Глубокое очищение", duration: "75 мин", price: "6 500" },
        { name: "Антивозрастной уход", duration: "90 мин", price: "8 500" },
        { name: "Увлажняющий комплекс", duration: "60 мин", price: "6 000" },
        { name: "Пилинг", duration: "45 мин", price: "4 500" }
      ]
    },
    {
      category: "SPA-процедуры",
      icon: "Droplets",
      description: "Расслабляющие процедуры для тела и души",
      items: [
        { name: "Финская сауна", duration: "60 мин", price: "3 000" },
        { name: "Турецкий хаммам", duration: "90 мин", price: "4 500" },
        { name: "Обертывание водорослями", duration: "90 мин", price: "7 000" },
        { name: "Шоколадное обертывание", duration: "90 мин", price: "7 500" },
        { name: "Инфракрасная сауна", duration: "45 мин", price: "2 500" }
      ]
    }
  ];

  const packages = [
    {
      name: "Релакс",
      duration: "3 часа",
      price: "15 000",
      includes: ["Хаммам", "Классический массаж", "Уход за лицом", "Чайная церемония"]
    },
    {
      name: "Антистресс",
      duration: "4 часа",
      price: "20 000",
      includes: ["Финская сауна", "Стоун-терапия", "Обертывание", "Массаж головы", "Легкий обед"]
    },
    {
      name: "Премиум",
      duration: "5 часов",
      price: "28 000",
      includes: ["Все процедуры комплекса Релакс", "Тайский массаж", "VIP-зона отдыха", "Шампанское"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            SPA-салон LIME
          </h1>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Профессиональный уход и полное расслабление
          </p>
        </div>

        {services.map((category, catIdx) => (
          <div key={catIdx} className="mb-16 animate-fade-in" style={{ animationDelay: `${catIdx * 0.1}s` }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#CDFF00]/20 flex items-center justify-center">
                <Icon name={category.icon} size={24} className="text-[#CDFF00]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {category.category}
                </h2>
                <p className="text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {category.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((service, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {service.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                      <Icon name="Clock" size={14} />
                      <span style={{ fontFamily: 'Open Sans, sans-serif' }}>{service.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {service.price}
                        </span>
                        <span className="text-lg text-[#CDFF00] font-semibold">₽</span>
                      </div>
                      <button className="px-4 py-2 bg-[#CDFF00] rounded-lg hover:bg-[#B8E600] transition-colors font-medium text-sm text-gray-900">
                        Записаться
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              SPA-комплексы
            </h2>
            <p className="text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Готовые программы со скидкой до 20%
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, idx) => (
              <Card 
                key={idx}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader className="bg-gradient-to-br from-gray-50 to-white">
                  <CardTitle className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {pkg.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                    <Icon name="Clock" size={14} />
                    <span style={{ fontFamily: 'Open Sans, sans-serif' }}>{pkg.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 mb-6">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#CDFF00] mr-2 mt-1.5"></div>
                        <span style={{ fontFamily: 'Open Sans, sans-serif' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {pkg.price}
                    </span>
                    <span className="text-xl text-[#CDFF00] font-semibold">₽</span>
                  </div>
                  <button className="w-full py-3 bg-[#CDFF00] rounded-lg hover:bg-[#B8E600] transition-colors font-semibold text-gray-900">
                    Забронировать
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg text-center max-w-3xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Часы работы SPA-салона
          </h3>
          <p className="text-lg text-gray-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Ежедневно: 10:00 - 22:00
          </p>
          <p className="text-sm text-gray-600 mt-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Запись по телефону: +7 (999) 123-45-67
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spa;
