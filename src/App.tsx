import { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Mail, Linkedin, BarChart2, LineChart, PieChart, TrendingUp, Construction } from 'lucide-react';

const SoccerBall = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg" 
    alt="Soccer Ball"
    className="w-full h-full"
  />
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const statsData = [
    { label: "Passes", value: 85 },
    { label: "Shots", value: 12 },
    { label: "Goals", value: 2 },
    { label: "Assists", value: 3 }
  ];

  const generateDataPoints = () => {
    return Array.from({ length: 10 }, (_, i) => ({
      x: i,
      y: Math.random() * 100
    }));
  };

  const [chartData, setChartData] = useState(generateDataPoints());

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(generateDataPoints());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const codeSnippets = [
    "def analyze_player(data):",
    "import pandas as pd",
    "return stats.mean()",
    "class Scout:",
    "plt.plot(data)",
    "model.fit(X, y)"
  ];

  const portfolioItems = [
    {
      image: "https://felipeorma.github.io/imagenes/scouting-tool.png",
      title: isEnglish ? "Scouting Tool" : "Herramienta de Scouting"
    },
    {
      image: "https://felipeorma.github.io/imagenes/RADAR.jpeg",
      title: isEnglish ? "Player Comparison Radar" : "Radar de Comparación de Jugadores"
    },
    {
      image: "https://felipeorma.github.io/imagenes/dashboard.png",
      title: isEnglish ? "Interactive Dashboards" : "Dashboards Interactivos"
    },
    {
      image: "https://felipeorma.github.io/imagenes/post-match-report.jpeg",
      title: isEnglish ? "Team Analysis Report" : "Informe de Análisis de Equipo"
    },
    {
      image: "https://felipeorma.github.io/imagenes/dt-analysis.png",
      title: isEnglish ? "DT Analysis" : "Análisis de DT"
    },
    {
      image: "https://felipeorma.github.io/imagenes/league stats.jpeg",
      title: isEnglish ? "League Analysis" : "Análisis de Liga"
    }
  ];

  const experienceItems = [
    {
      logo: "https://felipeorma.github.io/imagenes/Albacete_balompie.png",
      name: "Albacete Balompie"
    },
    {
      logo: "https://felipeorma.github.io/imagenes/MLS.png",
      name: "MLS"
    },
    {
      logo: "https://felipeorma.github.io/imagenes/Deportivo_Cuenca.png",
      name: "Deportivo Cuenca"
    },
    {
      logo: "https://felipeorma.github.io/imagenes/chile.png",
      name: isEnglish ? "Chilean First Division" : "Primera División de Chile"
    },
    {
      logo: "https://felipeorma.github.io/imagenes/CanPL.png",
      name: "Canadian Premier League"
    }
  ];

  const educationItems = [
    {
      logo: "https://felipeorma.github.io/imagenes/UA%20CHILE.png",
      title: isEnglish ? "Engineering in Business Administration" : "Ingeniería en Administración de Empresas",
      institution: "Universidad Autonoma de Chile'
    },
    {
      logo: "https://felipeorma.github.io/imagenes/LPDT.png",
      title: isEnglish ? "Course in Scouting and Big Data" : "Curso en Scouting y Big Data",
      institution: "LPDT"
    },
    {
      logo: "https://felipeorma.github.io/imagenes/MBP.jpg",
      title: isEnglish ? "Specialist in Scouting and Game Analysis" : "Especialista en Scouting y Análisis del Juego",
      institution: "MBP School"
    },
    {
      logo: "https://felipeorma.github.io/imagenes/UCAM_Murcia.jpg",
      title: isEnglish ? "Master's in Big Data and Scouting" : "Máster en Big Data y Scouting",
      institution: "UCAM"
    }
  ];

  const handleScroll = () => {
    const sections = ['home', 'about', 'portfolio', 'blog', 'experience', 'education', 'contact'];
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    if (current) {
      setActiveSection(current);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', en: 'Home', es: 'Inicio' },
    { id: 'about', en: 'About', es: 'Sobre Mí' },
    { id: 'portfolio', en: 'Portfolio', es: 'Portafolio' },
    { id: 'blog', en: 'Blog', es: 'Blog' },
    { id: 'experience', en: 'Experience', es: 'Experiencia' },
    { id: 'education', en: 'Education', es: 'Educación' },
    { id: 'contact', en: 'Contact', es: 'Contacto' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gray-900/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div className="flex-shrink-0">
              <span className="text-gradient text-xl font-bold">&lt;FO /&gt;</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-green-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {isEnglish ? item.en : item.es}
                </a>
              ))}
            </div>

            {/* Language Toggle and Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsEnglish(!isEnglish)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <img 
                  src={isEnglish ? "https://flagcdn.com/w40/es.png" : "https://flagcdn.com/w40/gb.png"} 
                  alt={isEnglish ? "Spanish" : "English"}
                  className="w-6 h-4 object-cover rounded"
                />
                <span className="text-sm font-medium">{isEnglish ? 'ES' : 'EN'}</span>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-4 py-3 space-y-1 bg-gray-800/90 backdrop-blur-md">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-green-500 bg-gray-700/50'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                }`}
              >
                {isEnglish ? item.en : item.es}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Floating Code Elements */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className="code-element animate-code-float"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${index * 0.5}s`
          }}
        >
          {snippet}
        </div>
      ))}

      {/* Soccer Ball Pattern Background */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30m-28 0a28,28 0 1,0 56,0a28,28 0 1,0 -56,0' fill='none' stroke='%234ade80' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Animated Soccer Balls */}
      <div className="soccer-ball soccer-ball-1 animate-roll">
        <SoccerBall />
      </div>
      <div className="soccer-ball soccer-ball-2 animate-roll">
        <SoccerBall />
      </div>
      <div className="soccer-ball soccer-ball-3 animate-roll">
        <SoccerBall />
      </div>
      <div className="soccer-ball soccer-ball-4 animate-roll-reverse">
        <SoccerBall />
      </div>
      <div className="soccer-ball soccer-ball-5 animate-roll-reverse">
        <SoccerBall />
      </div>
      <div className="soccer-ball soccer-ball-diagonal animate-roll-diagonal">
        <SoccerBall />
      </div>

      {/* Header */}
      <header className="relative h-screen flex items-center justify-center bg-gradient-custom overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[2px] z-0"></div>
        
        {/* Navigation */}
        <nav className={`fixed top-0 right-0 h-full w-64 bg-gray-900/95 backdrop-blur-sm transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 ease-in-out z-40 md:static md:transform-none md:w-auto md:h-auto md:backdrop-blur-none`}>
          <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:fixed md:top-4 md:left-1/2 md:-translate-x-1/2 md:p-3 md:gap-8 md:header-nav md:rounded-full">
            {['about', 'portfolio', 'blog', 'experience', 'education', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="nav-link text-sm text-white/90 hover:text-white transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {isEnglish ? item.charAt(0).toUpperCase() + item.slice(1) : 
                  item === 'about' ? 'Sobre Mí' :
                  item === 'portfolio' ? 'Portafolio' :
                  item === 'blog' ? 'Blog' :
                  item === 'experience' ? 'Experiencia' :
                  item === 'education' ? 'Educación' : 'Contacto'}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center space-y-6 px-4 max-w-4xl mx-auto">
          <div className="animate-float mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight title-code animate-glow">
              <span className="text-gradient">&lt;Felipe Ormazabal /&gt;</span>
            </h1>
            <p className="text-lg md:text-xl font-mono text-gray-300 font-light tracking-wide mt-4 animate-typing">
              {isEnglish ? '> Football Data Analyst & Scout' : '> Analista de Datos y Scout de Fútbol'}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a 
              href="#portfolio"
              className="px-6 py-2.5 bg-green-600/90 backdrop-blur-sm text-sm font-medium text-white rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {isEnglish ? 'View My Work' : 'Ver Mi Trabajo'}
            </a>
            <a 
              href="#contact"
              className="px-6 py-2.5 bg-gray-800/90 backdrop-blur-sm text-sm font-medium text-white rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {isEnglish ? 'Contact Me' : 'Contáctame'}
            </a>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300">
              <ChevronLeft className="w-6 h-6 rotate-90" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section with Floating Stats */}
      <section id="about" className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="stat-element"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              <div className="flex items-center gap-2 text-green-500/40">
                <BarChart2 className="w-4 h-4" />
                <span>{stat.label}: {stat.value}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="soccer-ball soccer-ball-1 animate-roll">
          <SoccerBall />
        </div>
        <div className="soccer-ball soccer-ball-2 animate-roll">
          <SoccerBall />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-8 title-code animate-glow">
            <span className="text-gradient">&lt;{isEnglish ? 'About Me' : 'Sobre Mí'} /&gt;</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300 font-mono">
                {isEnglish 
                  ? "I am a football data analyst with experience in scouting, big data, and creating tools to analyze player performance. I focus on creating and implementing personalized processes for talent identification and evaluation."
                  : "Soy un analista de datos de fútbol con experiencia en scouting, big data y creación de herramientas para analizar el rendimiento de los jugadores. Me enfoco en crear e implementar procesos personalizados para la identificación y evaluación de talento."}
              </p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://felipeorma.github.io/imagenes/perfil.jpeg" 
                alt="Felipe Ormazabal" 
                className="rounded-lg shadow-xl w-full hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="relative py-20 px-6 bg-gray-800/50 backdrop-blur-sm overflow-hidden">
        <div className="soccer-ball soccer-ball-1 animate-roll">
          <SoccerBall />
        </div>
        <div className="soccer-ball soccer-ball-2 animate-roll">
          <SoccerBall />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 title-code animate-glow">
            <span className="text-gradient">&lt;{isEnglish ? 'Portfolio' : 'Portafolio'} /&gt;</span>
          </h2>
          <div className="relative">
            <div className="flex items-center justify-center mb-8 transform hover:scale-[1.02] transition-all duration-300">
              <img 
                src={portfolioItems[currentImageIndex].image}
                alt={portfolioItems[currentImageIndex].title}
                className="max-w-3xl w-full h-[400px] object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            <button 
              onClick={() => setCurrentImageIndex((prev) => prev === 0 ? portfolioItems.length - 1 : prev - 1)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-green-600 rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setCurrentImageIndex((prev) => prev === portfolioItems.length - 1 ? 0 : prev + 1)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-green-600 rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
            <p className="text-center text-xl mt-4 font-mono">{portfolioItems[currentImageIndex].title}</p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="relative py-20 px-6 overflow-hidden">
        <div className="soccer-ball soccer-ball-1 animate-roll">
          <SoccerBall />
        </div>
        <div className="soccer-ball soccer-ball-2 animate-roll">
          <SoccerBall />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 title-code animate-glow">
            <span className="text-gradient">&lt;Blog /&gt;</span>
          </h2>
          <div className="bg-gray-900/80 p-8 rounded-lg backdrop-blur-sm">
            <div className="flex flex-col items-center gap-6 text-center">
              <Construction className="w-16 h-16 text-green-500 animate-pulse" />
              <h3 className="text-2xl font-bold font-mono">
                {isEnglish ? 'Under Construction' : 'En Construcción'}
              </h3>
              <p className="text-gray-400 max-w-2xl font-mono">
                {isEnglish 
                  ? 'Our blog section is currently being developed. Soon you will be able to read articles about football analytics, scouting, and data science.' 
                  : 'Nuestra sección de blog está en desarrollo. Pronto podrás leer artículos sobre análisis de fútbol, scouting y ciencia de datos.'}
              </p>
              <div className="w-full max-w-md h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-1/3 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Animated Charts */}
      <section id="experience" className="relative py-20 px-6 bg-gray-800/50 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full opacity-10">
            <g className="transform translate-x-1/2 translate-y-1/2">
              {chartData.map((point, i) => (
                <g key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                  <line
                    x1={point.x * 50}
                    y1={point.y * 2}
                    x2={(point.x + 1) * 50}
                    y2={chartData[i + 1]?.y * 2 || point.y * 2}
                    stroke="#4ade80"
                    strokeWidth="2"
                    className="animate-draw"
                  />
                  <circle
                    cx={point.x * 50}
                    cy={point.y * 2}
                    r="4"
                    fill="#4ade80"
                    className="animate-pulse"
                  />
                </g>
              ))}
            </g>
          </svg>
        </div>
        <div className="soccer-ball soccer-ball-1 animate-roll">
          <SoccerBall />
        </div>
        <div className="soccer-ball soccer-ball-2 animate-roll">
          <SoccerBall />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 title-code animate-glow">
            <span className="text-gradient">&lt;{isEnglish ? 'Experience' : 'Experiencia'} /&gt;</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {experienceItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center transform hover:scale-105 transition-all duration-300">
                <div className="bg-gray-800/50 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 w-full backdrop-blur-sm">
                  <img 
                    src={item.logo} 
                    alt={item.name}
                    className="w-24 h-24 object-contain mb-4 mx-auto"
                  />
                  <p className="text-center font-mono">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="relative py-20 px-6 overflow-hidden">
        <div className="soccer-ball soccer-ball-1 animate-roll">
          <SoccerBall />
        </div>
        <div className="soccer-ball soccer-ball-2 animate-roll">
          <SoccerBall />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 title-code animate-glow">
            <span className="text-gradient">&lt;{isEnglish ? 'Education' : 'Educación'} /&gt;</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {educationItems.map((item, index) => (
              <div key={index} className="bg-gray-900/80 p-8 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl backdrop-blur-sm">
                <img 
                  src={item.logo} 
                  alt={item.institution}
                  className="w-20 h-20 object-contain mb-6 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-3 text-center font-mono">{item.title}</h3>
                <p className="text-gray-400 text-center font-mono">{item.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Dynamic Background */}
      <section id="contact" className="relative py-20 px-6 bg-gray-800/50 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-6 gap-4 opacity-10">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-gradient-to-br from-green-500/20 to-transparent animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {i % 2 === 0 && <LineChart className="w-full h-full p-4 text-green-500/40" />}
                {i % 3 === 0 && <PieChart className="w-full h-full p-4 text-green-500/40" />}
                {i % 4 === 0 && <TrendingUp className="w-full h-full p-4 text-green-500/40" />}
              </div>
            ))}
          </div>
        </div>
        <div className="soccer-ball soccer-ball-1 animate-roll">
          <SoccerBall />
        </div>
        <div className="soccer-ball soccer-ball-2 animate-roll">
          <SoccerBall />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-12 title-code animate-glow">
            <span className="text-gradient">&lt;{isEnglish ? 'Contact' : 'Contacto'} /&gt;</span>
          </h2>
          <div className="flex justify-center gap-8">
            <a 
              href="mailto:felipeormazab@gmail.com"
              className="flex items-center gap-2 text-xl hover:text-green-500 transition-all duration-300 transform hover:scale-105 font-mono"
            >
              <Mail size={24} />
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/felipe-ormazabal-835037226/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xl hover:text-green-500 transition-all duration-300 transform hover:scale-105 font-mono"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400 bg-gray-900/80 backdrop-blur-sm font-mono">
        <p>&copy; 2024 Felipe Ormazabal | {isEnglish ? 'All Rights Reserved' : 'Todos los derechos reservados'}</p>
      </footer>
    </div>
  );
}

export default App;