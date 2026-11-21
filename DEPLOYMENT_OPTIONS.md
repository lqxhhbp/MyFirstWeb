# 低成本个人网站部署方案

> 资料核验日期：2026-11-21。免费额度和计费规则会变化，正式注册前请以平台控制台显示的当期条款为准。

## 先说结论

1. **电脑断网或关机后别人仍能访问，前提是网站已经发布到云平台。** `localhost`、局域网地址、
   Cloudflare Tunnel、frp、ngrok、动态 DNS 都依赖你自己的电脑开机在线，不满足这个条件。
2. 你的网站目前是纯前端静态站，构建产物是 `dist/`，不需要购买和管理云服务器。
3. 新手首版建议使用 **GitHub 保存源码 + Cloudflare Pages 自动构建和托管 + 免费的
   `*.pages.dev` 子域名**。上线成本可以先控制为 0 元，后续再决定是否购买独立域名。
4. 中国大陆的网络环境对境外托管平台并不稳定，平台官方通常不提供面向中国大陆的访问质量保证。
   首版上线后，必须用目标用户的 Wi-Fi 和手机流量分别实测。
5. 如果主要访客在中国大陆且要求长期稳定，可改用**中国大陆对象存储静态网站 + 独立域名**。
   这条路不需要云服务器，但会产生存储和流量费用，绑定中国内地 Bucket 的域名还需要 ICP 备案。

## 五条可行路线

| 路线 | 适合谁 | 费用起点 | 电脑关机后可访问 | 主要优点 | 主要限制 |
| --- | --- | --- | --- | --- | --- |
| GitHub Pages | 愿意使用 Git、以低成本试水的人 | 免费；GitHub Free 通常要求使用公开仓库 | 是 | 与源码和后续编辑流程结合最直接 | 发布站不超过 1 GB；每月 100 GB 带宽软限制；不带自定义构建时每小时 10 次构建软限制；Vue history 路由没有原生 SPA 回退 |
| Cloudflare Pages | 当前最推荐的新手静态站方案 | 免费计划 | 是 | 支持公开和私有 Git 仓库；静态请求免费且不限量；每月 500 次免费构建；免费子域名和 HTTPS | 中国大陆访问质量不在官方保证内，需要实测 |
| Netlify | 希望界面直观、拖拽或 Git 发布都可用的人 | 免费计划有 300 credits | 是 | Git 部署、自定义域名、自动 HTTPS、SPA rewrite 都很成熟 | credits 会被部署、带宽、请求共享消耗；按官方当前费率，单次生产部署 15 credits、每 GB 带宽 20 credits |
| Vercel | 个人项目、以后可能扩展 Functions 的人 | Hobby 免费计划 | 是 | Hobby 含前 100 GB 快速数据传输、每月前 100 万 CDN 请求、每天 100 次部署 | Hobby 定位为个人计划；中国大陆访问需实测；使用 Vue history 路由时通常还要补 rewrite 配置 |
| 阿里云 OSS 静态网站 | 主要服务中国大陆访客、愿意购买域名和备案的人 | 按量计费，不是永久免费 | 是 | 中国大陆链路更可控；可配合 CDN；支持标准静态站和 SPA 回退 | 默认 Bucket 域名访问 HTML 会强制下载，必须绑定自定义域名；中国内地 Bucket 的自定义域名必须 ICP 备案；所有文件设为公共读，不能放密钥或隐私数据 |

### 为什么优先选 Cloudflare Pages

- 把 GitHub 仓库连接后，每次 push 会自动构建并发布，适合你以后持续编辑。
- 免费计划每月 500 次构建，对一个个人站足够；静态资源请求免费且不限量。
- 免费单站最多 20,000 个文件、单文件最大 25 MiB，当前项目远低于限制。
- 免费计划每个项目最多绑定 100 个自定义域名。
- 支持公开和私有 GitHub 仓库，源码可以不公开。
- 项目里已经有 `public/_redirects`，会随构建复制到 `dist/`，让 `/projects`、`/about`
  等子页面刷新时仍返回 Vue 入口。
- 可以先使用免费的 `项目名.pages.dev` 域名，确认内容和访问效果后再决定是否买域名。

### GitHub Pages 的额外注意点

GitHub Pages 也能免费托管，但当前脚手架使用 `createWebHistory`。GitHub Pages 不会原生执行
Cloudflare/Netlify 的 `_redirects` 规则，因此直接打开或刷新子页面可能得到 404。可选做法是：

- 改成用户站仓库名 `<用户名>.github.io`，或绑定自定义独立域名；
- 使用 GitHub Actions 构建 `dist/`，并处理 SPA 404 回退；
- 或者把路由改成 Hash 模式，但网址会带 `#`。

如果只是想把网站最快发布到网上，Cloudflare Pages 少做一层路由适配，更适合当前项目。

### 对象存储路线要注意什么

