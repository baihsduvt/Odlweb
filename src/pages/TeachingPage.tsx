import { BookOpen, GraduationCap } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';

export default function TeachingPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t('teaching.title')}</h1>
              <p className="text-gray-600 mt-1">{t('teaching.description')}</p>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="text-sm text-gray-500">
                {language === 'en' ? 'Total' : '共'} {courses.length} {language === 'en' ? 'Courses' : '门课程'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('teaching.resources')}</h3>
              <p className="text-gray-600 mb-4">{t('teaching.resourcesDesc')}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">{t('teaching.pdf')}</span>
                <span className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">{t('teaching.ppt')}</span>
                <span className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">{t('teaching.video')}</span>
                <span className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">{t('teaching.exercises')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}