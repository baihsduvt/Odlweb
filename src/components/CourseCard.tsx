import { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Presentation, Video } from 'lucide-react';
import { Course } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language, t } = useLanguage();

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return FileText;
      case 'ppt':
        return Presentation;
      case 'video':
        return Video;
      default:
        return FileText;
    }
  };

  const getResourceColor = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'text-red-500';
      case 'ppt':
        return 'text-orange-500';
      case 'video':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {course.level[language]}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title[language]}</h3>
            <p className="text-sm text-gray-600">{course.description[language]}</p>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-medium text-gray-700 mb-3">{t('teaching.resources')}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {course.resources.map((resource, index) => {
                const Icon = getResourceIcon(resource.type);
                const colorClass = getResourceColor(resource.type);
                return (
                  <a
                    key={index}
                    href={resource.url}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <Icon className={`w-4 h-4 ${colorClass}`} />
                    <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                      {resource.name[language]}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors"
        >
          {isExpanded ? (
            <>
              {language === 'en' ? 'Hide Resources' : '收起资源'} 
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              {language === 'en' ? 'View Resources' : '查看资源'} 
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}