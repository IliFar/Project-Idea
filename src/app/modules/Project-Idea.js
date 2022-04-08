import { Page } from "./page.js";

export class ProjectIdea extends Page {
  constructor() {
    super();
  }

  getElementString() {
    return `
        <div class="row m-2">
            <div class="col m-lg-5 content">
                <h1 class="text-center pt-3 mb-4">Projektidé Och Prototype</h1>
                <article class="mb-4 text-center">
                    Prototypen jag skulle vilja bygga i den här kursen är en applikation som simulerar appidén som går ut på att få näringsämnena data i kundens blod och baserat på den datan kommer vi att rekommendera ingredienser och recepter att laga med de givna ingredienser för att täcka näringsämnena underskott i cutomers blod.
                </article>
                <img src="/images/prototyp.svg" alt="">
            </div>
        </div>
        
        
        
        `;
  }
}
