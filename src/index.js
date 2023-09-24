import "./input.css";
import appendHome from "./home.js";
import appendMenu from "./menu.js";
import appendContact from "./contact.js";

loadHome();

function loadPage(Id) {
  const content = document.getElementById("content");
  const bgWrapper = document.getElementById("bg-wrapper");
  if (Id === "home-link") {
    content.removeChild(bgWrapper);
    appendHome();
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");
    home.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
    menu.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
    contact.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
  } else if (Id === "menu-link") {
    content.removeChild(bgWrapper);
    appendMenu();
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");
    home.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
    menu.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
    contact.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
  } else if (Id === "contact-link") {
    content.removeChild(bgWrapper);
    appendContact();
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");
    home.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
    menu.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
    contact.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
  }
}

function loadHome() {
  appendHome();
  const home = document.getElementById("home");
  const menu = document.getElementById("menu");
  const contact = document.getElementById("contact");
  home.addEventListener("click", (e) => {
    loadPage(e.target.id);
  });
  menu.addEventListener("click", (e) => {
    loadPage(e.target.id);
  });
  contact.addEventListener("click", (e) => {
    loadPage(e.target.id);
  });
}
