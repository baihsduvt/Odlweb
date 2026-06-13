import { useState } from 'react';
import { ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { Paper } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';

interface PaperCardProps {
  paper: Paper;
}

export default function PaperCard({ paper }: PaperCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language, t } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{paper.title[language]}</h3>
            <p className="text-sm text-gray-500 mb-2">
              {paper.authors.map(a => a[language]).join(', ')}
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>{paper.journal[language]}</span>
              <span>{paper.year}</span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                {paper.citations} {t('researchPage.citations')}
              </span>
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
            <div className="flex items-start gap-3">
              <Quote className="w-5 h-5 text-primary/30 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 leading-relaxed">{paper.abstract[language]}</p>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors"
        >
          {isExpanded ? (
            <>
              {language === 'en' ? 'Hide Abstract' : '收起摘要'} 
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              {language === 'en' ? 'View Abstract' : '查看摘要'} 
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}