import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Fitness = () => {
  const equipment = [
    { name: "Беговые дорожки", count: 8, icon: "Activity" },
    { name: "Велотренажёры", count: 6, icon: "Bike" },
    { name: "Силовые тренажёры", count: 15, icon: "Dumbbell" },
    { name: "Свободные веса", count: "∞", icon: "Weight" },
  ];

  const schedule = [
    { time: "07:00", name: "Утренняя йога", trainer: "Анна Смирнова", duration: "60 мин" },
    { time: "09:00", name: "Силовой тренинг", trainer: "Дмитрий Волков", duration: "45 мин" },
    { time: "11:00", name: "Пилатес", trainer: "Елена Петрова", duration: "60 мин" },
    { time: "18:00", name: "CrossFit", trainer: "Александр Козлов", duration: "90 мин" },
    { time: "19:30", name: "Стретчинг", trainer: "Анна Смирнова", duration: "45 мин" },
  ];

  const pricing = [
    { service: "Разовое посещение", price: "1 500 ₽" },
    { service: "Абонемент 8 занятий", price: "9 600 ₽" },
    { service: "Безлимит 1 месяц", price: "12 000 ₽" },
    { service: "Безлимит 3 месяца", price: "30 000 ₽" },
    { service: "Персональная тренировка", price: "3 500 ₽" },
    { service: "Сплит-тренировка (2 чел)", price: "5 000 ₽" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Фитнес-центр
          </h1>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Современное оборудование и профессиональные тренеры
          </p>
        </div>

        <Tabs defaultValue="equipment" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
            <TabsTrigger value="equipment">Оборудование</TabsTrigger>
            <TabsTrigger value="schedule">Расписание</TabsTrigger>
            <TabsTrigger value="pricing">Цены</TabsTrigger>
          </TabsList>

          <TabsContent value="equipment" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {equipment.map((item, idx) => (
                <Card key={idx} className="hover-scale transition-all hover:shadow-lg">
                  <CardHeader className="text-center pb-3">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                      <Icon name={item.icon} size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary" className="text-base px-4 py-1">
                      {item.count} {typeof item.count === 'number' ? 'шт.' : ''}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Групповые занятия
                </CardTitle>
                <CardDescription>Понедельник - Пятница</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schedule.map((session, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-center min-w-[60px]">
                          <div className="text-2xl font-bold text-emerald-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {session.time}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {session.name}
                          </h3>
                          <p className="text-sm text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            {session.trainer}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">{session.duration}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricing.map((item, idx) => (
                <Card key={idx} className="hover-scale transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {item.service}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-emerald-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {item.price}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Fitness;
