import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻译内容
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.research': 'Research',
    'nav.teaching': 'Teaching',
    'nav.about': 'About',
    'nav.news': 'News',
    'hero.tag': 'Organic Chemistry · Green Catalysis · Materials Science',
    'hero.title1': 'Exploring the infinite',
    'hero.title2': 'possibilities of chemistry',
    'hero.description': 'Professor at the Tashkent University of Information Technologies. My research focuses on organic catalysis, green chemistry, and materials science. Committed to developing environmentally friendly chemical synthesis methods for sustainable development.',
    'hero.cta1': 'View Research',
    'hero.cta2': 'Learn More',
    'research.title': 'Research Areas',
    'research.description': 'Committed to developing novel organic catalysts and environmentally friendly chemical synthesis methods for sustainable chemistry',
    'research.area1.title': 'Organic Catalysis',
    'research.area1.desc': 'Developing novel organic catalysts and their applications in organic synthesis',
    'research.area2.title': 'Green Chemistry',
    'research.area2.desc': 'Exploring environmentally friendly chemical synthesis methods',
    'research.area3.title': 'Materials Chemistry',
    'research.area3.desc': 'Research on the design and synthesis of functional materials',
    'research.area4.title': 'Organic Synthesis',
    'research.area4.desc': 'Efficient synthesis strategies for complex organic molecules',
    'recent.title': 'Recent Publications',
    'recent.description': 'Latest research publications in renowned academic journals',
    'recent.viewAll': 'View All Publications',
    'stats.papers': 'Academic Papers',
    'stats.projects': 'Research Projects',
    'stats.students': 'Graduate Students',
    'researchPage.title': 'Research Publications',
    'researchPage.description': 'Research papers published in prestigious academic journals',
    'researchPage.total': 'Total Publications',
    'researchPage.search': 'Search by title, author, or journal...',
    'researchPage.filter': 'All Years',
    'researchPage.noResults': 'No matching papers found',
    'researchPage.tryAgain': 'Please try other search terms or filters',
    'researchPage.viewAbstract': 'View Abstract',
    'researchPage.hideAbstract': 'Hide Abstract',
    'researchPage.citations': 'Citations',
    'teaching.title': 'Teaching',
    'teaching.description': 'Curated course system for cultivating future talents in chemistry',
    'teaching.total': 'Total Courses',
    'teaching.resources': 'Learning Resources',
    'teaching.resourcesDesc': 'All course materials are available for free download. Students are welcome to use and share them. If you have any questions or suggestions, please feel free to contact me.',
    'teaching.viewResources': 'View Resources',
    'teaching.hideResources': 'Hide Resources',
    'teaching.pdf': 'PDF Notes',
    'teaching.ppt': 'PPT Slides',
    'teaching.video': 'Video Lectures',
    'teaching.exercises': 'Exercise Sets',
    'teaching.course1.title': 'Inorganic Chemistry',
    'teaching.course1.desc': 'Covers the structure, properties, and reactions of inorganic compounds, including periodic trends, chemical bonding, and coordination compounds.',
    'teaching.course1.level': 'Undergraduate Year 1',
    'teaching.course2.title': 'Organic Chemistry',
    'teaching.course2.desc': 'Systematic study of organic compound structure, nomenclature, reaction mechanisms, and synthesis methods.',
    'teaching.course2.level': 'Undergraduate Year 2',
    'teaching.course3.title': 'Physical Chemistry',
    'teaching.course3.desc': 'Applying physics principles to study the macroscopic and microscopic behavior of chemical systems.',
    'teaching.course3.level': 'Undergraduate Year 2',
    'teaching.course4.title': 'Advanced Organic Chemistry',
    'teaching.course4.desc': 'In-depth study of organic reaction mechanisms, stereochemistry, and complex organic synthesis.',
    'teaching.course4.level': 'Graduate',
    'news.title': 'Chemistry News',
    'news.description': 'Latest updates from our research and education',
    'news.total': 'Total News',
    'news.allCategories': 'All Categories',
    'news.readMore': 'Read More',
    'news.readLess': 'Read Less',
    'news.publishedOn': 'Published on',
    'about.journeyTitle': 'Academic Journey',
    'about.awards': 'Honors & Awards',
    'about.contact': 'Contact',
    'about.email': 'Email',
    'about.phone': 'Phone',
    'about.address': 'Address',
    'about.bio': 'About Me',
    'about.bioText': 'Professor Abdullajon Odilov is currently a professor at the Tashkent University of Information Technologies. His research focuses on organic catalysis, green chemistry, and materials science. He has published over 50 papers in prestigious academic journals, led more than 10 national research projects, and supervised over 20 graduate students.',
    'about.education': 'Education',
    'about.phd': 'PhD, Academy of Sciences of Uzbekistan, 2010',
    'about.bachelor': 'Bachelor, National University of Uzbekistan, 2005',
    'about.name': 'Abdullajon Odilov',
    'about.position': 'Professor, Tashkent University of Information Technologies',
    'about.tag1': 'Organic Chemistry',
    'about.tag2': 'Green Catalysis',
    'about.tag3': 'Materials Science',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.copyright': 'Professor Abdullajon Odilov Personal Website. All rights reserved.',
  },
  zh: {
    'nav.home': '首页',
    'nav.research': '研究成果',
    'nav.teaching': '教学内容',
    'nav.about': '关于我',
    'nav.news': '新闻',
    'hero.tag': '有机化学 · 绿色催化 · 材料科学',
    'hero.title1': '探索化学世界的',
    'hero.title2': '无限可能',
    'hero.description': '塔什干信息技术大学教授，主要从事有机催化、绿色化学和材料化学领域的研究。致力于开发环境友好的化学合成方法，推动可持续发展。',
    'hero.cta1': '查看研究成果',
    'hero.cta2': '了解更多',
    'research.title': '研究领域',
    'research.description': '致力于开发新型有机催化剂和环境友好的化学合成方法，推动可持续化学发展',
    'research.area1.title': '有机催化',
    'research.area1.desc': '开发新型有机催化剂，研究其在有机合成中的应用',
    'research.area2.title': '绿色化学',
    'research.area2.desc': '探索环境友好的化学合成方法',
    'research.area3.title': '材料化学',
    'research.area3.desc': '研究功能材料的设计与合成',
    'research.area4.title': '有机合成',
    'research.area4.desc': '复杂有机分子的高效合成策略',
    'recent.title': '近期论文',
    'recent.description': '发表在国内外知名学术期刊的最新研究成果',
    'recent.viewAll': '查看全部论文',
    'stats.papers': '学术论文',
    'stats.projects': '研究项目',
    'stats.students': '指导学生',
    'researchPage.title': '研究成果',
    'researchPage.description': '发表在国内外知名学术期刊的研究论文',
    'researchPage.total': '共',
    'researchPage.search': '搜索论文标题、作者或期刊...',
    'researchPage.filter': '全部年份',
    'researchPage.noResults': '未找到匹配的论文',
    'researchPage.tryAgain': '请尝试其他搜索词或筛选条件',
    'researchPage.viewAbstract': '查看摘要',
    'researchPage.hideAbstract': '收起摘要',
    'researchPage.citations': '引用',
    'teaching.title': '教学内容',
    'teaching.description': '精心设计的课程体系，培养化学领域的未来人才',
    'teaching.total': '共',
    'teaching.resources': '学习资源',
    'teaching.resourcesDesc': '所有课程资料均可免费下载，欢迎同学们使用和分享。如有任何问题或建议，欢迎通过联系方式与我交流。',
    'teaching.viewResources': '查看资源',
    'teaching.hideResources': '收起资源',
    'teaching.pdf': 'PDF讲义',
    'teaching.ppt': 'PPT课件',
    'teaching.video': '视频教程',
    'teaching.exercises': '习题集',
    'teaching.course1.title': '无机化学',
    'teaching.course1.desc': '涵盖无机化合物的结构、性质和反应，包括元素周期律、化学键、配位化合物等内容。',
    'teaching.course1.level': '本科一年级',
    'teaching.course2.title': '有机化学',
    'teaching.course2.desc': '系统学习有机化合物的结构、命名、反应机理和合成方法。',
    'teaching.course2.level': '本科二年级',
    'teaching.course3.title': '物理化学',
    'teaching.course3.desc': '应用物理学原理研究化学系统的宏观和微观行为。',
    'teaching.course3.level': '本科二年级',
    'teaching.course4.title': '高等有机化学',
    'teaching.course4.desc': '深入研究有机反应机理、立体化学和复杂有机合成。',
    'teaching.course4.level': '研究生',
    'news.title': '化学新闻',
    'news.description': '我们研究和教育的最新动态',
    'news.total': '总新闻数',
    'news.allCategories': '全部类别',
    'news.readMore': '阅读更多',
    'news.readLess': '收起',
    'news.publishedOn': '发布于',
    'about.journeyTitle': '学术经历',
    'about.awards': '荣誉奖项',
    'about.contact': '联系方式',
    'about.email': '邮箱',
    'about.phone': '电话',
    'about.address': '地址',
    'about.bio': '个人简介',
    'about.bioText': '阿卜杜拉忠·奥迪洛夫教授现任塔什干信息技术大学教授，主要从事有机催化、绿色化学和材料化学领域的研究。已在国内外知名学术期刊发表论文50余篇，主持国家级科研项目10余项，培养研究生20余名。',
    'about.education': '教育背景',
    'about.phd': '博士, 乌兹别克斯坦科学院, 2010',
    'about.bachelor': '学士, 乌兹别克斯坦国立大学, 2005',
    'about.name': '阿卜杜拉忠·奥迪洛夫',
    'about.position': '塔什干信息技术大学 教授',
    'about.tag1': '有机化学',
    'about.tag2': '绿色催化',
    'about.tag3': '材料科学',
    'footer.quickLinks': '快速链接',
    'footer.contact': '联系方式',
    'footer.copyright': '阿卜杜拉忠·奥迪洛夫教授个人主页. All rights reserved.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
