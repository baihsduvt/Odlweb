# Professor Abdullajon Odilov - Personal Website

一个现代化、响应式的化学家个人网站，基于 React、TypeScript 和 Tailwind CSS 构建。

## 📋 项目简介

这是一个展示乌兹别克斯坦化学家 **Abdullajon Odilov** 教授个人学术成果的专业网站。网站提供了完整的多语言支持（中/英文），包含研究成果、教学资源、学术新闻和个人介绍等核心内容。

## 🛠 技术栈

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式框架**：Tailwind CSS
- **路由管理**：React Router DOM v6
- **图标库**：Lucide React
- **包管理器**：pnpm

## ✨ 功能特性

### 🎯 核心功能

- **多语言支持**：支持中英文切换，默认语言为英文
- **响应式设计**：完美适配桌面端、平板和移动端设备
- **单页面应用**：流畅的页面切换体验
- **现代UI设计**：采用渐变背景、毛玻璃效果和流畅动画

### 📄 页面内容

1. **首页 (Home)**
   - Hero 区域展示和动态背景
   - 研究亮点卡片
   - 统计数据展示（论文数、引用数等）
   - 快速导航入口

2. **研究页面 (Research)**
   - 发表论文列表展示
   - 搜索和筛选功能
   - 可展开的论文摘要
   - 按年份和期刊分类

3. **教学页面 (Teaching)**
   - 教授课程信息展示
   - 课程资源和资料下载
   - 按难度等级分类

4. **新闻页面 (News)**
   - 最新学术动态
   - 按类别筛选（研究、教育、合作等）
   - 完整新闻内容展示

5. **关于页面 (About)**
   - 个人简介和照片
   - 教育背景时间线
   - 获奖荣誉
   - 联系方式

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装步骤

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

### 开发脚本

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器 (http://localhost:5173) |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览生产构建 |
| `pnpm lint` | 运行 ESLint 代码检查 |
| `pnpm check` | TypeScript 类型检查 |

## 📁 项目结构

```
src/
├── components/          # React 组件
│   ├── Header.tsx       # 顶部导航栏
│   ├── Footer.tsx        # 底部信息栏
│   ├── Hero.tsx          # 首页英雄区域
│   ├── ResearchCard.tsx  # 研究卡片
│   ├── PaperCard.tsx     # 论文卡片
│   ├── CourseCard.tsx    # 课程卡片
│   └── Timeline.tsx      # 时间线组件
├── contexts/
│   └── LanguageContext.tsx  # 语言切换上下文
├── pages/
│   ├── HomePage.tsx      # 首页
│   ├── ResearchPage.tsx  # 研究页面
│   ├── TeachingPage.tsx  # 教学页面
│   ├── NewsPage.tsx      # 新闻页面
│   └── AboutPage.tsx     # 关于页面
├── data/
│   └── mockData.ts       # 模拟数据
├── App.tsx               # 应用主组件
├── main.tsx              # 入口文件
└── index.css             # 全局样式
```

## 🎨 设计特点

### 色彩方案

- **主色调**：深蓝色 (#1e3a8a)
- **强调色**：青色 (#06b6d4)
- **背景色**：浅灰色渐变

### 交互设计

- 平滑的页面过渡动画
- 悬停效果和点击反馈
- 滚动时导航栏样式变化
- 当前页面导航高亮显示

### 响应式断点

- **移动端**：< 768px
- **平板端**：768px - 1024px
- **桌面端**：> 1024px

## 📝 内容配置

### 数据文件

所有网站内容数据都存储在 `src/data/mockData.ts` 文件中，包括：

- 教授信息
- 论文列表（包含作者、期刊、摘要等）
- 课程信息
- 新闻动态
- 时间线数据

### 翻译配置

翻译文件位于 `src/contexts/LanguageContext.tsx`，包含所有界面文本的中英文对照。

## 🔧 自定义配置

### 添加新页面

1. 在 `src/pages/` 目录创建新页面组件
2. 在 `src/App.tsx` 中添加路由
3. 在 `src/components/Header.tsx` 的 `navLinks` 中添加导航链接
4. 在翻译文件中添加对应的翻译键值

### 修改主题颜色

编辑 `tailwind.config.js` 文件中的 `colors.primary` 配置。

## 📄 许可证

本项目仅供学术展示使用。

## 👨‍🔬 关于作者

**Abdullajon Odilov**  
乌兹别克斯坦化学家  
塔什干信息技术大学

- 📧 邮箱：abdullajon.odilov@tuit.uz
- 📍 地址：塔什干信息技术大学，乌兹别克斯坦

---

*最后更新：2026年5月19日*
