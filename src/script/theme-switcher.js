const button = document.querySelector(".theme-switcher");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
let currentThemeSetting = localStorageTheme || systemSettingDark.matches ? "dark" : "light";

document.querySelector("html").setAttribute("data-theme", currentThemeSetting);

button.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  document.querySelector("html").setAttribute("data-theme", newTheme);

  currentThemeSetting = newTheme;
});