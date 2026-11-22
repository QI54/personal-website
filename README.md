# 罗罗诺亚·索隆主题站

一个以《海贼王》角色罗罗诺亚·索隆为主题的纯静态多页网站，使用原生 HTML / CSS / JavaScript 编写，无需构建工具，可直接部署到 GitHub Pages 与 Cloudflare Pages。

## 目录结构

```
personal-website/
├── index.html          # 首页（含悬赏令海报）
├── about.html          # 角色档案（资料、悬赏变迁、佩刀）
├── skills.html         # 剑道招式（一刀流 / 二刀流 / 三刀流 / 九刀流）
├── story.html          # 航海历程（名场面时间线）
├── quotes.html         # 经典语录
├── .gitignore
├── README.md
└── assets/
    ├── css/style.css   # 全部样式
    ├── js/main.js      # 导航、滚动动画等交互
    └── images/         # 5 张 AI 生成主题背景
```

## 本地预览

直接双击 `index.html` 即可；或在本目录启动本地服务：

```bash
npx serve .
python -m http.server 8000
```

## 自定义修改

- 主题色：改 `style.css` 顶部各 `.page-xxx` 的 `--accent` 变量。
- 背景图：替换 `assets/images/` 下同名文件即可。
- 悬赏令肖像：把角色图片放入 `assets/images/`，替换首页 `.wanted-photo` 占位框。
- 文字内容：直接编辑各 HTML 文件，招式、语录、时间线均可自由增删。

## 版权说明

本站为粉丝同人作品，罗罗诺亚·索隆及《海贼王》相关角色、设定的版权归原作者及版权方所有，不用于任何商业用途。

## 部署

推送到 GitHub 后在 **Settings → Pages** 选择分支即可；Cloudflare 则在 Pages 中连接仓库或直接上传文件夹。
