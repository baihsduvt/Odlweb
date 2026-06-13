import { useState } from 'react';
import { Newspaper, Filter, Calendar } from 'lucide-react';
import { news } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedNews, setExpandedNews] = useState<string | null>(null);
  const { t, language } = useLanguage();

  const categories = [...new Set(news.map((n) => n.category[language]))];

  const filteredNews = news.filter((item) => {
    if (selectedCategory === null) return true;
    return item.category[language] === selectedCategory;
  });

  const toggleExpanded = (id: string) => {
    setExpandedNews(expandedNews === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t('news.title')}</h1>
              <p className="text-gray-600 mt-1">{t('news.description')}</p>
            </div>
            <div className="flex items-center gap-2">
              <Newspaper className="w-6 h-6 text-primary" />
              <span className="text-sm text-gray-500">
                {t('news.total')} {news.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Filter className="w-5 h-5 text-gray-400" />
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {t('news.allCategories')}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {item.category[language]}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{t('news.publishedOn')} {item.date}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title[language]}
                    </h2>
                    <p className="text-gray-600">{item.summary[language]}</p>
                  </div>
                </div>
                
                {expandedNews === item.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {item.content[language]}
                    </p>
                  </div>
                )}
                
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="mt-4 text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-2"
                >
                  {expandedNews === item.id ? t('news.readLess') : t('news.readMore')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Newspaper className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {language === 'en' ? 'No news found' : '未找到新闻'}
            </h3>
            <p className="text-gray-500">
              {language === 'en' ? 'Please try another category' : '请尝试其他类别'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