阿里云 OSS 官方文档说明，OSS 可以把 HTML、CSS、JavaScript 直接发布成公开网站，不需要维护
传统服务器。但当前页面对个人站点有几个重要限制：

- 使用 OSS Bucket 默认域名访问 HTML 时，浏览器会被强制下载文件，不能正常在线浏览。
- 要正常显示网页，必须绑定自定义域名；Bucket 在中国内地时，该域名需要完成 ICP 备案。
- 费用由存储费、请求费和公网下行流量费组成，按量计费。它不是“免费套餐”的同义词。
- 静态站 Bucket 需要设为公共读。不要把 API Key、数据库密码、私密文件放进这个 Bucket。
- 应开启 Referer 防盗链、访问日志和必要的费用告警，避免页面被外站盗链后产生意外流量费。
- 当前网站采用 history 路由。OSS 的 SPA 配置应把默认首页和默认 404 页面都设为
  `index.html`，错误文档响应码设为 `200`。

## 成本怎么估算

- **先不买独立域名：** 使用 `*.pages.dev` 时，小流量个人站通常可以保持在免费额度内。
- **购买独立域名：** 域名是单独的年度支出，价格取决于后缀、注册商和促销，不能只看平台免费额度。
- **对象存储：** 即使存储量很小，也要考虑页面访问产生的公网流量和请求费用。图片、视频越大，
  流量成本越明显。
- **免费额度的共同风险：** 平台可能调整规则、暂停超额资源或要求升级。不要把业务稳定性建立在
  “永久免费”的假设上。

按当前需求，建议预算顺序是：先用 0 元免费域名发布，确认真的有人访问，再买独立域名；
只有中国大陆访问实测不满意时，再考虑域名 + 备案 + 对象存储的完整国内方案。

## 推荐实施计划

### 阶段 0：替换占位内容

目标：网站不再出现“你的名字”“hello@example.com”等示例信息。

1. 修改 `src/content/site.ts` 中的姓名、简介、邮箱、所在地、项目和原则。
2. 修改 `src/views/` 下三个页面里的个人文字；如需保留示例项目，也要改成真实内容。
3. 查看首页、项目页、关于页的标题和描述是否与自己的定位一致。

验证：浏览器中看不到示例邮箱和“你的名字”，所有链接都是真实可用的地址。

### 阶段 1：本地验收

目标：发布前确认页面在开发和生产构建中都正常。

```sh
npm install
npm run lint
npm run build
npm run preview
```

验证：

- 首页、`/projects`、`/about` 都能打开；
- 刷新任意子页面不出现 404；
- 手机宽度下导航、标题、按钮和卡片没有横向滚动；
- 浏览器控制台没有报错；
- 构建成功并生成 `dist/`。

当前项目已经通过 `npm run lint`、`npm run build` 和本地桌面/手机路由检查。

### 阶段 2：建立版本管理并上传源码

目标：每次修改都有记录，托管平台可以自动读取新版本。

1. 在项目目录初始化 Git 仓库。
2. 创建 GitHub 仓库并推送源码。
3. 确认 `node_modules/` 和 `dist/` 没有提交；`.gitignore` 已经包含它们。

验证：GitHub 仓库里能看到 `src/`、`package.json`、`_redirects` 等源码文件，没有依赖目录。

### 阶段 3：首次免费上线

目标：得到一个别人可访问的 HTTPS 测试网址。

在 Cloudflare Pages 中连接 GitHub 仓库，建议配置：

| 配置项 | 值 |
| --- | --- |
| Production branch | `main` |
| Framework preset | Vite（如没有预设就手动填写） |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | 仓库根目录（如果仓库本身就是当前网站项目） |
| Node.js | 默认构建镜像当前满足 `package.json` 的版本要求；可设 `NODE_VERSION=22.18.0` 固定版本 |

发布后先使用平台提供的 `*.pages.dev` 网址，不需要先买域名。

验证：

- 首页、项目页和关于页的 HTTPS 地址都能打开；
- 直接访问并刷新 `/projects` 和 `/about`；
- 在手机蜂窝网络和 Wi-Fi 下各测试一次；
- 请一位不在你同一网络中的朋友打开测试地址；
- 电脑关机后再次访问，确认网站仍存在。

### 阶段 4：决定是否购买独立域名

目标：获得更正式、可长期使用的网址，同时控制成本。

1. 先用免费域名观察 1 至 2 周，确认平台对目标访客可访问。
2. 需要正式名称时购买域名，在 Cloudflare Pages 中添加自定义域名。
3. 按控制台给出的 DNS 记录配置 CNAME 或 nameserver，并等待 HTTPS 证书签发。
4. 不把域名注册费、续费价和备案成本混同为“服务器费”。

验证：`https://你的域名` 可以打开，HTTP 自动跳转 HTTPS，证书有效，手机访问正常。

### 阶段 5：中国大陆访问不理想时再切换

