import { ChevronDown, FlaskConical } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <svg className="absolute top-1/4 left-1/4 w-32 h-32 text-white/20 animate-spin" style={{ animationDuration: '20s' }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
        <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="1" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="15" r="3" fill="currentColor" />
        <circle cx="85" cy="50" r="3" fill="currentColor" />
        <circle cx="50" cy="85" r="3" fill="currentColor" />
        <circle cx="15" cy="50" r="3" fill="currentColor" />
      </svg>

      <svg className="absolute bottom-1/4 right-1/4 w-48 h-48 text-white/15" viewBox="0 0 200 200">
        <ellipse cx="100" cy="80" rx="60" ry="40" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="100" y1="80" x2="100" y2="120" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="100" cy="140" rx="30" ry="20" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="70" y1="140" x2="50" y2="160" stroke="currentColor" strokeWidth="2" />
        <line x1="130" y1="140" x2="150" y2="160" stroke="currentColor" strokeWidth="2" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <FlaskConical className="w-4 h-4 text-accent" />
          <span className="text-white/80 text-sm">{t('hero.tag')}</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {t('hero.title1')}
          <span className="block text-accent mt-2">{t('hero.title2')}</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/research"
            className="group px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
          >
            {t('hero.cta1')}
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="/about"
            className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            {t('hero.cta2')}
          </a>
        </div>
      </div>

      <a
        href="#research-highlights"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}