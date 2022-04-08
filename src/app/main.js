import "../../node_modules/jquery/dist/jquery.js";
import { BusinessPlanPage } from "./modules/business-plan.js";
import { ProjectIdea } from "./modules/Project-Idea.js";

const main = document.getElementById("main");
const navLinks = document.getElementsByClassName("nav-link");

let projektIde = new ProjectIdea();
let businessPlan = new BusinessPlanPage("Affärsplan");

for (const navlink of navLinks) {
    navlink.addEventListener("click", () => {
        if (navlink.textContent === "Projektidé") {
            projektIde.getElementString();
            projektIde.appendToElement($(main));
        } else if (navlink.textContent === "Affärsplan") {
            businessPlan.getElementString();
            businessPlan.appendToElement($(main));
        }
    }, {once: true})
}
