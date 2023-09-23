import { makeElement } from "./home.js";
import ghIcon from "../src/images/github-mark-white.svg";

const content = document.getElementById("content");

export default function appendContact() {
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
        "rounded-lg",
        "border-2",
        "border-solid",
        "border-[#00ff7f]",
        "bg-[#00ff7f]",
        "px-2",
        "text-black",
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
        "lg:grid-cols-[1fr,_2fr]",
        "lg:grid-rows-1",
      ],
      "main",
    ),
  );
  const main = document.getElementById("main");

  main.appendChild(
    makeElement(
      "div",
      ["mx-auto", "p-5", "text-white", "lg:mx-0"],
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
        "flex",
        "max-w-fit",
        "flex-col",
        "rounded-xl",
        "border-2",
        "border-solid",
        "border-white",
        "bg-slate-800/70",
        "px-3",
        "py-6",
      ],
      "contact-wrapper",
    ),
  );
  const contactWrapper = document.getElementById("contact-wrapper");

  contactWrapper.appendChild(makeElement("p", ["mb-3"], "address"));
  const address = document.getElementById("address");
  address.textContent = "Address: 5555 Old Harding Pike, Nashville TN 37221";

  contactWrapper.appendChild(makeElement("p", ["mb-3"], "phone-one"));
  const phoneOne = document.getElementById("phone-one");
  phoneOne.textContent = "Phone: (555) 555-5555";

  contactWrapper.appendChild(makeElement("p", ["mb-3"], "email-one"));
  const emailOne = document.getElementById("email-one");
  emailOne.textContent = "Email: Pipers@gmail.com";

  contactWrapper.appendChild(makeElement("p", ["mb-3", "font-bold"], "gm"));
  const gm = document.getElementById("gm");
  gm.textContent = "General Manager: Phillip J. Fry";

  contactWrapper.appendChild(makeElement("p", ["mb-3"], "phone-two"));
  const phoneTwo = document.getElementById("phone-two");
  phoneTwo.textContent = "Phone: (555) 555-4545";

  contactWrapper.appendChild(makeElement("p", ["mb-3"], "email-two"));
  const emailTwo = document.getElementById("email-two");
  emailTwo.textContent = "Email: Phillip.JF@gmail.com";

  main.appendChild(
    makeElement(
      "div",
      ["flex-col", "items-center", "p-5", "py-10", "text-white"],
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
  hOne.textContent = "We can't wait to hear from you!";

  mainContent.appendChild(
    makeElement(
      "form",
      [
        "min-w-fit",
        "rounded-xl",
        "border-2",
        "border-solid",
        "border-white",
        "bg-slate-800/70",
        "p-3",
      ],
      "contact-form",
    ),
  );
  const contactForm = document.getElementById("contact-form");

  contactForm.appendChild(
    makeElement("p", ["mb-5", "font-bold"], "form-intro"),
  );
  const formIntro = document.getElementById("form-intro");
  formIntro.textContent =
    "We appreciate you taking the time to give us any feedback you have! What did you love?! What did you not love?!";

  contactForm.appendChild(
    makeElement(
      "div",
      [
        "mb-5",
        "grid",
        "grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]",
        "gap-4",
      ],
      "form-wrapper",
    ),
  );
  const formWrapper = document.getElementById("form-wrapper");

  formWrapper.appendChild(makeElement("div", [], "grid-wrapper-one"));
  const gridWrapperOne = document.getElementById("grid-wrapper-one");

  gridWrapperOne.appendChild(makeElement("label", [], "name-label"));
  const nameLabel = document.getElementById("name-label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name: ";

  gridWrapperOne.appendChild(
    makeElement(
      "input",
      [
        "mb-5",
        "max-w-full",
        "rounded-md",
        "pl-1",
        "text-black",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-[#00ff7f]",
      ],
      "name",
    ),
  );
  const name = document.getElementById("name");
  name.setAttribute("type", "text");
  name.setAttribute("name", "name");
  name.setAttribute("placeholder", "Name");

  formWrapper.appendChild(makeElement("div", [], "grid-wrapper-two"));
  const gridWrapperTwo = document.getElementById("grid-wrapper-two");

  gridWrapperTwo.appendChild(makeElement("label", [], "email-label"));
  const emailLabel = document.getElementById("email-label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email: ";

  gridWrapperTwo.appendChild(
    makeElement(
      "input",
      [
        "max-w-full",
        "rounded-md",
        "pl-1",
        "text-black",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-[#00ff7f]",
      ],
      "email",
    ),
  );
  const email = document.getElementById("email");
  email.setAttribute("type", "email");
  email.setAttribute("name", "email");
  email.setAttribute("placeholder", "name@mail.com");

  contactForm.appendChild(makeElement("label", ["block"], "feedback-label"));
  const feedbackLabel = document.getElementById("feedback-label");
  feedbackLabel.setAttribute("for", "feedback");
  feedbackLabel.textContent = "Feedback: ";

  contactForm.appendChild(
    makeElement(
      "textarea",
      [
        "mb-8",
        "w-full",
        "rounded-md",
        "pl-1",
        "text-black",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-[#00ff7f]",
      ],
      "feedback",
    ),
  );
  const feedback = document.getElementById("feedback");
  feedback.setAttribute("name", "feedback");
  feedback.setAttribute("rows", "10");

  contactForm.appendChild(makeElement("label", [], "submit-label"));
  const submitLabel = document.getElementById("submit-label");
  submitLabel.setAttribute("for", "submit");

  contactForm.appendChild(
    makeElement(
      "button",
      [
        "mx-auto",
        "mb-5",
        "flex",
        "max-w-fit",
        "rounded-md",
        "bg-[#00ff7f]",
        "px-2",
        "py-1",
        "font-bold",
        "text-black",
      ],
      "submit",
    ),
  );
  const submit = document.getElementById("submit");
  submit.setAttribute("type", "button");
  submit.setAttribute("name", "submit");
  submit.textContent = "Submit";

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
