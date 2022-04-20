import $ from "jquery";
import { BusinessPlanPage } from "./modules/business-plan.js";
import { ProjectIdea } from "./modules/Project-Idea.js";
import { Contact } from "./modules/contact.js";

console.log($);
$("#header").text("Hello World");

const main = document.getElementById("main");
const navLinks = document.getElementsByClassName("nav-link");

let projektIde = new ProjectIdea();
let businessPlan = new BusinessPlanPage("Affärsplan");
let contact = new Contact(
  "Iliass Farsi",
  "iliass.farsi@outlook.com",
  "+46 722565402"
);

console.log(projektIde);
console.log(businessPlan);

for (const navlink of navLinks) {
  navlink.addEventListener("click", () => {
    let proI = document.getElementById("projectIdea");
    let busP = document.getElementById("businessplan");
    let cont = document.getElementById("contact");
    if (navlink.textContent === "Affärsplan") {
      businessPlan.getElementString();
      businessPlan.appendToElement($(main));
      console.log(businessPlan);
    } else if (navlink.textContent === "Projektidé") {
      projektIde.getElementString();
      projektIde.appendToElement($(main));
      console.log(projektIde);
    } else {
      contact.getElementString();
      contact.appendToElement($(main));
    }
  });
}
