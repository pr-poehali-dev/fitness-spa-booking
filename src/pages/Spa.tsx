import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Spa = () => {
  const services = [
    {
      category: "Массаж",
      icon: "Sparkles",
      items: [
        { name: "Классический массаж", duration: "60 мин", price: "4 500 ₽" },
        { name: "Антицеллюлитный массаж", duration: "60 мин", price: "5 000 ₽" },
        { name: "Стоун-терапия", duration: "90 мин", price: "7 500 ₽" },
        { name: "Тайский массаж", duration: "120 мин", price: "9 000 ₽" },
      ],
    },
    {
      category: "Уход за лицом",
      icon: "Smile",
      items: [
        { name: "Классический уход", duration: "60 мин", price: "5 500 ₽" },
        { name: "Глубокое очищение", duration: "75 мин", price: "6 500 ₽" },
        { name: "Антивозрастной уход", duration: "90 мин", price: "8 500 ₽" },
        { name: "Увлажняющий комплекс", duration: "60 мин", price: "6 000 ₽" },
      ],
    },
    {
      category: "SPA-процедуры",
      icon: "Droplets",
      items: [
        { name: "Финская сауна", duration: "60 мин", price: "3 000 ₽" },
        { name: "Турецкий хаммам", duration: "90 мин", price: "4 500 ₽" },
        { name: "Обертывание водорослями", duration: "90 мин", price: "7 000 ₽" },
        { name: "Шоколадное обертывание", duration: "90 мин", price: "7 500 ₽" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            SPA-салон
          </h1>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Профессиональный уход и полное расслабление
          </p>
        </div>

        <div className="space-y-12">
          {services.map((category, catIdx) => (
            <div key={catIdx} className="animate-fade-in" style={{ animationDelay: `${catIdx * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Icon name={category.icon} size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {category.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((service, idx) => (
                  <Card key={idx} className="hover-scale transition-all hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {service.name}
                      </CardTitle>
                      <CardDescription style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        <Badge variant="outline" className="mt-2">
                          <Icon name="Clock" size={14} className="mr-1" />
                          {service.duration}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold text-purple-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {service.price}
                        </div>
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all hover-scale">
                          Записаться
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl animate-fade-in">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              SPA-комплексы со скидкой до 20%
            </h3>
            <p className="text-gray-700 mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Закажите комплекс из 3-х процедур и получите специальную цену
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg rounded-lg hover:shadow-xl transition-all hover-scale">
              Узнать подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spa;