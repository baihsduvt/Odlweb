# Professor Abdullajon Odilov 个人学术网站 - 详细技术说明

## 目录
1. [项目概述](#1-项目概述)
2. [技术架构与栈](#2-技术架构与栈)
3. [项目业务流程](#3-项目业务流程)
4. [服务器与前端页面加载流程](#4-服务器与前端页面加载流程)
5. [核心功能实现逻辑](#5-核心功能实现逻辑)
6. [关键函数与模块](#6-关键函数与模块)
7. [数据结构与数据流](#7-数据结构与数据流)

---

## 1. 项目概述

### 项目类型
这是一个个人学术展示网站，用于展示化学家 Abdullajon Odilov 教授的学术成果、教学内容、研究领域和个人信息。

### 核心功能模块
- **首页 (Home)**: 展示研究领域亮点、近期论文和统计数据
- **研究成果 (Research)**: 完整论文列表，支持搜索和年份筛选
- **教学内容 (Teaching)**: 课程信息和学习资源
- **学术新闻 (News)**: 新闻动态，支持分类筛选
- **关于我 (About)**: 个人简介、学术经历、荣誉奖项和联系方式

### 多语言支持
- 英语 (en)
- 中文 (zh)

---

## 2. 技术架构与栈

### 前端框架与库
```
React 18.3.1          - UI 框架
TypeScript 5.8.3       - 类型安全
React Router DOM v7    - 路由管理
Zustand 5.0.3          - 状态管理（项目中已引入但未核心使用）
Lucide React 0.511.0   - 图标库
```

### 样式与工具
```
Tailwind CSS 3.4.17    - 原子化 CSS 框架
clsx 2.1.1             - 条件类名构建
tailwind-merge 3.0.2   - Tailwind 类名合并工具
```

### 构建工具
```
Vite 6.3.5             - 构建工具与开发服务器
@vitejs/plugin-react   - React 热更新支持
vite-tsconfig-paths    - TypeScript 路径别名支持
```

### 外部依赖来源
| 模块 | 来源 | 用途 |
|------|------|------|
| `react` | npm | 核心 UI 框架 |
| `react-router-dom` | npm | 单页应用路由 |
| `lucide-react` | npm | 图标组件 |
| `clsx` | npm | 类名条件组合 |
| `tailwind-merge` | npm | Tailwind 类名合并 |

---

## 3. 项目业务流程

### 用户访问流程
```
1. 用户访问网站
   ↓
2. 加载 index.html
   ↓
3. 初始化 React 应用 (main.tsx)
   ↓
4. 挂载 LanguageProvider (语言上下文)
   ↓
5. 挂载 Router (路由)
   ↓
6. 根据当前路由渲染对应页面组件
   ↓
7. 用户与页面交互 → 触发状态更新 → 重新渲染
```

### 页面导航流程
```
Header 组件
  ↓
监听 useLocation() 变化
  ↓
高亮当前活动路由
  ↓
用户点击导航链接
  ↓
Router 切换路由
  ↓
渲染新页面组件
```

### 语言切换流程
```
用户点击语言切换按钮 (EN/中)
  ↓
调用 setLanguage() 函数 (LanguageContext)
  ↓
更新 language 状态 ('en' ↔ 'zh')
  ↓
触发所有使用 useLanguage() 的组件重新渲染
  ↓
通过 t() 函数获取对应语言的文本
```

---

## 4. 服务器与前端页面加载流程

### 开发环境加载流程

#### 1. 服务器启动
```bash
# 执行命令: pnpm dev
# 或: bash scripts/coze-preview-run.sh
```

**加载步骤**:
1. Vite 开发服务器启动，监听 5000 端口
2. 读取 `vite.config.ts` 配置
3. 加载 React 插件，启用热更新 (HMR)
4. 准备模块预构建

#### 2. 浏览器加载流程
```
浏览器请求 http://localhost:5000
  ↓
服务器返回 index.html
  ↓
解析 HTML，加载 src/main.tsx (入口模块)
  ↓
Vite 进行模块转换和依赖预构建
  ↓
加载 React、React DOM 等核心依赖
  ↓
执行 main.tsx: createRoot().render(<App />)
  ↓
App 组件初始化:
  - LanguageProvider 初始化 (默认语言: 'en')
  - BrowserRouter 初始化
  - Header 组件挂载
  - Footer 组件挂载
  - 根据路由渲染页面组件
  ↓
页面完全渲染，用户可交互
```

### 生产环境加载流程

#### 1. 构建过程
```bash
# 执行命令: pnpm build
# 或: bash scripts/build.sh
```

**构建步骤**:
1. TypeScript 类型检查 (`tsc -b`)
2. Vite 生产构建
3. 代码压缩和树摇
4. 生成 `dist/` 目录下的静态文件
5. 生成隐藏 sourcemap (用于调试)

#### 2. 生产服务器启动
```bash
# 执行命令: bash scripts/run.sh
# 内部使用: npx serve dist -l 5000
```

**生产加载流程**:
```
浏览器请求
  ↓
serve 静态文件服务器接收请求
  ↓
返回 index.html
  ↓
加载打包后的 JavaScript 和 CSS
  ↓
React 应用 hydration
  ↓
应用交互可用
```

---

## 5. 核心功能实现逻辑

### 5.1 多语言国际化 (i18n) 实现

#### 核心模块: `src/contexts/LanguageContext.tsx`

**实现逻辑**:
```typescript
// 1. 定义语言类型
type Language = 'en' | 'zh';

// 2. 创建 Context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 3. 翻译数据结构
const translations = {
  en: { /* 英文翻译键值对 */ },
  zh: { /* 中文翻译键值对 */ }
};

// 4. Provider 组件
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');
  
  // 翻译函数: 通过 key 获取对应语言的文本
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 5. Hook: 供组件使用
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
```

**使用方式**:
```typescript
// 在组件中
const { t, language, setLanguage } = useLanguage();

// 获取翻译文本
{t('nav.home')} // 返回 '首页' 或 'Home'

// 切换语言
setLanguage('zh'); // 切换到中文
```

### 5.2 路由管理实现

#### 核心模块: `src/App.tsx`

**实现逻辑**:
```typescript
export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />           {/* 固定导航栏 */}
        <main>
          <Routes>
            {/* 路由配置 */}
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/teaching" element={<TeachingPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />           {/* 固定页脚 */}
      </Router>
    </LanguageProvider>
  );
}
```

**Header 路由高亮逻辑** (`src/components/Header.tsx`):
```typescript
const location = useLocation(); // 获取当前路由

// 遍历导航链接，判断是否为当前活动路由
{navLinks.map((link) => {
  const isActive = location.pathname === link.href;
  return (
    <a
      className={isActive ? 'text-primary' : 'text-gray-600'}
      href={link.href}
    >
      {t(link.nameKey)}
    </a>
  );
})}
```

### 5.3 论文搜索与筛选功能

#### 核心模块: `src/pages/ResearchPage.tsx`

**实现逻辑**:

```typescript
export default function ResearchPage() {
  // 状态管理
  const [searchTerm, setSearchTerm] = useState('');      // 搜索关键词
  const [selectedYear, setSelectedYear] = useState<number | null>(null); // 年份筛选
  
  // 获取所有不重复的年份，降序排列
  const years = [...new Set(papers.map((p) => p.year))].sort((a, b) => b - a);
  
  // 双重筛选逻辑
  const filteredPapers = papers.filter((paper) => {
    // 1. 搜索匹配: 标题、作者、期刊
    const matchesSearch =
      paper.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.some((author) =>
        author[language].toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      paper.journal[language].toLowerCase().includes(searchTerm.toLowerCase());
    
    // 2. 年份匹配
    const matchesYear = selectedYear === null || paper.year === selectedYear;
    
    return matchesSearch && matchesYear;
  });
  
  return (
    // 渲染搜索框、筛选下拉框、论文列表
  );
}
```

### 5.4 论文摘要展开/收起功能

#### 核心模块: `src/components/PaperCard.tsx`

**实现逻辑**:
```typescript
export default function PaperCard({ paper }: PaperCardProps) {
  // 每篇论文独立的展开状态
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div>
      {/* 论文基本信息 */}
      
      {/* 条件渲染摘要 */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p>{paper.abstract[language]}</p>
        </div>
      )}
      
      {/* 切换按钮 */}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Hide Abstract' : 'View Abstract'}
      </button>
    </div>
  );
}
```

### 5.5 新闻分类筛选与展开功能

#### 核心模块: `src/pages/NewsPage.tsx`

**实现逻辑**:

```typescript
export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedNews, setExpandedNews] = useState<string | null>(null);
  
  // 获取所有不重复的分类
  const categories = [...new Set(news.map((n) => n.category[language]))];
  
  // 分类筛选
  const filteredNews = news.filter((item) => {
    if (selectedCategory === null) return true;
    return item.category[language] === selectedCategory;
  });
  
  // 单篇新闻展开/收起 (互斥逻辑: 同时只展开一篇)
  const toggleExpanded = (id: string) => {
    setExpandedNews(expandedNews === id ? null : id);
  };
  
  return (
    // 渲染分类按钮和新闻列表
  );
}
```

### 5.6 导航栏滚动效果

#### 核心模块: `src/components/Header.tsx`

**实现逻辑**:
```typescript
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // 滚动超过 50px 时改变样式
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // 清理
  }, []);
  
  // 动态样式: 首页透明，滚动后模糊背景
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? (isScrolled ? 'bg-white/70 backdrop-blur-lg' : 'bg-transparent')
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      {/* 导航内容 */}
    </header>
  );
}
```

---

## 6. 关键函数与模块

### 6.1 工具函数模块

#### `src/lib/utils.ts` - 样式工具函数

**函数: `cn()`**
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**来源模块**:
- `clsx`: npm 包，用于条件类名构建
- `tailwind-merge`: npm 包，用于合并 Tailwind 类名，解决冲突

**用途**: 安全地组合 Tailwind CSS 类名，自动处理冲突
```typescript
// 使用示例
cn(
  'bg-white',
  isActive && 'bg-primary',
  isDisabled && 'opacity-50'
)
```

### 6.2 语言上下文函数

#### `src/contexts/LanguageContext.tsx`

**核心函数**:

1. **`t(key: string): string`**
   - **功能**: 获取翻译文本
   - **参数**: 翻译键 (如 'nav.home')
   - **返回**: 当前语言对应的文本，如果键不存在则返回 key 本身
   - **实现**: `translations[language][key] || key`

2. **`setLanguage(lang: Language): void`**
   - **功能**: 切换应用语言
   - **参数**: 'en' 或 'zh'
   - **效果**: 触发所有使用 `useLanguage()` 的组件重新渲染

### 6.3 组件内部状态管理函数

#### `src/pages/ResearchPage.tsx`

**`setSearchTerm(value: string): void`**
- 来自: `useState('')`
- 功能: 更新搜索关键词，触发论文重新筛选

**`setSelectedYear(year: number | null): void`**
- 来自: `useState<number | null>(null)`
- 功能: 更新年份筛选条件

#### `src/components/PaperCard.tsx`

**`setIsExpanded(value: boolean): void`**
- 来自: `useState(false)`
- 功能: 控制单篇论文摘要的展开/收起

#### `src/pages/NewsPage.tsx`

**`toggleExpanded(id: string): void`**
- 自定义函数
- 功能: 切换新闻展开状态，实现互斥展开
- 逻辑: `setExpandedNews(expandedNews === id ? null : id)`

### 6.4 导航与路由相关函数

#### `src/components/Header.tsx`

**`toggleLanguage(): void`**
- 自定义函数
- 功能: 在英语和中文之间切换
- 逻辑: `setLanguage(language === 'en' ? 'zh' : 'en')`

**`handleScroll(): void`**
- 事件处理函数
- 功能: 监听滚动位置，更新 `isScrolled` 状态
- 绑定: `window.addEventListener('scroll', handleScroll)`

---

## 7. 数据结构与数据流

### 7.1 核心数据类型定义

#### `src/data/mockData.ts`

**`LocalizedString` - 多语言字符串结构**
```typescript
interface LocalizedString {
  en: string;  // 英文文本
  zh: string;  // 中文文本
}
```

**`Paper` - 论文数据结构**
```typescript
interface Paper {
  id: string;
  title: LocalizedString;           // 标题
  authors: LocalizedString[];        // 作者列表
  journal: LocalizedString;          // 期刊
  year: number;                      // 年份
  citations: number;                 // 引用次数
  abstract: LocalizedString;         // 摘要
}
```

**`Course` - 课程数据结构**
```typescript
interface Course {
  id: string;
  title: LocalizedString;           // 课程标题
  description: LocalizedString;     // 课程描述
  level: LocalizedString;           // 难度级别
  resources: Resource[];            // 学习资源
}
```

**`Resource` - 学习资源结构**
```typescript
interface Resource {
  name: LocalizedString;            // 资源名称
  type: 'pdf' | 'ppt' | 'video';   // 资源类型
  url: string;                       // 下载链接
}
```

**`Experience` - 学术经历结构**
```typescript
interface Experience {
  id: string;
  title: LocalizedString;           // 职位
  institution: LocalizedString;     // 机构
  startYear: number;                // 开始年份
  endYear: number | null;           // 结束年份 (null 表示至今)
  description: LocalizedString;     // 描述
}
```

**`Award` - 荣誉奖项结构**
```typescript
interface Award {
  id: string;
  title: LocalizedString;           // 奖项名称
  organization: LocalizedString;    // 颁发机构
  year: number;                     // 获奖年份
}
```

**`ResearchArea` - 研究领域结构**
```typescript
interface ResearchArea {
  id: string;
  title: LocalizedString;           // 领域名称
  description: LocalizedString;     // 描述
  icon: string;                      // 图标名称 (Lucide React)
}
```

**`News` - 新闻数据结构**
```typescript
interface News {
  id: string;
  title: LocalizedString;           // 标题
  summary: LocalizedString;         // 摘要
  content: LocalizedString;         // 完整内容
  date: string;                      // 发布日期 (YYYY-MM-DD)
  category: LocalizedString;        // 分类
  imageUrl?: string;                 // 图片 (可选)
}
```

### 7.2 数据流示意图

#### 首页数据流
```
mockData.ts
  ├─ researchAreas[]
  │   ↓
  └─ papers[] (slice 0, 3 → recentPapers)
      ↓
  HomePage 组件
      ↓
  ResearchCard 组件 + PaperCard 组件
```

#### 研究页面数据流
```
mockData.ts → papers[]
                ↓
        ResearchPage 组件
                ↓
    ┌───────────┴───────────┐
    ↓                       ↓
searchTerm           selectedYear
    ↓                       ↓
    └───────────┬───────────┘
                ↓
        filteredPapers[]
                ↓
        PaperCard 组件
```

#### 语言切换数据流
```
用户点击切换按钮
        ↓
setLanguage() ← LanguageContext
        ↓
    language 状态更新
        ↓
    重新渲染所有组件
        ↓
    t(key) 返回新语言文本
```

### 7.3 Mock 数据内容概览

**数据统计**:
- **论文**: 5 篇 (2022-2024)
- **课程**: 4 门 (本科1年级 - 研究生)
- **学术经历**: 4 段 (2005-至今)
- **荣誉奖项**: 4 项 (2015-2021)
- **研究领域**: 4 个
- **新闻**: 6 条

---

## 总结

这是一个典型的 React + TypeScript 单页应用，采用以下设计模式:

1. **Context API**: 用于全局语言状态管理
2. **组件化**: 每个功能模块拆分为独立组件
3. **声明式路由**: React Router 声明式路由配置
4. **本地状态**: 使用 `useState` 管理组件本地状态
5. **条件渲染**: 根据状态动态显示/隐藏内容
6. **Mock 数据**: 所有数据来自本地 mock，便于开发和演示
