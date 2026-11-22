# 项目日志

本文件记录项目的需求、决策、实施、验证和后续维护信息。以后排查问题时，先按日期或状态标签
搜索本文件，再查看对应的 Git 提交。

## 记录规则

- 时区统一使用 `Asia/Shanghai`。
- 已完成事项使用 `[完成]`，已验证事项使用 `[已验证]`，需要后续处理的事项使用 `[待处理]`，
  重要技术选择使用 `[决策]`。
- 历史记录以追加为主。需要纠正旧记录时，新增一条“更正”说明，不覆盖原有事实。
- 每次发布新的可运行版本时，更新“项目快照”和“版本记录”。
- 日志中不记录密码、访问令牌、API Key、私钥、用户隐私或云平台控制台凭据。

## 项目快照

| 项目项 | 当前信息 |
| --- | --- |
| 项目名称 | MyFirstWeb |
| GitHub 仓库 | <https://github.com/lqxhhbp/MyFirstWeb> |
| 公网入口 | <https://lqxhhbp.github.io/MyFirstWeb/> |
| 项目类型 | Vue 3 单页静态网站 |
| 当前版本 | `0.1.1` |
| 当前阶段 | GitHub Pages 已上线，个人资料和毕业设计项目已更新 |
| 初始源码提交 | `45262b3df224a301c0e049818eb5a04aba24f358` |
| 部署状态 | GitHub Pages 部署成功 |
| 默认分支 | `main` |
| 主要语言 | TypeScript、Vue 单文件组件、CSS |
| Node.js 要求 | `^22.18.0 || >=24.12.0` |
| 推荐部署平台 | Cloudflare Pages |
| 推荐免费网址 | `项目名.pages.dev` |

## 当前能力

- [完成] 响应式首页，包含个人介绍、当前状态、精选项目和联系区域。
- [完成] 独立项目页，可展示项目名称、简介、标签和状态。
- [完成] 独立关于页，包含个人故事、基本信息和工作原则。
- [完成] Vue Router 页面导航，活动导航会高亮。
- [完成] 自定义 404 页面。
- [完成] 根据路由自动更新浏览器标签页标题。
- [完成] 桌面和手机布局，以及减少动态效果的无障碍适配。
- [完成] 站点头部、底部、跳到主要内容链接和键盘焦点样式。
- [完成] 站点基础 SEO 信息与 SVG favicon。
- [完成] Cloudflare Pages / Netlify 可用的 `_redirects` SPA 回退。
- [完成] 中文本地开发、内容修改和部署说明。
- [完成] 官方资料核验后的低成本和国内访问方案比较。
- [完成] GitHub Actions 自动构建并部署到 GitHub Pages。
- [完成] 为项目 Pages 地址配置 Vite 子路径和 history 路由回退。
- [完成] 首页和关于页显示个人姓名“两千响豪华鞭炮”。
- [完成] 首页、关于页和页脚显示两个可点击邮箱。
- [完成] 首张项目卡片展示“校园快递点导航与空闲度查询平台”及 GitHub 仓库链接。

## 技术栈

| 类别 | 组件 | 用途 |
| --- | --- | --- |
| 框架 | Vue 3 | 构建页面和复用组件 |
| 路由 | Vue Router | 首页、项目页、关于页和 404 |
| 构建 | Vite | 本地开发、类型检查和生产构建 |
| 语言 | TypeScript | 页面脚本和内容数据结构 |
| 样式 | 原生 CSS | 视觉、响应式布局和无障碍状态 |
| 质量检查 | ESLint、Oxlint、Prettier | 静态检查与代码格式化 |
| 版本管理 | Git | 保存源码和发布历史 |

## 目录说明

```text
.
├── public/
│   ├── _redirects            # Cloudflare Pages / Netlify 的 SPA 回退
│   └── favicon.svg           # 站点图标
├── src/
│   ├── assets/               # 全局颜色、字体和页面样式
│   ├── components/           # 站点头部和底部
│   ├── content/site.ts       # 姓名、简介、联系方式、项目和原则
│   ├── router/index.ts       # 页面路由和标题
│   ├── views/                # 首页、项目页、关于页、404 页
│   ├── App.vue               # 全站布局
│   └── main.ts               # Vue 应用入口
├── DEPLOYMENT_OPTIONS.md     # 平台比较、成本风险与上线计划
├── PROJECT_LOG.md            # 本文件
├── README.md                 # 本地运行和内容修改入口
├── index.html                # HTML 元信息
├── package.json              # 依赖、命令和 Node.js 版本要求
└── vite.config.ts            # Vite 与 `@` 路径别名
```

