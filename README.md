# 我的个人网站

一个纯静态的多页个人网站模板，使用原生 HTML / CSS / JavaScript 编写，无需构建工具，可直接部署到 GitHub Pages。

## 目录结构

```
personal-website/
├── index.html          # 首页
├── about.html          # 关于我
├── projects.html       # 作品项目
├── blog.html           # 博客
├── contact.html        # 联系我（含占位表单）
├── .gitignore
├── README.md
└── assets/
    ├── css/style.css   # 全部样式
    ├── js/main.js      # 导航、滚动动画等交互
    └── images/         # 背景图（AI 生成）
```

## 本地预览

直接双击 `index.html` 即可在浏览器中查看；
或在本目录启动一个本地服务：

```bash
# 任选其一
npx serve .
python -m http.server 8000
```

## 如何填充内容

1. 用编辑器（推荐 VS Code）打开本文件夹。
2. 全局搜索 `【` 和 `TODO`，逐处替换为你的真实内容。
3. 头像、项目封面：把图片放进 `assets/images/`，再按 HTML 注释中的提示替换占位框。
4. 联系表单目前是前端占位，需要真正发信时可接入 [Formspree](https://formspree.io/) 等静态表单服务。

## 主题色与背景

- 每个页面的强调色由 `style.css` 顶部的 `.page-xxx` 变量控制，改一个颜色值即可换色。
- 背景图位于 `assets/images/`，替换同名文件即可换背景，无需改动代码。

## 部署

推送到 GitHub 仓库后，在仓库 **Settings → Pages** 中选择分支和根目录即可上线，详见交付说明中的分步指引。
