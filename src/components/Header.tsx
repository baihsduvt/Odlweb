import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, Atom } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const navLinks = [
  { nameKey: 'nav.home', href: '/' },
  { nameKey: 'nav.research', href: '/research' },
  { nameKey: 'nav.teaching', href: '/teaching' },
  { nameKey: 'nav.news', href: '/news' },
  { nameKey: 'nav.about', href: '/about' }
];

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? (isScrolled ? 'bg-white/70 backdrop-blur-lg' : 'bg-transparent')
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg transition-colors ${
              isHomePage && !isScrolled ? 'bg-white/10' : 'bg-primary/10'
            }`}>
              <Atom className={`w-6 h-6 transition-colors ${
                isHomePage && !isScrolled ? 'text-white' : 'text-primary'
              } group-hover:rotate-180 transition-transform duration-500`} />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'
            }`}>
              {language === 'en' ? 'Prof. Abdullajon Odilov' : '阿卜杜拉忠·奥迪洛夫教授'}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.nameKey}
                  to={link.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive
                      ? 'text-primary'
                      : (isHomePage && !isScrolled ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-gray-900')
                  }`}
                >
                  {t(link.nameKey)}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              );
            })}
            
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                isHomePage && !isScrolled
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {language === 'en' ? 'EN' : '中'}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                isHomePage && !isScrolled
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {language === 'en' ? 'EN' : '中'}
            </button>
            
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'}`} />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 py-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.nameKey}
                  to={link.href}
                  className={`block px-4 py-2 transition-colors ${
                    isActive
                      ? 'text-primary font-medium bg-primary/5'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(link.nameKey)}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