## 时间线

### 2026-11-21：需求确认与网站骨架

- [完成] 明确目标：低成本、电脑断网后他人仍能访问、方便后续编辑、前端以 Vue 3 为主。
- [完成] 使用 Vue 官方 `create-vue` 脚手架创建项目，安装 Vue、Vue Router、TypeScript、
  Vite、ESLint 和 Prettier。
- [完成] 将默认示例页替换为个人网站骨架，避免直接发布脚手架演示内容。
- [完成] 把常用个人资料和项目数据集中到 `src/content/site.ts`，降低后续维护成本。
- [完成] 增加首页、项目页、关于页和 404 页。
- [完成] 建立统一颜色、字体、间距、按钮、卡片和响应式规则。
- [完成] 删除脚手架示例组件和 Vue 默认 Logo，新增站点 favicon。
- [完成] 添加 `public/_redirects`，配置 `/* /index.html 200`。

### 2026-11-21：质量检查与视觉验证

- [已验证] `npm run format` 成功。
- [已验证] `npm run lint` 成功，Oxlint 和 ESLint 均无错误。
- [已验证] `npm run build` 成功，Vue 类型检查和生产构建均通过。
- [已验证] 生产构建转换 41 个模块。
- [已验证] 首页、`/projects`、`/about` 和未知路径 `/not-a-page` 均可正常渲染。
- [已验证] 浏览器控制台没有 error 或 warning。
- [已验证] 在 1440 × 1000 桌面视口和 390 × 844 手机视口检查布局，页面没有横向溢出。
- [已验证] 手机端导航、标题、按钮、项目卡片和尾部内容可正常排列。

### 2026-11-21：部署方案调研

- [完成] 按官方一手资料核验 GitHub Pages、Cloudflare Pages、Netlify、Vercel 和阿里云 OSS。
- [决策] 首推 GitHub 保存源码、Cloudflare Pages 自动构建和托管。
- [决策] 首版使用免费的 `*.pages.dev` 子域名，不提前购买域名或云服务器。
- [决策] 中国大陆对象存储只作为目标访客访问不理想时的第二阶段方案。
- [完成] 详细比较和官方链接保存到 `DEPLOYMENT_OPTIONS.md`。

### 2026-11-22：GitHub 初始化发布

