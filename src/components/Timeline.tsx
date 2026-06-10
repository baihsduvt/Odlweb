import { Experience } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  const { language } = useLanguage();

  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative pl-16">
            <div className="absolute left-4 top-1 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-sm" />
            
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h4 className="font-semibold text-gray-900">{exp.title[language]}</h4>
                <span className="text-sm text-gray-500">
                  {exp.startYear} - {exp.endYear ? exp.endYear : (language === 'en' ? 'Present' : '至今')}
                </span>
              </div>
              <p className="text-primary font-medium text-sm mb-1">{exp.institution[language]}</p>
              <p className="text-gray-600 text-sm">{exp.description[language]}</p>
              
              {index === 0 && (
                <div className="mt-3 inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  {language === 'en' ? 'Current Position' : '当前职位'}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}