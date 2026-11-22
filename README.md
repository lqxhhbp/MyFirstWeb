# 个人网站

一个使用 Vue 3、TypeScript、Vue Router 和 Vite 搭建的个人网站骨架。它不需要自己的服务器：
构建后会生成一组静态文件，可以交给静态托管平台发布。

当前版本为 `0.1.2`，已完成个人资料更新、毕业设计项目展示，并部署到 GitHub Pages。

- 网站入口：<https://lqxhhbp.github.io/MyFirstWeb/>
- GitHub 仓库：<https://github.com/lqxhhbp/MyFirstWeb>

- [项目日志](./PROJECT_LOG.md)：需求、决策、验证结果、已知限制和后续维护记录。
- [部署方案](./DEPLOYMENT_OPTIONS.md)：低成本平台比较、中国大陆访问风险和上线计划。

## 本地运行

需要 Node.js 22.18 或更高版本。

```sh
npm install
npm run dev
```

终端会显示本地访问地址，通常是 `http://localhost:5173`。

## 修改网站内容

大部分个人资料和项目内容都集中在：

```text
src/content/site.ts
```

先替换姓名、简介、邮箱、所在地和项目条目，再按需修改各页面的文字：

- `src/views/HomeView.vue`：首页
- `src/views/ProjectsView.vue`：项目列表
- `src/views/AboutView.vue`：关于页
- `src/assets/base.css`：颜色和字体
- `src/assets/main.css`：页面布局和组件样式

## 常用命令

```sh
npm run dev      # 本地开发，修改后自动刷新
npm run lint     # 检查代码问题
npm run format   # 格式化 src 目录
npm run build    # 生产构建，输出到 dist
npm run preview  # 本地预览生产构建
```

## 目录结构

```text
src/
├── assets/      全局样式
├── components/  站点头部、底部等复用组件
├── content/     网站文字和项目数据
├── router/      页面路由
├── views/       页面组件
├── App.vue      全站布局
└── main.ts      Vue 应用入口
```

## 上线之前

1. 把 `site.ts` 和页面里的占位内容替换成真实信息。
2. 执行 `npm run lint` 和 `npm run build`，确认构建成功。
3. 选择静态托管平台，把项目连接到 GitHub，按平台指引发布。
4. 为 Vue Router 配置“所有路径回退到 `index.html`”的规则，避免刷新子页面时出现 404。

项目已经在 `public/_redirects` 中提供了适用于 Cloudflare Pages 和 Netlify 的 SPA 回退规则。

各平台的免费额度、域名、备案和国内访问差异见
[DEPLOYMENT_OPTIONS.md](./DEPLOYMENT_OPTIONS.md)。该文档同时包含推荐上线路线和后续扩展方式。