- [完成] 核验 GitHub 仓库 `lqxhhbp/MyFirstWeb` 和 `main` 分支。
- [完成] 保留远端仓库历史，以当前完整项目替换初始化占位 README。
- [完成] 将 Vue 源码、依赖锁定文件、质量配置、部署研究和项目日志发布到 GitHub。
- [完成] 将仓库根目录作为网站项目根目录，便于 Cloudflare Pages 直接连接部署。
- [已验证] 初始源码提交为
  [`45262b3df224a301c0e049818eb5a04aba24f358`](https://github.com/lqxhhbp/MyFirstWeb/commit/45262b3df224a301c0e049818eb5a04aba24f358)。
- [已验证] 通过 GitHub 接口重新读取 `PROJECT_LOG.md` 和 `src/content/site.ts`，远端内容与本地一致。
- [已验证] 本地 `main` 跟踪 `origin/main`，工作区干净。

### 2026-11-22：首次推送连接问题与处理

- [记录] 直接执行 Git fetch/push 时，当前网络环境无法连接 `github.com:443`。
- [记录] 检测到 Clash Plus 的本地混合代理监听在 `127.0.0.1:7877`。
- [完成] 仅在 Git 推送命令中临时设置 `HTTP_PROXY` 和 `HTTPS_PROXY`，没有修改系统全局代理。
- [记录] 全局 `helper-selector` 被继承后会在选择窗口阻塞；该仓库已改为项目级
  Git Credential Manager 配置。
- [已验证] 通过本地代理和 Git Credential Manager 成功推送，后续无需再选择凭据助手。

### 2026-11-22：GitHub Pages 首次上线

- [完成] 增加 `.github/workflows/deploy-pages.yml`，在 `main` 更新后自动构建 `dist/` 并部署。
- [完成] Vite 支持通过 `VITE_BASE_PATH` 使用 GitHub Pages 项目子路径。
- [完成] 构建后复制 `index.html` 为 `404.html`，为 Vue history 路由提供回退入口。
- [决策] 当前阶段先用 GitHub Pages 提供即时可访问的验收入口；Cloudflare Pages 仍作为后续
  正式发布和自定义域名的首选方案。
- [记录] 首次 push 触发的部署失败：仓库尚未启用 Pages，Actions 临时令牌无法创建 Pages 站点。
- [完成] 使用仓库管理员已存储的授权启用 GitHub Pages，并重新触发部署工作流。
- [已验证] 工作流运行 `44926853775` 的 build 和 deploy 均成功。
- [已验证] 入口 `https://lqxhhbp.github.io/MyFirstWeb/` 返回 HTTP 200。
- [已验证] 首次发布时线上页面标题为“你的名字 · 个人网站”（后续已更新），入口 HTML 已引用
  `/MyFirstWeb/assets/` 下的构建资源。
- [待处理] `/projects` 和 `/about` 直接访问会由 GitHub Pages 返回 404 状态，但会加载
  `404.html` 中的 Vue 应用入口；正式对外发布前可切换到 Cloudflare Pages 获得标准 SPA rewrite。

### 2026-11-22：个人资料与毕业设计项目更新

- [完成] 将站点姓名更新为“两千响豪华鞭炮”，站点首字标识更新为“两”。
- [完成] 将单一示例邮箱改为两个可独立点击的邮箱：
  `13560620383@163.com` 和 `cakt310783137@qq.com`。
- [完成] 读取 `E:\毕业设计\README.md`，确认项目名称为“校园快递点导航与空闲度查询平台”。
- [完成] 将首页“最近的项目”中的“作品集主页”替换为毕业设计项目。
- [完成] 项目简介概括 Spring Boot 3、Vue 3、百度地图 GL API，以及校园快递业务闭环。
- [完成] 在项目简介下增加毕业设计 GitHub 仓库：
  <https://github.com/lqxhhbp/bi-ye-she-ji>。
- [完成] 同步更新项目列表页，保证首页和项目页展示一致。
- [记录] 初次类型检查发现 `satisfies Project[]` 被误加到“工作原则”数组，已移动到项目数组。
- [已验证] `npm run format` 通过。
- [已验证] `npm run lint` 通过。
- [已验证] 使用 `VITE_BASE_PATH=/MyFirstWeb/` 执行 `npm run build` 通过。

## 关键决策

### D-001：使用 Vue 官方脚手架

采用 Vue 官方 `create-vue`，选择 TypeScript、Vue Router 和基础代码检查。这样得到的目录结构与
Vue 官方文档一致，后续升级和查资料更直接。

### D-002：使用三页结构而不是单页堆叠

首页、项目页、关于页分开，便于内容增长和分享独立链接。未知地址使用自定义 404，避免暴露空白页。

### D-003：集中管理常用内容

姓名、角色、首页文案、联系方式、项目和原则集中在 `src/content/site.ts`。页面只负责结构和展示，
减少修改内容时漏改或改错的风险。

### D-004：不引入 UI 组件库

当前页面规模较小，原生 CSS 足以完成视觉效果和响应式布局。暂不引入 UI 库，减少依赖体积、升级
负担和不必要的抽象。

### D-005：第一阶段使用静态托管

网站当前没有登录、数据库、支付或服务端私密接口，因此不需要云服务器。用户电脑关机后继续访问的
前提是把构建产物发布到云平台，而不是在本机开放端口。

### D-006：优先 Cloudflare Pages

当前项目使用 history 路由，Cloudflare Pages 可直接使用仓库中的 `_redirects` 处理刷新。免费计划
每月 500 次构建，静态资源请求免费且不限量，并支持公开或私有 GitHub 仓库。

## 验证记录

### 2026-11-21 本地质量门禁

```sh
npm run lint
npm run build
```

结果：

- `oxlint`：通过。
- `eslint`：通过。
- `vue-tsc --build`：通过。
- Vite 生产构建：通过。
- 构建产物目录：`dist/`。

### 2026-11-21 浏览器验收

- 路由：`/`、`/projects`、`/about`、`/not-a-page`。
- 设备：桌面 1440 × 1000；手机 390 × 844。
- 控制台：无 error、无 warning。
- 溢出检查：手机页面 `scrollWidth` 小于视口宽度。
- 标题检查：不同路由的浏览器标题会随页面更新。

## 当前占位内容

个人姓名、邮箱和首个毕业设计项目已经替换。其余示例内容仍可按需调整：

- [待处理] 职业描述、所在地、当前在做的事项和可合作状态。
- [待处理] 第二、第三个示例项目及其描述、标签、状态。
- [待处理] `src/views/AboutView.vue` 中的示例个人故事。
- [待处理] `index.html` 中的页面描述和主题色。

## 已知限制

- [风险] GitHub Pages 项目站当前没有原生 SPA rewrite，直接访问子页面会返回 HTTP 404 状态，
  但页面内容仍可通过 `404.html` 回退加载。
- [待处理] 还没有购买独立域名，也没有配置 DNS。
- [待处理] 中国大陆访问质量尚未在目标运营商和目标地区实测。
- [待处理] 静态站不能安全保存服务端密钥，也不能直接提供用户登录、数据库写入或支付能力。
- [风险] 免费额度与计费条款可能变化，使用前应重新查看平台控制台和官方定价。
- [风险] 如果改用 GitHub Pages，当前 history 路由需要额外的 SPA 回退处理。
- [风险] 如果改用国内对象存储，中国内地 Bucket 的自定义域名需要完成 ICP 备案。
- [风险] 如果以后增加后端，应把秘密数据放在服务端或平台环境变量中，不能写入前端源码。

## 部署状态与待办

### GitHub Pages 当前配置

| 配置项 | 值 |
| --- | --- |
| 公网入口 | <https://lqxhhbp.github.io/MyFirstWeb/> |
| 部署分支 | `main` |
| 构建方式 | GitHub Actions |
| 工作流 | `.github/workflows/deploy-pages.yml` |
| Node.js | `22` |
| 构建命令 | `npm run build` |
| 产物目录 | `dist/` |
| SPA 回退 | 构建后将 `index.html` 复制为 `404.html` |

### Cloudflare Pages 后续建议配置

| 配置项 | 值 |
| --- | --- |
| 仓库 | `lqxhhbp/MyFirstWeb` |
| Production branch | `main` |
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | 仓库根目录 |
| Node.js | 当前默认镜像满足要求；需要固定时设置 `NODE_VERSION=22.18.0` |

### 上线前待办

- [待处理] 替换所有占位个人资料。
- [待处理] 在本地再次执行 `npm run lint` 和 `npm run build`。
- [待处理] 决定是否迁移到 Cloudflare Pages 以获得标准 SPA rewrite。
- [待处理] 迁移后检查首页、项目页、关于页、直接刷新子页面和 404。
- [待处理] 在 Wi-Fi、手机流量及非同网络设备上测试访问。
- [待处理] 根据访问结果决定是否购买域名或切换国内对象存储。

## 新人本地操作

首次拉取仓库：

```sh
git clone https://github.com/lqxhhbp/MyFirstWeb.git
cd MyFirstWeb
npm install
npm run dev
```

日常修改和发布：

```sh
npm run lint
npm run build
git add .
git commit -m "docs: update site content"
git push
```

如果尚未配置 Git 提交身份，需要先执行：

```sh
git config user.name "你的 GitHub 名称"
git config user.email "你的 GitHub 邮箱"
```

## 版本记录

| 版本 | 日期 | 状态 | 说明 |
| --- | --- | --- | --- |
| `0.1.0` | 2026-11-22 | GitHub Pages 已上线 | 完成 Vue 3 页面、响应式样式、部署研究、GitHub 初始化发布和自动部署 |
| `0.1.1` | 2026-11-22 | 内容已更新 | 更新个人姓名、双邮箱和毕业设计项目展示 |

初始内容提交：
[`45262b3df224a301c0e049818eb5a04aba24f358`](https://github.com/lqxhhbp/MyFirstWeb/commit/45262b3df224a301c0e049818eb5a04aba24f358)

## 后续日志模板

```markdown
### YYYY-MM-DD：主题

- [完成] 修改了什么。
- [决策] 为什么采用该方案，放弃了什么。
- [已验证] 使用什么命令或方式验证，结果如何。
- [待处理] 仍未解决的问题。
- 影响文件：`path/to/file`
- Git 提交：`提交 SHA 或提交标题`
```
