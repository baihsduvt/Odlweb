export interface LocalizedString {
  en: string;
  zh: string;
}

export interface Paper {
  id: string;
  title: LocalizedString;
  authors: LocalizedString[];
  journal: LocalizedString;
  year: number;
  citations: number;
  abstract: LocalizedString;
}

export interface Course {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  level: LocalizedString;
  resources: Resource[];
}

export interface Resource {
  name: LocalizedString;
  type: 'pdf' | 'ppt' | 'video';
  url: string;
}

export interface Experience {
  id: string;
  title: LocalizedString;
  institution: LocalizedString;
  startYear: number;
  endYear: number | null;
  description: LocalizedString;
}

export interface Award {
  id: string;
  title: LocalizedString;
  organization: LocalizedString;
  year: number;
}

export interface ResearchArea {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
}

export interface News {
  id: string;
  title: LocalizedString;
  summary: LocalizedString;
  content: LocalizedString;
  date: string;
  category: LocalizedString;
  imageUrl?: string;
}

export const papers: Paper[] = [
  {
    id: '1',
    title: {
      en: 'Synthesis and Performance of Novel Organic Catalysts',
      zh: '新型有机催化剂的合成与性能研究'
    },
    authors: [
      { en: 'Abdullajon Odilov', zh: '阿卜杜拉忠·奥迪洛夫' },
      { en: 'Li Hua', zh: '李华' },
      { en: 'Wang Qiang', zh: '王强' }
    ],
    journal: {
      en: 'Acta Chimica Sinica',
      zh: '化学学报'
    },
    year: 2024,
    citations: 156,
    abstract: {
      en: 'In this study, we successfully synthesized a series of novel organic catalysts and systematically investigated their catalytic performance. The results show that these catalysts exhibit excellent catalytic activity and selectivity in organic synthesis reactions.',
      zh: '本研究成功合成了一系列新型有机催化剂，并对其催化性能进行了系统研究。结果表明，该催化剂在有机合成反应中表现出优异的催化活性和选择性。'
    }
  },
  {
    id: '2',
    title: {
      en: 'Green Synthesis of Chlorine and Its Compounds',
      zh: '氯及其化合物的绿色合成方法'
    },
    authors: [
      { en: 'Abdullajon Odilov', zh: '阿卜杜拉忠·奥迪洛夫' },
      { en: 'Liu Yang', zh: '刘洋' }
    ],
    journal: {
      en: 'Green Chemistry',
      zh: '绿色化学'
    },
    year: 2023,
    citations: 89,
    abstract: {
      en: 'An environmentally friendly synthesis method for chlorine and its compounds has been developed, reducing environmental pollution problems in traditional synthesis processes.',
      zh: '开发了一种环境友好的氯及其化合物合成方法，减少了传统合成工艺中的环境污染问题。'
    }
  },
  {
    id: '3',
    title: {
      en: 'Theoretical Study on Nomenclature of Ether-Containing Organic Compounds',
      zh: '含醚有机物命名规则的理论研究'
    },
    authors: [
      { en: 'Abdullajon Odilov', zh: '阿卜杜拉忠·奥迪洛夫' }
    ],
    journal: {
      en: 'Chinese Journal of Organic Chemistry',
      zh: '有机化学'
    },
    year: 2023,
    citations: 67,
    abstract: {
      en: 'Based on CCS 2017 nomenclature rules, we systematically studied the nomenclature of ether-containing organic compounds and proposed a complete naming system.',
      zh: '基于CCS 2017命名规则，系统研究了含醚有机物的命名方法，提出了一套完整的命名体系。'
    }
  },
  {
    id: '4',
    title: {
      en: 'Transition Metal-Catalyzed C-H Activation Reactions',
      zh: '过渡金属催化的C-H活化反应'
    },
    authors: [
      { en: 'Abdullajon Odilov', zh: '阿卜杜拉忠·奥迪洛夫' },
      { en: 'Chen Fang', zh: '陈芳' },
      { en: 'Liu Wei', zh: '刘伟' }
    ],
    journal: {
      en: 'Chemical Journal of Chinese Universities',
      zh: '高等学校化学学报'
    },
    year: 2022,
    citations: 234,
    abstract: {
      en: 'The mechanism of transition metal-catalyzed C-H activation reactions was studied, providing new strategies for the synthesis of complex organic molecules.',
      zh: '研究了过渡金属催化的C-H活化反应机理，为复杂有机分子的合成提供了新的策略。'
    }
  },
  {
    id: '5',
    title: {
      en: 'Applications of Nanomaterials in Catalytic Reactions',
      zh: '纳米材料在催化反应中的应用'
    },
    authors: [
      { en: 'Abdullajon Odilov', zh: '阿卜杜拉忠·奥迪洛夫' },
      { en: 'Zhao Li', zh: '赵丽' }
    ],
    journal: {
      en: 'Materials Chemistry',
      zh: '材料化学'
    },
    year: 2022,
    citations: 145,
    abstract: {
      en: 'The applications of nanomaterials in catalytic reactions were explored, revealing their unique catalytic properties and potential application value.',
      zh: '探索了纳米材料在催化反应中的应用，发现其独特的催化性能和潜在的应用价值。'
    }
  }
];

