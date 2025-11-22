import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Index = () => {
  const sections = [
    {
      title: "Фитнес-центр",
      description: "Тренажёры, групповые занятия, персональные тренировки",
      icon: "Dumbbell",
      link: "/fitness",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "SPA-салон",
      description: "Массаж, уход за лицом, спа-процедуры",
      icon: "Sparkles",
      link: "/spa",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Бронирования",
      description: "Управление бронированиями номеров и столиков",
      icon: "Calendar",
      link: "/bookings",
      gradient: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Lime Hotels & Restaurants
          </h1>
          <p className="text-2xl text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Ваш премиальный отель с полным сервисом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sections.map((section, idx) => (
            <Link key={idx} to={section.link} className="block animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <Card className="h-full hover-scale transition-all hover:shadow-2xl cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${section.gradient} rounded-2xl flex items-center justify-center transform transition-transform hover:rotate-6`}>
                    <Icon name={section.icon} size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className={`inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r ${section.gradient} text-white rounded-lg font-semibold`}>
                    Перейти
                    <Icon name="ArrowRight" size={18} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;