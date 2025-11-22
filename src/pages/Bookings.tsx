import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Bookings = () => {
  const [roomSearch, setRoomSearch] = useState("");
  const [roomFilter, setRoomFilter] = useState("all");
  const [restaurantSearch, setRestaurantSearch] = useState("");
  const [restaurantFilter, setRestaurantFilter] = useState("all");

  const roomBookings = [
    { id: "R001", guest: "Иванов Петр", room: "Люкс 305", checkIn: "22.11.2025", checkOut: "25.11.2025", status: "active", guests: 2, price: "45 000 ₽" },
    { id: "R002", guest: "Смирнова Анна", room: "Стандарт 201", checkIn: "23.11.2025", checkOut: "24.11.2025", status: "pending", guests: 1, price: "12 000 ₽" },
    { id: "R003", guest: "Козлов Дмитрий", room: "Делюкс 412", checkIn: "20.11.2025", checkOut: "22.11.2025", status: "completed", guests: 3, price: "56 000 ₽" },
    { id: "R004", guest: "Петрова Елена", room: "Стандарт 105", checkIn: "24.11.2025", checkOut: "26.11.2025", status: "active", guests: 2, price: "24 000 ₽" },
    { id: "R005", guest: "Волков Алексей", room: "Люкс 501", checkIn: "25.11.2025", checkOut: "30.11.2025", status: "pending", guests: 4, price: "75 000 ₽" },
  ];

  const restaurantBookings = [
    { id: "T001", guest: "Сидоров Иван", table: "Стол 5", date: "22.11.2025", time: "19:00", guests: 4, status: "confirmed", phone: "+7 (905) 123-45-67" },
    { id: "T002", guest: "Николаева Ольга", table: "Стол 12", date: "22.11.2025", time: "20:30", guests: 2, status: "confirmed", phone: "+7 (916) 234-56-78" },
    { id: "T003", guest: "Морозов Сергей", table: "Стол 8", date: "23.11.2025", time: "18:00", guests: 6, status: "pending", phone: "+7 (903) 345-67-89" },
    { id: "T004", guest: "Федорова Мария", table: "VIP-зал", date: "24.11.2025", time: "21:00", guests: 8, status: "confirmed", phone: "+7 (925) 456-78-90" },
    { id: "T005", guest: "Кузнецов Артем", table: "Стол 3", date: "22.11.2025", time: "17:30", guests: 3, status: "cancelled", phone: "+7 (915) 567-89-01" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
      case "confirmed":
        return "bg-emerald-500";
      case "pending":
        return "bg-yellow-500";
      case "completed":
        return "bg-blue-500";
      case "cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "Активна";
      case "confirmed":
        return "Подтверждено";
      case "pending":
        return "Ожидает";
      case "completed":
        return "Завершена";
      case "cancelled":
        return "Отменено";
      default:
        return status;
    }
  };

  const filteredRoomBookings = roomBookings.filter((booking) => {
    const matchesSearch = 
      booking.guest.toLowerCase().includes(roomSearch.toLowerCase()) ||
      booking.room.toLowerCase().includes(roomSearch.toLowerCase());
    const matchesFilter = roomFilter === "all" || booking.status === roomFilter;
    return matchesSearch && matchesFilter;
  });

  const filteredRestaurantBookings = restaurantBookings.filter((booking) => {
    const matchesSearch = 
      booking.guest.toLowerCase().includes(restaurantSearch.toLowerCase()) ||
      booking.table.toLowerCase().includes(restaurantSearch.toLowerCase());
    const matchesFilter = restaurantFilter === "all" || booking.status === restaurantFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Панель бронирований
          </h1>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Управление бронированиями номеров и столиков
          </p>
        </div>

        <Tabs defaultValue="rooms" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="rooms">
              <Icon name="Hotel" size={18} className="mr-2" />
              Номера
            </TabsTrigger>
            <TabsTrigger value="restaurant">
              <Icon name="UtensilsCrossed" size={18} className="mr-2" />
              Ресторан
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rooms" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Бронирования номеров
                </CardTitle>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Поиск по гостю или номеру..."
                      value={roomSearch}
                      onChange={(e) => setRoomSearch(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Select value={roomFilter} onValueChange={setRoomFilter}>
                    <SelectTrigger className="w-full sm:w-[200px]">
                      <SelectValue placeholder="Статус" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все статусы</SelectItem>
                      <SelectItem value="active">Активна</SelectItem>
                      <SelectItem value="pending">Ожидает</SelectItem>
                      <SelectItem value="completed">Завершена</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>ID</TableHead>
                        <TableHead>Гость</TableHead>
                        <TableHead>Номер</TableHead>
                        <TableHead>Заезд</TableHead>
                        <TableHead>Выезд</TableHead>
                        <TableHead>Гостей</TableHead>
                        <TableHead>Сумма</TableHead>
                        <TableHead>Статус</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredRoomBookings.map((booking) => (
                        <TableRow key={booking.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{booking.id}</TableCell>
                          <TableCell>{booking.guest}</TableCell>
                          <TableCell>{booking.room}</TableCell>
                          <TableCell>{booking.checkIn}</TableCell>
                          <TableCell>{booking.checkOut}</TableCell>
                          <TableCell>{booking.guests}</TableCell>
                          <TableCell className="font-semibold text-emerald-600">{booking.price}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(booking.status)}>
                              {getStatusLabel(booking.status)}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Всего броней</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {roomBookings.length}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Активных</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-emerald-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {roomBookings.filter(b => b.status === 'active').length}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Общая сумма</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    212 000 ₽
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="restaurant" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Бронирования столиков
                </CardTitle>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Поиск по гостю или столу..."
                      value={restaurantSearch}
                      onChange={(e) => setRestaurantSearch(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Select value={restaurantFilter} onValueChange={setRestaurantFilter}>
                    <SelectTrigger className="w-full sm:w-[200px]">
                      <SelectValue placeholder="Статус" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все статусы</SelectItem>
                      <SelectItem value="confirmed">Подтверждено</SelectItem>
                      <SelectItem value="pending">Ожидает</SelectItem>
                      <SelectItem value="cancelled">Отменено</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>ID</TableHead>
                        <TableHead>Гость</TableHead>
                        <TableHead>Стол</TableHead>
                        <TableHead>Дата</TableHead>
                        <TableHead>Время</TableHead>
                        <TableHead>Гостей</TableHead>
                        <TableHead>Телефон</TableHead>
                        <TableHead>Статус</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredRestaurantBookings.map((booking) => (
                        <TableRow key={booking.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{booking.id}</TableCell>
                          <TableCell>{booking.guest}</TableCell>
                          <TableCell>{booking.table}</TableCell>
                          <TableCell>{booking.date}</TableCell>
                          <TableCell>{booking.time}</TableCell>
                          <TableCell>{booking.guests}</TableCell>
                          <TableCell className="text-sm">{booking.phone}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(booking.status)}>
                              {getStatusLabel(booking.status)}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Всего броней</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {restaurantBookings.length}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Подтверждено</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-emerald-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {restaurantBookings.filter(b => b.status === 'confirmed').length}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Всего гостей</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {restaurantBookings.reduce((sum, b) => sum + b.guests, 0)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Bookings;