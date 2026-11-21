// Language switch, theme switch and print button. The page works without this file:
// both languages are in the HTML and the theme follows the system setting.
(function () {
  var root = document.documentElement;
  function store(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }

  var langButtons = document.querySelectorAll("[data-set-lang]");
  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    langButtons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-set-lang") === lang));
    });
  }
  setLang(root.getAttribute("data-lang") || "en");
  langButtons.forEach(function (b) {
    b.addEventListener("click", function () {
      var lang = b.getAttribute("data-set-lang");
      setLang(lang); store("mm-lang", lang); paintSwitch();
    });
  });

  var themeSwitch = document.getElementById("theme-switch");
  function isDark() {
    var t = root.getAttribute("data-theme");
    if (t) { return t === "dark"; }
    return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
  function paintSwitch() {
    var dark = isDark(), es = root.getAttribute("data-lang") === "es";
    themeSwitch.setAttribute("aria-checked", String(dark));
    themeSwitch.title = dark ? (es ? "Cambiar a tema claro" : "Switch to light theme") : (es ? "Cambiar a tema oscuro" : "Switch to dark theme");
  }
  paintSwitch();
  themeSwitch.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next); store("mm-theme", next); paintSwitch();
  });

  var printButton = document.getElementById("print-cv");
  if (printButton) {
    printButton.addEventListener("click", function () { try { window.print(); } catch (e) {} });
  }
})();
