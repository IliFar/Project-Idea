import { Page } from "./page.js";

export class BusinessPlanPage extends Page{
    constructor(title) {
        super();
        this.title = title;
    }

    getElementString() {
        return `
        <div class="row  m-2 dynamic" id="businessplan">
            <div class="col m-lg-5 content">
                <h1 class="text-center pt-3">Affärsplan</h1>
                <article class="overflow-auto p-3">
                    <span>
                    Vi hjälper människor att bli friskare genom att äta hälsosam mat
                    anpassad efter varje persons kroppsbehov. vår app kommer att mäta
                    dina näringsnivåer i ditt blod genom en hårdvara som liknar
                    diabeteshårdvaran och därefter kommer vi rekommendera dig vilka
                    näringsämnen du behöver äta för att hålla dig frisk och undvika
                    näringsbrist i din kropp.
                    <br />
                    <br />
                    Våra kunder kommer att få en bättre övergripande hälsa, och minska
                    risken för att få sjukdomar som diabetes med 58 %, vi kommer också
                    att hjälpa till att minska matsvinnet eftersom vi kommer att
                    skicka dig de ingredienser din kropp behöver och hur man lagar dem
                    till en utsökt måltid. Våra kunder kommer att ha en direkt
                    kommunikation med sin hälsa, kommer också att få personliga
                    rekommendationer och ingredienserna för måltiderna samt hjälpa
                    våra kunder att laga dessa ingredienser med vår touch free cooking
                    feature som kommer att ha en timer och en röstkommandofunktion som
                    berättar varje steg i receptet utan att behöva röra din telefon
                    eller surfplatta, samt minska matinköpstiden med 40 minuters tid.
                    <br />
                    <br />
                    Våra användare kommer att få en bättre allmän hälsa, leva längre
                    och ha en lägre risk för fetma, hjärtsjukdomar, vissa cancerformer
                    och minska risken att få diabetes med 58%.
                    </span>
                    <br />
                    <br />
                </article>
                <div class="container">
                    <div class="row text-center justify-content-center g-3">
                    <div class="col-sm-12 col-lg-5 border-3 border project d-flex flex-column justify-content-center">
                        <h1>Projekt Budget</h1>
                        <div> 3.5 Miljoner Kr</div>
                    </div>
                    <div class="col-sm-12 col-lg-5 border-3 border ms-lg-5 project d-flex flex-column justify-content-center">
                        <h1>Projektet är klar i</h1>
                        <div>53 Veckor, 13.25 Månader, 1.1 År</div>
                    </div>
                    <div class="col-sm-12 col-lg-5 border-3 border project d-flex flex-column justify-content-center">
                        <h1>Projektets Startmånad</h1>
                        <div>April 2022</div>
                    </div>
                    <div class="col-sm-12 col-lg-5 border-3 border ms-lg-5 project d-flex flex-column justify-content-center">
                        <h1>Projektet är klar</h1>
                        <div>Mars 2023</div>
                    </div>
                    </div>
                </div>
            </div>
      </div>
        `
    }

}