import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ResearchCard from '../components/ResearchCard';
import { researchAreas, papers } from '../data/mockData';
import PaperCard from '../components/PaperCard';
import { useLanguage } from '../contexts/LanguageContext';

export default function HomePage() {
  const { t, language } = useLanguage();
  const recentPapers = papers.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />

      <section id="research-highlights" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {language === 'en' ? 'Research Areas' : '研究领域'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('research.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('research.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((research) => (
              <ResearchCard key={research.id} research={research} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              {language === 'en' ? 'Latest Publications' : '最新论文'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('recent.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('recent.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {recentPapers.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t('recent.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">{t('stats.papers')}</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-gray-600">{t('stats.projects')}</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">{t('stats.students')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}