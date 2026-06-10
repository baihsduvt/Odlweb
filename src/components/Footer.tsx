import { Mail, Phone, MapPin, Github, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'Prof. Abdullajon Odilov' : '阿卜杜拉忠·奥迪洛夫教授'}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {language === 'en' 
                ? 'Professor at the Tashkent University of Information Technologies.'
                : '塔什干信息技术大学教授。'
              }
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.home')}</a>
              </li>
              <li>
                <a href="/research" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.research')}</a>
              </li>
              <li>
                <a href="/teaching" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.teaching')}</a>
              </li>
              <li>
                <a href="/news" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.news')}</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.about')}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                abdullajon.odilov@tuit.uz
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                +998 71 234 5678
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {language === 'en' 
                  ? 'Tashkent University of Information Technologies'
                  : '塔什干信息技术大学'
                }
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
