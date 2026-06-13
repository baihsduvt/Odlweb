import { useState } from 'react';
import { BookOpen, Filter, Search } from 'lucide-react';
import PaperCard from '../components/PaperCard';
import { papers } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const years = [...new Set(papers.map((p) => p.year))].sort((a, b) => b - a);

  const filteredPapers = papers.filter((paper) => {
    const matchesSearch =
      paper.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.some((author) =>
        author[language].toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      paper.journal[language].toLowerCase().includes(searchTerm.toLowerCase());

    const matchesYear = selectedYear === null || paper.year === selectedYear;

    return matchesSearch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t('researchPage.title')}</h1>
              <p className="text-gray-600 mt-1">{t('researchPage.description')}</p>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="text-sm text-gray-500">
                {language === 'en' ? 'Total' : '共'} {papers.length} {language === 'en' ? 'Publications' : '篇论文'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t('researchPage.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedYear || ''}
              onChange={(e) => setSelectedYear(e.target.value ? Number(e.target.value) : null)}
              className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              <option value="">{t('researchPage.filter')}</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {filteredPapers.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <BookOpen className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{t('researchPage.noResults')}</h3>
            <p className="text-gray-500">{t('researchPage.tryAgain')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPapers.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}