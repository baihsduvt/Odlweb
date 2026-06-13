import { FlaskConical, Leaf, Atom, Beaker, LucideIcon } from 'lucide-react';
import { ResearchArea } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: Record<string, LucideIcon> = {
  FlaskConical,
  Leaf,
  Atom,
  Beaker
};

interface ResearchCardProps {
  research: ResearchArea;
}

export default function ResearchCard({ research }: ResearchCardProps) {
  const Icon = iconMap[research.icon] || FlaskConical;
  const { language } = useLanguage();

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 p-6 border border-gray-100 hover:border-primary/30 hover:-translate-y-2">
      <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{research.title[language]}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{research.description[language]}</p>
    </div>
  );
}