目标：用最低复杂度换取中国大陆访问稳定性，而不是提前购买云服务器。

1. 继续把 GitHub 作为源码和版本管理工具。
2. 注册并实名认证阿里云账号，开通 OSS，创建中国内地 Bucket。
3. 为域名完成 ICP 备案，绑定自定义域名并配置 HTTPS。
4. 每次在本地执行 `npm run build`，把 `dist/` 内的全部内容上传到 Bucket。
5. 按对象存储文档配置 SPA：默认首页和默认 404 页都设为 `index.html`，错误响应码设为 `200`。
6. 开启费用告警、防盗链和必要的 CDN；先跑一个月账单，再判断是否长期使用。

验证：从中国大陆目标网络访问域名，首页和子路由刷新正常；OSS 账单可解释；没有把私密文件
上传到公共读 Bucket。

### 阶段 6：以后继续编辑

推荐流程：

1. 本地修改 `src/content/site.ts` 或页面组件；
2. 执行 `npm run lint` 和 `npm run build`；
3. 提交并 push 到 GitHub；
4. Cloudflare Pages 自动构建并发布新版本；
5. 打开线上地址做一次首页和子页面检查。

如果以后你想“在网页后台直接改文字”而不碰代码，可以再评估无头 CMS。它会增加账号授权、
内容模型和第三方服务，不建议在首版一起加入。

## 静态站的能力边界

当前方案适合：

- 个人介绍、作品集、博客页面；
- 展示型官网；
- 从第三方 API 读取公开数据；
- 使用少量无服务表单服务收集留言。

当前方案不适合直接承载：

- 需要保密的服务端 API Key；
- 用户登录、支付、订单、数据库写操作；
- 需要权限控制的私人内容；
- 依赖你自己电脑在线的服务。

以后需要这些能力时，可以继续用静态前端，再增加 Cloudflare Functions、Netlify Functions、
Supabase、Firebase 或自有后端。到那一步再按实际需求选，不需要现在就把架构搭复杂。

## 不满足“电脑断网仍访问”的办法

下面这些方案只适合本地开发或临时演示：

- 在电脑上运行 `npm run dev` 或 `npm run preview`；
- 局域网 IP 访问；
- Cloudflare Tunnel、ngrok、frp；
- 动态 DNS + 家庭宽带端口映射。

它们都依赖本机、家庭网络和外网转发，电脑关机或断网后其他人无法继续访问。不能拿它们替代
静态托管。

## 官方资料

以下链接在 2026-11-21 用于核验：

- GitHub Pages 是什么、默认网址与用户/项目站差异：
  <https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages>
- GitHub Pages 用量限制：100 GB/月软带宽、10 次/小时软构建限制、1 GB 站点限制、非商用限制：
  <https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits>
- GitHub Pages 自定义域名：
  <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages>
- GitHub Pages HTTPS：
  <https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https>
- Cloudflare Pages Git 自动部署与公开/私有仓库支持：
  <https://developers.cloudflare.com/pages/get-started/git-integration/>
- Cloudflare Pages 免费额度：500 构建/月、20,000 文件、25 MiB 单文件、100 个自定义域名：
  <https://developers.cloudflare.com/pages/platform/limits/>
- Cloudflare Pages 静态资源请求免费且不限量：
  <https://developers.cloudflare.com/pages/functions/pricing/>
- Cloudflare Pages 自定义域名：
  <https://developers.cloudflare.com/pages/configuration/custom-domains/>
- Cloudflare Pages `_redirects` 与 SPA 回退：
  <https://developers.cloudflare.com/pages/configuration/redirects/>
- Cloudflare Pages 构建镜像与 Node.js 版本：
  <https://developers.cloudflare.com/pages/configuration/build-image/>
- Netlify 免费计划和 credits 计费：
  <https://www.netlify.com/pricing/>
- Netlify SPA rewrite：
  <https://docs.netlify.com/manage/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps>
- Netlify 自动 HTTPS：
  <https://docs.netlify.com/manage/domains/secure-domains-with-https/https-ssl/>
- Netlify 自定义域名 DNS：
  <https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/>
- Vercel Hobby 免费计划与每月用量：
  <https://vercel.com/docs/plans/hobby>
- Vercel 计划定位与自动 HTTPS：
  <https://vercel.com/docs/plans>
- 阿里云 OSS 静态网站托管、默认域名下载限制、自定义域名和 ICP 备案：
  <https://help.aliyun.com/zh/oss/user-guide/hosting-static-websites>
- 阿里云 OSS 计费构成：
  <https://www.alibabacloud.com/help/en/oss/product-overview/billing-overview>

> 中国大陆可访问性并不是“某个平台一定可用/一定不可用”的固定事实，会受地区、运营商、
> 时间和具体域名影响。正式对公众推广前，应以目标用户网络的实测结果为准。
