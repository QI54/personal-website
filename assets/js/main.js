/* ============================================================
   个人网站交互脚本（原生 JS，无任何依赖）
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- 移动端导航菜单 ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      navLinks.classList.toggle("open");
      const expanded = toggle.classList.contains("open");
      toggle.setAttribute("aria-expanded", String(expanded));
    });

    // 点击导航链接后收起菜单
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });
  }

  /* ---------- 滚动进入动画 ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // 老浏览器直接显示
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  /* ---------- 页脚自动年份 ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- 联系表单（静态站占位处理） ----------
     纯静态网站没有后端，这里只做前端拦截提示。
     以后接入 Formspree / 自建接口时，替换下面逻辑即可。 */
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const note = form.querySelector(".form-note");
      if (note) {
        note.textContent = "表单为占位状态：静态网站暂无后端，接入表单服务后即可发送。";
      }
      form.reset();
    });
  }
});
