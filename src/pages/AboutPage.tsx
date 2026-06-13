import { Award, Mail, Phone, MapPin, User } from 'lucide-react';
import Timeline from '../components/Timeline';
import { experiences, awards } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="bg-gradient-to-br from-primary via-primary/80 to-accent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <User className="w-24 h-24 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-2">{t('about.name')}</h1>
              <p className="text-white/80 text-lg mb-4">{t('about.position')}</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">{t('about.tag1')}</span>
                <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">{t('about.tag2')}</span>
                <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">{t('about.tag3')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-1 h-6 bg-primary rounded-full" />
                {t('about.journeyTitle')}
              </h2>
              <Timeline experiences={experiences} />
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-1 h-6 bg-primary rounded-full" />
                {t('about.awards')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {awards.map((award) => (
                  <div
                    key={award.id}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{award.title[language]}</h4>
                        <p className="text-sm text-gray-500">{award.organization[language]}</p>
                        <p className="text-xs text-primary font-medium mt-1">{award.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">{t('about.contact')}</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('about.email')}</p>
                    <p className="text-gray-900 font-medium">abdullajon.odilov@tuit.uz</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('about.phone')}</p>
                    <p className="text-gray-900 font-medium">+998 71 234 5678</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('about.address')}</p>
                    <p className="text-gray-900 font-medium">
                      {language === 'en' 
                        ? 'Tashkent University of Information Technologies'
                        : '塔什干信息技术大学'
                      }
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">{t('about.bio')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('about.bioText')}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">{t('about.education')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {t('about.phd')}
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {t('about.bachelor')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
