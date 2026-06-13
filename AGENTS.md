# 项目概述

Professor Abdullajon Odilov - 个人学术网站，展示化学家 Abdullajon Odilov 教授的个人学术成果，包含研究成果、教学资源、学术新闻和个人介绍等核心内容。

## 技术栈

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式框架**：Tailwind CSS
- **路由管理**：React Router DOM v7
- **状态管理**：Zustand
- **图标库**：Lucide React
- **包管理器**：pnpm
- **Node.js**：>= 18.0.0（平台使用 nodejs-24）

## 目录结构

```
/workspace/projects/
├── index.html              # HTML 入口
├── package.json            # 依赖配置
├── vite.config.ts          # Vite 配置
├── tailwind.config.js      # Tailwind 配置
├── tsconfig.json           # TypeScript 配置
├── src/                    # 源码目录
│   ├── main.tsx            # React 入口
│   ├── App.tsx             # 应用根组件
│   ├── components/         # React 组件
│   ├── pages/             # 页面组件
│   ├── contexts/           # React Context
│   ├── hooks/              # 自定义 Hooks
│   ├── data/               # Mock 数据
│   └── lib/                # 工具函数
├── scripts/               # 构建和运行脚本
│   ├── coze-preview-build.sh
│   ├── coze-preview-run.sh
│   ├── build.sh
│   └── run.sh
└── dist/                   # 构建产物目录
```

## 运行与预览

### 开发预览（5000 端口）

```bash
# 启动预览服务
bash scripts/coze-preview-run.sh

# 验证预览服务
curl -s -o /dev/null -w '%{http_code}' --max-time 5 http://localhost:5000
# 应返回 200
```

### 生产构建与部署

```bash
# 构建
bash scripts/build.sh

# 运行部署服务（5000 端口）
bash scripts/run.sh
```

## 关键入口

- **开发入口**：`pnpm dev`（Vite dev server）
- **生产构建**：`pnpm vite build`
- **预览构建脚本**：`scripts/coze-preview-build.sh`
- **预览运行脚本**：`scripts/coze-preview-run.sh`
- **部署构建脚本**：`scripts/build.sh`
- **部署运行脚本**：`scripts/run.sh`

## .coze 配置

根 `.coze` 位于 `/workspace/projects/.coze`（技术项目根目录与工作区根目录重合）：

```toml
[project]
sub_id = "62fa8e90"
name = "workspace"
requires = ["nodejs-24"]
project_type = "web"
entrypoint = "index.html"

[preview]
preview_enable = "enabled"

[dev]
build = ["bash", "scripts/coze-preview-build.sh"]
run = ["bash", "scripts/coze-preview-run.sh"]

[deploy]
build = ["bash", "scripts/build.sh"]
run = ["bash", "scripts/run.sh"]

[deploy.profile]
kind = "service"
flavor = "web"
```

## 用户偏好与长期约束

1. **包管理器**：必须使用 `pnpm`，禁止使用 `npm` 或 `yarn`
2. **端口约束**：预览和部署服务统一使用 5000 端口，禁止使用 9000 端口
3. **Node.js 版本**：平台使用 nodejs-24，项目要求 >= 18.0.0
4. **预览服务**：常驻进程，验证通过 curl 和 ss 确认存活
5. **脚本幂等性**：运行脚本应具备幂等性，重复执行不会产生冲突

## 常见问题和预防

1. **pnpm exec vite 找不到**：使用 `pnpm vite` 或绝对路径 `/workspace/projects/node_modules/.bin/vite`
2. **端口占用**：启动前清理 5000 端口残留进程 `fuser -k 5000/tcp`
3. **构建产物目录**：Vite 默认输出到 `dist/`，部署服务通过 `npx serve dist` 提供静态文件
4. **工作目录**：脚本应基于自身位置定位项目目录，不依赖调用时的当前工作目录
