import ghIcon from "../src/images/github-mark-white.svg";

const content = document.getElementById("content");

export default function appendHome() {
  content.appendChild(
    makeElement("div", ["bg-pizza", "bg-cover"], "bg-wrapper"),
  );
  const bgWrapper = document.getElementById("bg-wrapper");

  bgWrapper.appendChild(
    makeElement(
      "div",
      [
        "grid-rows-[auto,_1fr,_auto]",
        "min-h-screen",
        "bg-slate-950/50",
        "grid",
      ],
      "bg-overlay",
    ),
  );
  const bgOverlay = document.getElementById("bg-overlay");

  bgOverlay.appendChild(makeElement("header", ["p-6"], "header"));
  const header = document.getElementById("header");

  header.appendChild(makeElement("nav", ["flex", "justify-center"], "nav"));
  const nav = document.getElementById("nav");

  nav.appendChild(
    makeElement(
      "ul",
      [
        "flex",
        "w-full",
        "items-center",
        "justify-evenly",
        "text-xl",
        "font-bold",
        "text-white",
      ],
      "ulOne",
    ),
  );
  const ulOne = document.getElementById("ulOne");

  ulOne.appendChild(
    makeElement(
      "li",
      [
        "rounded-lg",
        "border-2",
        "border-solid",
        "border-[#00ff7f]",
        "bg-[#00ff7f]",
        "px-2",
        "text-black",
      ],
      "home",
    ),
  );
  const home = document.getElementById("home");

  const homeLink = document.createElement("a");
  home.appendChild(homeLink);
  homeLink.setAttribute("id", "home-link");
  homeLink.setAttribute("href", "#");
  homeLink.textContent = "Home";

  ulOne.appendChild(
    makeElement(
      "li",
      [
        "relative",
        "after:absolute",
        "after:-bottom-2",
        "after:left-0",
        "after:h-[3px]",
        "after:w-full",
        "after:origin-bottom-right",
        "after:scale-x-0",
        "after:bg-[#00FF7F]",
        "after:transition-transform",
        "after:duration-300",
        "after:ease-out",
        "after:content-['']",
        "after:hover:origin-bottom-left",
        "after:hover:scale-x-100",
      ],
      "menu",
    ),
  );
  const menu = document.getElementById("menu");

  const menuLink = document.createElement("a");
  menu.appendChild(menuLink);
  menuLink.setAttribute("id", "menu-link");
  menuLink.setAttribute("href", "#");
  menuLink.textContent = "Menu";

  ulOne.appendChild(
    makeElement(
      "li",
      [
        "relative",
        "after:absolute",
        "after:-bottom-2",
        "after:left-0",
        "after:h-[3px]",
        "after:w-full",
        "after:origin-bottom-right",
        "after:scale-x-0",
        "after:bg-[#00FF7F]",
        "after:transition-transform",
        "after:duration-300",
        "after:ease-out",
        "after:content-['']",
        "after:hover:origin-bottom-left",
        "after:hover:scale-x-100",
      ],
      "contact",
    ),
  );
  const contact = document.getElementById("contact");

  const contactLink = document.createElement("a");
  contact.appendChild(contactLink);
  contactLink.setAttribute("id", "contact-link");
  contactLink.setAttribute("href", "#");
  contactLink.textContent = "Contact";

  bgOverlay.appendChild(
    makeElement("main", ["flex", "flex-col", "items-center", "pt-16"], "main"),
  );
  const main = document.getElementById("main");

  main.appendChild(
    makeElement(
      "div",
      [
        "flex",
        "flex-col",
        "rounded-xl",
        "border-2",
        "border-solid",
        "border-white",
        "bg-slate-800",
        "p-3",
        "text-center",
        "text-5xl",
        "font-bold",
      ],
      "logo",
    ),
  );
  const logo = document.getElementById("logo");

  logo.appendChild(makeElement("span", ["text-[#00ff7f]"], "spanOne"));
  const spanOne = document.getElementById("spanOne");
  spanOne.textContent = "Piper's";

  logo.appendChild(makeElement("span", ["text-rose-600"], "spanTwo"));
  const spanTwo = document.getElementById("spanTwo");
  spanTwo.textContent = "Pizzeria";

  main.appendChild(
    makeElement(
      "div",
      [
        "flex",
        "max-w-[80%]",
        "flex-col",
        "items-center",
        "py-10",
        "text-white",
        "sm:max-w-[60%]",
      ],
      "main-content",
    ),
  );
  const mainContent = document.getElementById("main-content");

  mainContent.appendChild(
    makeElement(
      "h1",
      ["mb-5", "text-center", "text-2xl", "font-bold", "sm:text-4xl"],
      "hOne",
    ),
  );
  const hOne = document.getElementById("hOne");
  hOne.textContent = "Welcome to Piper's Pizzeria!";

  mainContent.appendChild(
    makeElement("p", ["mb-5", "font-bold", "sm:text-lg"], "pOne"),
  );
  const pOne = document.getElementById("pOne");
  pOne.textContent =
    "We are a family-owned business that has been serving the Nashville community for over 20 years. Our pizzas are made to your specifications and baked to perfection in our wood-fired oven.";

  mainContent.appendChild(
    makeElement("p", ["mb-5", "font-bold", "sm:text-lg"], "pTwo"),
  );
  const pTwo = document.getElementById("pTwo");
  pTwo.textContent =
    "At Piper's Pizzeria, we are committed to providing our customers with the best possible experience. We use only the freshest ingredients. Our dough is made in-house, and we use locally sourced produce whenever possible. We also offer fast and friendly service, and we are always looking for ways to better serve you!";

  bgOverlay.appendChild(
    makeElement(
      "footer",
      [
        "bg-slate-800",
        "py-2",
        "text-center",
        "text-white",
        "flex",
        "justify-center",
        "items-center",
      ],
      "footer",
    ),
  );
  const footer = document.getElementById("footer");

  footer.appendChild(makeElement("a", ["flex"], "ghLink"));
  const ghLink = document.getElementById("ghLink");
  ghLink.setAttribute("href", "https://github.com/AmberlySB");

  ghLink.appendChild(makeElement("span", [], "gitHub"));
  const gitHub = document.getElementById("gitHub");
  const ghLogo = document.createElement("img");
  ghLogo.setAttribute("src", ghIcon);
  ghLogo.classList.add("h-6", "mr-3");
  gitHub.appendChild(ghLogo);
  ghLink.appendChild(makeElement("p", [], "footer-text"));
  const footerText = document.getElementById("footer-text");
  footerText.textContent = "Amberly";
}

export function makeElement(elem, classes, idValue) {
  const element = document.createElement(elem);
  if (arguments.length === 3) {
    element.setAttribute("id", idValue);
  }

  if (classes.length > 0) {
    classes.forEach((elementClass) => {
      element.classList.add(elementClass);
    });
  }
  return element;
}
