// Store the theme
let lighttheme = localStorage.getItem("lighttheme");
const themeToggle = document.querySelector("#themeButton");

// Apply Dark theme
const enableLight = () => {
  document.body.classList.add("lighttheme");
  localStorage.setItem("lighttheme", "enabled");
  themeToggle.innerHTML = `<i id="themeButton__icon" data-feather="moon"></i>`;
  feather.replace();
};

// Remove Dark theme
const disableLight = () => {
  document.body.classList.remove("lighttheme");
  localStorage.setItem("lighttheme", null);
  themeToggle.innerHTML = `<i id="themeButton__icon" data-feather="sun"></i>`;
  feather.replace();
};

//Toggle theme
if (lighttheme === "enabled") {
  enableLight();
} else {
  disableLight();
}

themeToggle.addEventListener("click", () => {
  lighttheme = localStorage.getItem("lighttheme");
  if (lighttheme !== "enabled") {
    enableLight();
  } else {
    disableLight();
  }
});

// Theme accordint the hour

/*
const today = new Date();

if (hour >= 19 || hour < 5) {
    enableDark();
} else {
    disableDark();
}
*/
