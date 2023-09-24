import { makeElement } from "./home.js";
import ghIcon from "../src/images/github-mark-white.svg";
import pepperoniImage from "../src/images/pepperoni.jpg";
import cheeseImage from "../src/images/cheese.jpg";
import margheritaImage from "../src/images/margherita.jpg";
import hawaiianImage from "../src/images/hawaiian.jpg";
import roastedImage from "../src/images/roasted-red-pepper.jpg";
import spaghettiImage from "../src/images/spaghetti.jpg";
import penneImage from "../src/images/penne.jpg";
import cbImage from "../src/images/cheese_bread.jpg";

const content = document.getElementById("content");

export default function appendMenu() {
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
        "rounded-lg",
        "border-2",
        "border-solid",
        "border-[#00ff7f]",
        "bg-[#00ff7f]",
        "px-2",
        "text-black",
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
    makeElement(
      "main",
      [
        "mx-auto",
        "flex",
        "max-w-[80%]",
        "flex-col",
        "pt-16",
        "lg:grid",
        "lg:max-w-[60%]",
        "lg:grid-cols-[1fr,_1fr]",
        "lg:grid-rows-1",
      ],
      "main",
    ),
  );
  const main = document.getElementById("main");

  main.appendChild(
    makeElement(
      "div",
      ["col-span-1", "mx-auto", "p-5", "text-white", "lg:mx-0"],
      "main-sidebar",
    ),
  );
  const mainSidebar = document.getElementById("main-sidebar");

  mainSidebar.appendChild(
    makeElement(
      "div",
      [
        "mx-auto",
        "mb-5",
        "flex",
        "max-w-fit",
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

  mainSidebar.appendChild(
    makeElement(
      "div",
      [
        "grid",
        "max-w-fit",
        "grid-cols-2",
        "gap-4",
        "rounded-xl",
        "border-2",
        "border-solid",
        "border-white",
        "bg-slate-800/70",
        "px-3",
        "py-6",
      ],
      "pizza-wrapper",
    ),
  );
  const pizzaWrapper = document.getElementById("pizza-wrapper");

  pizzaWrapper.appendChild(
    makeElement(
      "h1",
      [
        "col-span-2",
        "mb-3",
        "text-center",
        "text-2xl",
        "font-bold",
        "text-[#00ff7f]",
      ],
      "pizza-heading",
    ),
  );
  const pizzaHeading = document.getElementById("pizza-heading");
  pizzaHeading.textContent = "---- Pizza ----";

  pizzaWrapper.appendChild(
    makeElement("img", ["col-span-1"], "pepperoni-pizza-image"),
  );
  const pepperoniPizzaImage = document.getElementById("pepperoni-pizza-image");
  pepperoniPizzaImage.setAttribute("src", pepperoniImage);
  pepperoniPizzaImage.setAttribute("alt", "pepperoni pizza");

  pizzaWrapper.appendChild(
    makeElement("div", ["col-span-1"], "pepperoni-pizza"),
  );
  const pepperoniPizza = document.getElementById("pepperoni-pizza");

  pepperoniPizza.appendChild(
    makeElement(
      "p",
      ["mb-2", "text-xl", "font-bold", "text-rose-600"],
      "pepperoni-one",
    ),
  );
  const pepperoniOne = document.getElementById("pepperoni-one");
  pepperoniOne.textContent = "Pepperoni Pizza";

  pepperoniPizza.appendChild(makeElement("p", [], "pepperoni-two"));
  const pepperoniTwo = document.getElementById("pepperoni-two");
  pepperoniTwo.textContent = "Small: $13.99";

  pepperoniPizza.appendChild(makeElement("p", [], "pepperoni-three"));
  const pepperoniThree = document.getElementById("pepperoni-three");
  pepperoniThree.textContent = "Medium: $16.99";

  pepperoniPizza.appendChild(makeElement("p", [], "pepperoni-four"));
  const pepperoniFour = document.getElementById("pepperoni-four");
  pepperoniFour.textContent = "Large: $16.99";

  pizzaWrapper.appendChild(
    makeElement("img", ["col-span-1"], "cheese-pizza-image"),
  );
  const cheesePizzaImage = document.getElementById("cheese-pizza-image");
  cheesePizzaImage.setAttribute("src", cheeseImage);
  cheesePizzaImage.setAttribute("alt", "cheese pizza");

  pizzaWrapper.appendChild(makeElement("div", ["col-span-1"], "cheese-pizza"));
  const cheesePizza = document.getElementById("cheese-pizza");

  cheesePizza.appendChild(
    makeElement(
      "p",
      ["mb-2", "text-xl", "font-bold", "text-rose-600"],
      "cheese-one",
    ),
  );
  const cheeseOne = document.getElementById("cheese-one");
  cheeseOne.textContent = "Cheese Pizza";

  cheesePizza.appendChild(makeElement("p", [], "cheese-two"));
  const cheeseTwo = document.getElementById("cheese-two");
  cheeseTwo.textContent = "Small: $11.99";

  cheesePizza.appendChild(makeElement("p", [], "cheese-three"));
  const cheeseThree = document.getElementById("cheese-three");
  cheeseThree.textContent = "Medium: $14.99";

  cheesePizza.appendChild(makeElement("p", [], "cheese-four"));
  const cheeseFour = document.getElementById("cheese-four");
  cheeseFour.textContent = "Large: $17.99";

  pizzaWrapper.appendChild(
    makeElement("img", ["col-span-1"], "margherita-pizza-image"),
  );
  const margheritaPizzaImage = document.getElementById(
    "margherita-pizza-image",
  );
  margheritaPizzaImage.setAttribute("src", margheritaImage);
  margheritaPizzaImage.setAttribute("alt", "margherita pizza");

  pizzaWrapper.appendChild(
    makeElement("div", ["col-span-1"], "margherita-pizza"),
  );
  const margheritaPizza = document.getElementById("margherita-pizza");

  margheritaPizza.appendChild(
    makeElement(
      "p",
      ["mb-2", "text-xl", "font-bold", "text-rose-600"],
      "margherita-one",
    ),
  );
  const margheritaOne = document.getElementById("margherita-one");
  margheritaOne.textContent = "Margherita Pizza";

  margheritaPizza.appendChild(makeElement("p", [], "margherita-two"));
  const margheritaTwo = document.getElementById("margherita-two");
  margheritaTwo.textContent = "Small: $16.99";

  margheritaPizza.appendChild(makeElement("p", [], "margherita-three"));
  const margheritaThree = document.getElementById("margherita-three");
  margheritaThree.textContent = "Medium: $19.99";

  margheritaPizza.appendChild(makeElement("p", [], "margherita-four"));
  const margheritaFour = document.getElementById("margherita-four");
  margheritaFour.textContent = "Large: $22.99";

  pizzaWrapper.appendChild(
    makeElement("img", ["col-span-1"], "hawaiian-pizza-image"),
  );
  const hawaiianPizzaImage = document.getElementById("hawaiian-pizza-image");
  hawaiianPizzaImage.setAttribute("src", hawaiianImage);
  hawaiianPizzaImage.setAttribute("alt", "hawaiian pizza");

  pizzaWrapper.appendChild(
    makeElement("div", ["col-span-1"], "hawaiian-pizza"),
  );
  const hawaiianPizza = document.getElementById("hawaiian-pizza");

  hawaiianPizza.appendChild(
    makeElement("p", ["mb-2", 'text-xl', "font-bold", "text-rose-600"], "hawaiian-one"),
  );
  const hawaiianOne = document.getElementById("hawaiian-one");
  hawaiianOne.textContent = "Hawaiian Pizza";

  hawaiianPizza.appendChild(makeElement("p", [], "hawaiian-two"));
  const hawaiianTwo = document.getElementById("hawaiian-two");
  hawaiianTwo.textContent = "Small: $16.99";

  hawaiianPizza.appendChild(makeElement("p", [], "hawaiian-three"));
  const hawaiianThree = document.getElementById("hawaiian-three");
  hawaiianThree.textContent = "Medium: $19.99";

  hawaiianPizza.appendChild(makeElement("p", [], "hawaiian-four"));
  const hawaiianFour = document.getElementById("hawaiian-four");
  hawaiianFour.textContent = "Large: $22.99";

  pizzaWrapper.appendChild(
    makeElement("img", ["col-span-1"], "roasted-pizza-image"),
  );
  const roastedPizzaImage = document.getElementById("roasted-pizza-image");
  roastedPizzaImage.setAttribute("src", roastedImage);
  roastedPizzaImage.setAttribute("alt", "roasted pizza");

  pizzaWrapper.appendChild(makeElement("div", ["col-span-1"], "roasted-pizza"));
  const roastedPizza = document.getElementById("roasted-pizza");

  roastedPizza.appendChild(
    makeElement("p", ["mb-2", 'text-xl', "font-bold", "text-rose-600"], "roasted-one"),
  );
  const roastedOne = document.getElementById("roasted-one");
  roastedOne.textContent = "Roasted Red Pepper Pizza";

  roastedPizza.appendChild(makeElement("p", [], "roasted-two"));
  const roastedTwo = document.getElementById("roasted-two");
  roastedTwo.textContent = "Small: $16.99";

  roastedPizza.appendChild(makeElement("p", [], "roasted-three"));
  const roastedThree = document.getElementById("roasted-three");
  roastedThree.textContent = "Medium: $19.99";

  roastedPizza.appendChild(makeElement("p", [], "roasted-four"));
  const roastedFour = document.getElementById("roasted-four");
  roastedFour.textContent = "Large: $22.99";

  main.appendChild(
    makeElement(
      "div",
      ["col-span-1", "items-center", "p-5", "text-white"],
      "main-content",
    ),
  );
  const mainContent = document.getElementById("main-content");

  mainContent.appendChild(
    makeElement(
      "div",
      [
        "grid",
        "max-w-fit",
        "grid-cols-2",
        "gap-4",
        "rounded-xl",
        "border-2",
        "border-solid",
        "border-white",
        "bg-slate-800/70",
        "px-3",
        "py-6",
      ],
      "pasta-wrapper",
    ),
  );
  const pastaWrapper = document.getElementById("pasta-wrapper");

  pastaWrapper.appendChild(
    makeElement(
      "h1",
      [
        "col-span-2",
        "mb-3",
        "text-center",
        "text-2xl",
        "font-bold",
        "text-[#00ff7f]",
      ],
      "pasta-heading",
    ),
  );
  const pastaHeading = document.getElementById("pasta-heading");
  pastaHeading.textContent = "---- Pasta & Bread ----";

  pastaWrapper.appendChild(
    makeElement("img", ["col-span-1"], "pasta-spaghetti-image"),
  );
  const pastaSpaghettiImage = document.getElementById("pasta-spaghetti-image");
  pastaSpaghettiImage.setAttribute("src", spaghettiImage);
  pastaSpaghettiImage.setAttribute("alt", "spaghetti");

  pastaWrapper.appendChild(makeElement("div", ["col-span-1"], "spaghetti"));
  const spaghetti = document.getElementById("spaghetti");

  spaghetti.appendChild(
    makeElement("p", ["mb-2", 'text-xl', "font-bold", "text-rose-600"], "spaghetti-one"),
  );
  const spaghettiOne = document.getElementById("spaghetti-one");
  spaghettiOne.textContent = "Spaghetti";

  spaghetti.appendChild(makeElement("p", [], "spaghetti-two"));
  const spaghettiTwo = document.getElementById("spaghetti-two");
  spaghettiTwo.textContent = "Kids: $5.99";

  spaghetti.appendChild(makeElement("p", [], "spaghetti-three"));
  const spaghettiThree = document.getElementById("spaghetti-three");
  spaghettiThree.textContent = "Adults: $11.99";

  pastaWrapper.appendChild(
    makeElement("img", ["col-span-1"], "pasta-penne-image"),
  );
  const pastaPenneImage = document.getElementById("pasta-penne-image");
  pastaPenneImage.setAttribute("src", penneImage);
  pastaPenneImage.setAttribute("alt", "penne pasta");

  pastaWrapper.appendChild(makeElement("div", ["col-span-1"], "penne"));
  const penne = document.getElementById("penne");

  penne.appendChild(
    makeElement("p", ["mb-2", 'text-xl', "font-bold", "text-rose-600"], "penne-one"),
  );
  const penneOne = document.getElementById("penne-one");
  penneOne.textContent = "Creamy Penne Pasta";

  penne.appendChild(makeElement("p", [], "penne-two"));
  const penneTwo = document.getElementById("penne-two");
  penneTwo.textContent = "Kids: $5.99";

  penne.appendChild(makeElement("p", [], "penne-three"));
  const penneThree = document.getElementById("penne-three");
  penneThree.textContent = "Adults: $11.99";

  pastaWrapper.appendChild(
    makeElement("img", ["col-span-1"], "cheese-bread-image"),
  );
  const cheeseBreadImage = document.getElementById("cheese-bread-image");
  cheeseBreadImage.setAttribute("src", cbImage);
  cheeseBreadImage.setAttribute("alt", "cheese bread");

  pastaWrapper.appendChild(makeElement("div", ["col-span-1"], "cheeseBread"));
  const cheeseBread = document.getElementById("cheeseBread");

  cheeseBread.appendChild(
    makeElement(
      "p",
      ["mb-2", 'text-xl', "font-bold", "text-rose-600"],
      "cheese-bread-one",
    ),
  );
  const cheeseBreadOne = document.getElementById("cheese-bread-one");
  cheeseBreadOne.textContent = "Cheese Bread";

  cheeseBread.appendChild(makeElement("p", [], "cheese-bread-two"));
  const cheeseBreadTwo = document.getElementById("cheese-bread-two");
  cheeseBreadTwo.textContent = "Individual: $2.99";

  cheeseBread.appendChild(makeElement("p", [], "cheese-bread-three"));
  const cheeseBreadThree = document.getElementById("cheese-bread-three");
  cheeseBreadThree.textContent = "Tray: $14.99";

  pastaWrapper.appendChild(
    makeElement(
      "h1",
      [
        "col-span-2",
        "mb-3",
        "text-center",
        "text-2xl",
        "font-bold",
        "text-[#00ff7f]",
      ],
      "drink-heading",
    ),
  );
  const drinkHeading = document.getElementById("drink-heading");
  drinkHeading.textContent = "---- Drinks ----";

  pastaWrapper.appendChild(makeElement("div", ["col-span-2"], "soda"));
  const soda = document.getElementById("soda");

  soda.appendChild(
    makeElement(
      "p",
      ["mb-2", "text-xl", "font-bold", "text-rose-600"],
      "soda-one",
    ),
  );
  const sodaOne = document.getElementById("soda-one");
  sodaOne.textContent = "Soda";

  soda.appendChild(makeElement('p', [], 'soda-two'))
  const sodaTwo = document.getElementById('soda-two')
  sodaTwo.textContent = 'Options: Coke, Diet Coke, Dr. Pepper, Sprite, Fanta Orange'

  soda.appendChild(makeElement('p', [], 'soda-three'))
  const sodaThree = document.getElementById('soda-three')
  sodaThree.textContent = 'Small: $1.99'

  soda.appendChild(makeElement('p', [], 'soda-four'))
  const sodaFour = document.getElementById('soda-four')
  sodaFour.textContent = 'Medium: $2.99'

  soda.appendChild(makeElement('p', [], 'soda-five'))
  const sodaFive = document.getElementById('soda-five')
  sodaFive.textContent = 'Large: $3.99'

  pastaWrapper.appendChild(makeElement("div", ["col-span-2"], "alcohol"));
  const alcohol = document.getElementById("alcohol");

  alcohol.appendChild(
    makeElement(
      "p",
      ["mb-2", "text-xl", "font-bold", "text-rose-600"],
      "alcohol-one",
    ),
  );
  const alcoholOne = document.getElementById("alcohol-one");
  alcoholOne.textContent = "alcohol";

  alcohol.appendChild(makeElement('p', [], 'alcohol-two'))
  const alcoholTwo = document.getElementById('alcohol-two')
  alcoholTwo.textContent = 'Options:'

  alcohol.appendChild(makeElement('p', [], 'alcohol-three'))
  const alcoholThree = document.getElementById('alcohol-three')
  alcoholThree.textContent = 'Beer: Budweiser, Bud Light, Miller Light, Coors Light'

  alcohol.appendChild(makeElement('p', [], 'alcohol-four'))
  const alcoholFour = document.getElementById('alcohol-four')
  alcoholFour.textContent = 'Glass: $4.99/Pitcher: $15.99'

  alcohol.appendChild(makeElement('p', [], 'alcohol-five'))
  const alcoholFive = document.getElementById('alcohol-five')
  alcoholFive.textContent = 'Wine: Red, White, Rose'

  alcohol.appendChild(makeElement('p', [], 'alcohol-six'))
  const alcoholSix = document.getElementById('alcohol-six')
  alcoholSix.textContent = 'Glass: $5.99/Bottle: $16.99'

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
