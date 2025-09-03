import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const courses = [
    {
      title: "Web-разработка для начинающих",
      description: "Изучите основы HTML, CSS, JavaScript и React",
      price: "19,990 ₽",
      rating: 4.8,
      students: 12450,
      duration: "16 недель",
      level: "Начинающий",
      image: "/img/1948733a-13f0-4c84-aebe-16f4cd464c07.jpg"
    },
    {
      title: "Python и Data Science",
      description: "Аналитика данных, машинное обучение, визуализация",
      price: "24,990 ₽",
      rating: 4.9,
      students: 8730,
      duration: "20 недель",
      level: "Средний",
      image: "/img/454033c7-bb45-42f0-bcaa-30eb2608483e.jpg"
    },
    {
      title: "Дизайн интерфейсов",
      description: "UX/UI дизайн, прототипирование, работа с Figma",
      price: "22,990 ₽",
      rating: 4.7,
      students: 5620,
      duration: "14 недель",
      level: "Начинающий",
      image: "/img/64d229fa-c04c-4ad0-b241-4e7436676524.jpg"
    }
  ];

  const stats = [
    { label: "Студентов", value: "50,000+", icon: "Users" },
    { label: "Курсов", value: "150+", icon: "BookOpen" },
    { label: "Преподавателей", value: "200+", icon: "GraduationCap" },
    { label: "Успешных выпускников", value: "15,000+", icon: "Trophy" }
  ];

  const features = [
    {
      icon: "Play",
      title: "Видео-уроки",
      description: "HD качество, удобная навигация"
    },
    {
      icon: "Users",
      title: "Живые вебинары",
      description: "Общение с экспертами в реальном времени"
    },
    {
      icon: "Award",
      title: "Сертификаты",
      description: "Официальные документы о прохождении"
    },
    {
      icon: "MessageCircle",
      title: "Поддержка 24/7",
      description: "Помощь на каждом этапе обучения"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Icon name="BookOpen" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                EduSpace
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-gray-700 hover:text-purple-600 transition-colors">Курсы</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Контакты</a>
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  🚀 Новый курс по ИИ уже доступен!
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Обучение
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                    будущего
                  </span>
                  начинается здесь
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Получите востребованную профессию в IT с нуля. 
                  Практические навыки, реальные проекты, гарантия трудоустройства.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать обучение
                </Button>
                <Button variant="outline" size="lg" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Пробный урок
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9</div>
                  <div className="text-sm text-gray-500">Рейтинг</div>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-500">Студентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-500">Трудоустройство</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative z-10">
                <img 
                  src="/img/1948733a-13f0-4c84-aebe-16f4cd464c07.jpg" 
                  alt="Обучение онлайн" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200">
              📚 Популярные курсы
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">
              Выберите свой путь в IT
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 150 курсов от ведущих экспертов индустрии. 
              Практические навыки, которые востребованы на рынке.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="group hover-scale border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-purple-700 border-0">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 rounded-full p-2">
                      <Icon name="Heart" size={16} className="text-gray-600" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-gray-500">({course.students.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Icon name="Clock" size={14} />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-purple-600">
                      {course.price}
                    </div>
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      Записаться
                    </Button>
                  </div>
                  <Progress value={75} className="mt-4" />
                  <p className="text-sm text-gray-500 mt-2">
                    {course.students.toLocaleString()} студентов изучают
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              <Icon name="Grid3X3" size={20} className="mr-2" />
              Показать все курсы
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">
              Почему выбирают нас?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Современный подход к обучению с использованием передовых технологий
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Icon name={feature.icon} size={24} />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="opacity-80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200">
              🎓 Начните карьеру в IT
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">
              Готовы изменить свою жизнь?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам успешных выпускников, которые нашли работу мечты в IT
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button variant="outline" size="lg" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
          
          <div className="pt-8">
            <p className="text-sm text-gray-500">
              ✅ Бесплатный первый урок • ✅ Гарантия возврата денег • ✅ Поддержка после обучения
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Icon name="BookOpen" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">EduSpace</span>
              </div>
              <p className="text-gray-400">
                Ведущая платформа онлайн-образования в IT
              </p>
              <div className="flex space-x-4">
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Youtube" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white cursor-pointer transition-colors">Программирование</div>
                <div className="hover:text-white cursor-pointer transition-colors">Дизайн</div>
                <div className="hover:text-white cursor-pointer transition-colors">Аналитика данных</div>
                <div className="hover:text-white cursor-pointer transition-colors">Маркетинг</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white cursor-pointer transition-colors">О нас</div>
                <div className="hover:text-white cursor-pointer transition-colors">Карьера</div>
                <div className="hover:text-white cursor-pointer transition-colors">Блог</div>
                <div className="hover:text-white cursor-pointer transition-colors">Партнеры</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white cursor-pointer transition-colors">Помощь</div>
                <div className="hover:text-white cursor-pointer transition-colors">Контакты</div>
                <div className="hover:text-white cursor-pointer transition-colors">Условия использования</div>
                <div className="hover:text-white cursor-pointer transition-colors">Конфиденциальность</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduSpace. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;