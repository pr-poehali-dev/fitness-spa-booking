import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Contacts = () => {
  const contacts = [
    {
      title: "Адрес",
      icon: "MapPin",
      content: "г. Москва, ул. Примерная, д. 123",
      iconColor: "text-[#CDFF00]"
    },
    {
      title: "Телефон",
      icon: "Phone",
      content: "+7 (999) 123-45-67",
      iconColor: "text-[#CDFF00]"
    },
    {
      title: "Email",
      icon: "Mail",
      content: "info@lime-hotels.ru",
      iconColor: "text-[#CDFF00]"
    },
    {
      title: "Часы работы",
      icon: "Clock",
      content: "Круглосуточно",
      iconColor: "text-[#CDFF00]"
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "Facebook" },
    { name: "Instagram", icon: "Instagram" },
    { name: "Twitter", icon: "Twitter" }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Контакты
          </h1>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {contacts.map((contact, idx) => (
            <Card 
              key={idx}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#CDFF00]/20 flex items-center justify-center">
                    <Icon name={contact.icon} size={20} className={contact.iconColor} />
                  </div>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {contact.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {contact.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Социальные сети
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#CDFF00] transition-all duration-300 flex items-center justify-center hover:scale-110"
                  >
                    <Icon name={social.icon} size={24} className="text-gray-700" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-16 pt-12 border-t border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                LIME
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Сеть гостиниц и ресторанов премиум-класса
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Быстрые ссылки
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Главная
                  </a>
                </li>
                <li>
                  <a href="/hotels" className="text-gray-600 hover:text-gray-900 transition-colors" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Гостиницы
                  </a>
                </li>
                <li>
                  <a href="/contacts" className="text-gray-600 hover:text-gray-900 transition-colors" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Социальные сети
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#CDFF00] transition-all duration-300 flex items-center justify-center"
                  >
                    <Icon name={social.icon} size={20} className="text-gray-700" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-300 text-center">
            <p className="text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              2024 LIME. Все права защищены.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contacts;
