// import { document } from "postcss";

const content = document.getElementById("content");

content.appendChild(
  makeElement("div", ["bg-pizza", "bg-cover"], "home-wrapper"),
);
const bgDiv = document.getElementById("home-wrapper");

bgDiv.appendChild(
  makeElement(
    "div",
    [
      "sm:grid-rows-8",
      "flex",
      "min-h-screen",
      "flex-col",
      "bg-slate-950/50",
      "sm:grid",
    ],
    "bg-overlay",
  ),
);
const overlayDiv = document.getElementById("bg-overlay");

overlayDiv.appendChild(
  makeElement("header", ["p-6", "sm:row-span-1"], "header"),
);
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
contactLink.setAttribute("href", "#");
contactLink.textContent = "Contact";

function makeElement(elem, classes, idValue) {
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