export const courses: Course[] = [
  {
    id: '1',
    title: {
      en: 'Inorganic Chemistry',
      zh: '无机化学'
    },
    description: {
      en: 'Covers the structure, properties, and reactions of inorganic compounds, including periodic trends, chemical bonding, and coordination compounds.',
      zh: '涵盖无机化合物的结构、性质和反应，包括元素周期律、化学键、配位化合物等内容。'
    },
    level: {
      en: 'Undergraduate Year 1',
      zh: '本科一年级'
    },
    resources: [
      { name: { en: 'Syllabus', zh: '课程大纲' }, type: 'pdf', url: '#' },
      { name: { en: 'Chapter 1 Notes', zh: '第一章讲义' }, type: 'pdf', url: '#' },
      { name: { en: 'Lab Guide', zh: '实验指导' }, type: 'pdf', url: '#' },
      { name: { en: 'Lecture Videos', zh: '课堂视频' }, type: 'video', url: '#' }
    ]
  },
  {
    id: '2',
    title: {
      en: 'Organic Chemistry',
      zh: '有机化学'
    },
    description: {
      en: 'Systematic study of organic compound structure, nomenclature, reaction mechanisms, and synthesis methods.',
      zh: '系统学习有机化合物的结构、命名、反应机理和合成方法。'
    },
    level: {
      en: 'Undergraduate Year 2',
      zh: '本科二年级'
    },
    resources: [
      { name: { en: 'Syllabus', zh: '课程大纲' }, type: 'pdf', url: '#' },
      { name: { en: 'Exercise Sets', zh: '习题集' }, type: 'pdf', url: '#' },
      { name: { en: 'PPT Slides', zh: '课件PPT' }, type: 'ppt', url: '#' }
    ]
  },
  {
    id: '3',
    title: {
      en: 'Physical Chemistry',
      zh: '物理化学'
    },
    description: {
      en: 'Applying physics principles to study the macroscopic and microscopic behavior of chemical systems.',
      zh: '应用物理学原理研究化学系统的宏观和微观行为。'
    },
    level: {
      en: 'Undergraduate Year 2',
      zh: '本科二年级'
    },
    resources: [
      { name: { en: 'Syllabus', zh: '课程大纲' }, type: 'pdf', url: '#' },
      { name: { en: 'Thermodynamics Notes', zh: '热力学讲义' }, type: 'pdf', url: '#' },
      { name: { en: 'Kinetics Notes', zh: '动力学讲义' }, type: 'pdf', url: '#' }
    ]
  },
  {
    id: '4',
    title: {
      en: 'Advanced Organic Chemistry',
      zh: '高等有机化学'
    },
    description: {
      en: 'In-depth study of organic reaction mechanisms, stereochemistry, and complex organic synthesis.',
      zh: '深入研究有机反应机理、立体化学和复杂有机合成。'
    },
    level: {
      en: 'Graduate',
      zh: '研究生'
    },
    resources: [
      { name: { en: 'Syllabus', zh: '课程大纲' }, type: 'pdf', url: '#' },
      { name: { en: 'Special Topics', zh: '专题讲座' }, type: 'video', url: '#' }
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: {
      en: 'Professor',
      zh: '教授'
    },
    institution: {
      en: 'Tashkent University of Information Technologies',
      zh: '塔什干信息技术大学'
    },
    startYear: 2018,
    endYear: null,
    description: {
      en: 'Teaching and research in organic chemistry',
      zh: '从事有机化学教学与研究工作'
    }
  },
  {
    id: '2',
    title: {
      en: 'Associate Professor',
      zh: '副教授'
    },
    institution: {
      en: 'National University of Uzbekistan',
      zh: '乌兹别克斯坦国立大学'
    },
    startYear: 2013,
    endYear: 2018,
    description: {
      en: 'Responsible for organic chemistry courses and research projects',
      zh: '负责有机化学课程教学及科研项目'
    }
  },
  {
    id: '3',
    title: {
      en: 'Postdoctoral Researcher',
      zh: '博士后研究员'
    },
    institution: {
      en: 'University of California, Berkeley',
      zh: '美国加州大学伯克利分校'
    },
    startYear: 2010,
    endYear: 2013,
    description: {
      en: 'Research in organic catalysis',
      zh: '从事有机催化研究'
    }
  },
  {
    id: '4',
    title: {
      en: 'PhD',
      zh: '博士'
    },
    institution: {
      en: 'Academy of Sciences of Uzbekistan',
      zh: '乌兹别克斯坦科学院'
    },
    startYear: 2005,
    endYear: 2010,
    description: {
      en: 'PhD in Organic Chemistry',
      zh: '有机化学专业博士学位'
    }
  }
];

export const awards: Award[] = [
  { 
    id: '1', 
    title: {
      en: 'State Prize in Science and Technology',
      zh: '国家科学技术奖'
    },
    organization: {
      en: 'Government of Uzbekistan',
      zh: '乌兹别克斯坦政府'
    },
    year: 2021 
  },
  { 
    id: '2', 
    title: {
      en: 'Young Scientist Award',
      zh: '青年科学家奖'
    },
    organization: {
      en: 'Academy of Sciences of Uzbekistan',
      zh: '乌兹别克斯坦科学院'
    },
    year: 2017 
  },
  { 
    id: '3', 
    title: {
      en: 'Uzbek Chemical Society Award',
      zh: '乌兹别克斯坦化学学会奖'
    },
    organization: {
      en: 'Uzbek Chemical Society',
      zh: '乌兹别克斯坦化学学会'
    },
    year: 2015 
  },
  { 
    id: '4', 
    title: {
      en: 'Excellent Teacher Award',
      zh: '教学优秀奖'
    },
    organization: {
      en: 'Tashkent University',
      zh: '塔什干大学'
    },
    year: 2020 
  }
];

export const researchAreas: ResearchArea[] = [
  {
    id: '1',
    title: {
      en: 'Organic Catalysis',
      zh: '有机催化'
    },
    description: {
      en: 'Developing novel organic catalysts and their applications in organic synthesis',
      zh: '开发新型有机催化剂，研究其在有机合成中的应用'
    },
    icon: 'FlaskConical'
  },
  {
    id: '2',
    title: {
      en: 'Green Chemistry',
      zh: '绿色化学'
    },
    description: {
      en: 'Exploring environmentally friendly chemical synthesis methods',
      zh: '探索环境友好的化学合成方法'
    },
    icon: 'Leaf'
  },
  {
    id: '3',
    title: {
      en: 'Materials Chemistry',
      zh: '材料化学'
    },
    description: {
      en: 'Research on the design and synthesis of functional materials',
      zh: '研究功能材料的设计与合成'
    },
    icon: 'Atom'
  },
  {
    id: '4',
    title: {
      en: 'Organic Synthesis',
      zh: '有机合成'
    },
    description: {
      en: 'Efficient synthesis strategies for complex organic molecules',
      zh: '复杂有机分子的高效合成策略'
    },
    icon: 'Beaker'
  }
];

export const news: News[] = [
  {
    id: '1',
    title: {
      en: 'Breakthrough in Organic Catalyst Design',
      zh: '有机催化剂设计取得突破性进展'
    },
    summary: {
      en: 'New organic catalyst achieves 99% selectivity in asymmetric synthesis',
      zh: '新型有机催化剂在不对称合成中实现99%的选择性'
    },
    content: {
      en: 'Our research team has successfully developed a new type of organic catalyst that demonstrates unprecedented selectivity in asymmetric synthesis reactions. This breakthrough has significant implications for pharmaceutical manufacturing.',
      zh: '我们的研究团队成功开发了一种新型有机催化剂，在不对称合成反应中展现出前所未有的选择性。这一突破对制药生产具有重要意义。'
    },
    date: '2024-05-15',
    category: { en: 'Research', zh: '研究' }
  },
  {
    id: '2',
    title: {
      en: 'Green Chemistry Initiative Launched',
      zh: '绿色化学倡议启动'
    },
    summary: {
      en: 'New program aims to reduce chemical waste by 50%',
      zh: '新项目旨在减少50%的化学废弃物'
    },
    content: {
      en: 'We are proud to announce the launch of our Green Chemistry Initiative, which focuses on developing sustainable synthetic methodologies. The program aims to reduce hazardous waste generation by 50% over the next five years.',
      zh: '我们很自豪地宣布启动绿色化学倡议，重点开发生可持续的合成方法。该项目旨在在未来五年内将危险废物产生减少50%。'
    },
    date: '2024-04-22',
    category: { en: 'Sustainability', zh: '可持续发展' }
  },
  {
    id: '3',
    title: {
      en: 'New Course on Advanced Materials',
      zh: '高级材料新课程上线'
    },
    summary: {
      en: 'New graduate course focuses on functional materials design',
      zh: '新研究生课程专注于功能材料设计'
    },
    content: {
      en: 'Starting this fall, we will offer a new graduate course on Advanced Materials Chemistry. The course will cover the latest developments in nanomaterials, polymers, and functional materials.',
      zh: '从今年秋季开始，我们将开设一门新的高级材料化学研究生课程。该课程将涵盖纳米材料、聚合物和功能材料的最新发展。'
    },
    date: '2024-03-10',
    category: { en: 'Education', zh: '教育' }
  },
  {
    id: '4',
    title: {
      en: 'International Collaboration Agreement',
      zh: '国际合作协议签署'
    },
    summary: {
      en: 'Partnership established with leading European chemistry lab',
      zh: '与欧洲领先化学实验室建立合作伙伴关系'
    },
    content: {
      en: 'We have signed a three-year collaboration agreement with the Max Planck Institute for Chemical Research. This partnership will facilitate student exchanges and joint research projects.',
      zh: '我们与马克斯普朗克化学研究所签署了为期三年的合作协议。这一合作将促进学生交流和联合研究项目。'
    },
    date: '2024-02-28',
    category: { en: 'Partnership', zh: '合作' }
  },
  {
    id: '5',
    title: {
      en: 'New Publication in Nature Chemistry',
      zh: '在《自然·化学》发表新论文'
    },
    summary: {
      en: 'Our latest work on metal-organic frameworks featured in prestigious journal',
      zh: '我们关于金属有机框架的最新工作登上著名期刊'
    },
    content: {
      en: 'Our paper on the design and application of novel metal-organic frameworks has been accepted for publication in Nature Chemistry. This work represents a significant advance in porous materials research.',
      zh: '我们关于新型金属有机框架设计和应用的论文已被《自然·化学》接受发表。这项工作代表了多孔材料研究的重大进展。'
    },
    date: '2024-01-18',
    category: { en: 'Publication', zh: '发表' }
  },
  {
    id: '6',
    title: {
      en: 'Summer School on Catalysis',
      zh: '催化暑期学校举办'
    },
    summary: {
      en: 'Annual summer school attracts 100+ students from 20 countries',
      zh: '年度暑期学校吸引了来自20个国家的100多名学生'
    },
    content: {
      en: 'The 8th Annual Summer School on Catalysis was a great success, featuring lectures from world-renowned experts and hands-on laboratory sessions.',
      zh: '第八届催化年度暑期学校取得了圆满成功，活动包括世界知名专家的讲座和实验室实操课程。'
    },
    date: '2023-12-05',
    category: { en: 'Events', zh: '活动' }
  }
];
