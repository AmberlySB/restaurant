import "./input.css";
import appendHome from "./home.js";
import appendContact from "./contact.js";

loadPage();

function loadPage(Id) {
  const content = document.getElementById("content");
  const bgWrapper = document.getElementById("bg-wrapper");
  if (Id === "home-link") {
    content.removeChild(bgWrapper);
    appendHome();
    const home = document.getElementById("home");
    const contact = document.getElementById("contact");
    home.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
    contact.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
  } else if (Id === "contact-link") {
    content.removeChild(bgWrapper);
    appendContact();
    const home = document.getElementById("home");
    const contact = document.getElementById("contact");
    home.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
    contact.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
  } else {
    appendHome();
    const home = document.getElementById("home");
    const contact = document.getElementById("contact");
    home.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
    contact.addEventListener("click", (e) => {
      loadPage(e.target.id);
    });
  }
}
