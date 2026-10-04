
const $ = (s) => document.querySelector(s);

const isSubPage = location.pathname.includes("/services/") || location.pathname.includes("/industries/");
const root = isSubPage ? "../" : "";

const nav = `
  <a href="${root}index.html">Home</a>
  <a href="${root}about.html">About</a>
  <div class="nav-dropdown">
    <a href="${root}services.html">Services <span>▾</span></a>
    <div class="dropdown-menu">
      <a href="${root}services/data-analytics.html">Data Analytics</a>
      <a href="${root}services/business-intelligence.html">Business Intelligence</a>
      <a href="${root}services/business-automation.html">Business Automation</a>
      <a href="${root}services/ai-solutions.html">AI Solutions & Chatbots</a>
      <a href="${root}services/power-bi-dashboards.html">Power BI Dashboards</a>
      <a href="${root}services/custom-software.html">Custom Software Development</a>
      <a href="${root}services/web-development.html">Web Development</a>
    </div>
  </div>
  <div class="nav-dropdown">
    <a href="${root}industries.html">Industries <span>▾</span></a>
    <div class="dropdown-menu">
      <a href="${root}industries/manufacturing.html">Manufacturing</a>
      <a href="${root}industries/retail-ecommerce.html">Retail & E-commerce</a>
      <a href="${root}industries/healthcare.html">Healthcare</a>
      <a href="${root}industries/finance.html">Finance</a>
      <a href="${root}industries/logistics.html">Logistics</a>
      <a href="${root}industries/education.html">Education</a>
      <a href="${root}industries/pharmaceuticals.html">Pharmaceuticals</a>
    </div>
  </div>
  <a href="${root}case-studies.html">Case Studies</a>
  <a href="${root}faq.html">FAQ</a>
  <a href="${root}contact.html">Contact</a>
`;

const wa = `https://wa.me/91${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

document.addEventListener("DOMContentLoaded", () => {
  const navEl = $("#nav");
  if (navEl) navEl.innerHTML = nav;

  document.querySelectorAll("[data-wa]").forEach(el => el.href = wa);
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const menu = $(".menu");
  if (menu && navEl) menu.addEventListener("click", () => navEl.classList.toggle("open"));
  document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => navEl.classList.remove("open")));

  const close = $("#wa-close");
  const popup = $("#wa-popup");
  if (close && popup) close.addEventListener("click", () => popup.classList.add("hide"));

  const faq = document.querySelector("#faq-grid");
  if (faq && SITE.faqs) {
    faq.innerHTML = SITE.faqs.map(s =>
      `<details><summary>${s[0]} <b>+</b></summary><p>${s[1]}</p></details>`
    ).join("");
  }
});
