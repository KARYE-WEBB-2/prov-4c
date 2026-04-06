# Prov: undervattensvärlden

**Fil att skriva i:** `undervatten.js`  
**Mål:** Gör canvas-animationen interaktiv och rita ut objekten under havet genom att lösa uppgifterna nedan.

## Del 1: inställningar och grundläggande

**1. Hämta element och sätt upp canvas**

* Hämta canvas-elementet från HTML-koden.
* Skapa en 2D-kontext (`ctx`) för att kunna rita.
* Hämta de tre knapparna `.ubat-upp`, `.ubat-ner` och `.slapp-bubbla` från DOM:en och spara dem i variabler.

**2. Ladda in bilderna**

* Skapa ett bildobjekt och ladda in bilden `./submarine.png` så att den är redo att ritas ut.
* Skapa ett bildobjekt och ladda in bilden `./hav.jpg` som bakgrundsbild.

**3. Skapa dina dataobjekt**

* Skapa ett objekt `bubbla` som innehåller startvärden för `x` (t.ex. 250), `y` (t.ex. `canvas.height`) och en boolean `spela` som från början är `false`.
* Skapa ett objekt `ubat` som innehåller startvärden för `x` (t.ex. 100) och `y` (t.ex. 150).

## Del 2: rita på canvas

**4. Rita ubåten**

Skapa en funktion `ritaUbat()`. I denna funktion ska du använda `drawImage` för att rita ut ubåts-bilden på canvasen baserat på x- och y-värdena i ditt `ubat`-objekt. Sätt bredd till 120 och höjd till 80.

**5. Rita bubblan**

Skapa en funktion `ritaBubbla()`. Använd ritmetoder (t.ex. `beginPath`, `arc` och `fill`) för att rita ut bubblan.
*Tips: En bubbla är en fylld cirkel. Sätt färgen till t.ex. `rgba(255, 255, 255, 0.5)`.*

## Del 3: interaktion och animering

**6. Styra ubåten med knappar**
Lägg till händelselyssnare (`click`) på knapparna för ubåten:
* När man klickar på knappen "Ubåt upp" (`.ubat-upp`) ska ubåtens y-värde minska.
* När man klickar på knappen "Ubåt ner" (`.ubat-ner`) ska ubåtens y-värde öka.

**7. Animera bubblan (logik)**
* Skapa en händelselyssnare på knappen "Släpp ut bubbla" (`.slapp-bubbla`) som ändrar bubblans egenskap `spela` till `true`.
* Skapa funktionen `animerabubbla()`.
    * **OM** bubblans egenskap `spela` är `true`, minska bubblans y-värde (bubblan flyter uppåt).
    * **OM** bubblans y-värde blir mindre än -50 (försvinner ut ur toppen), återställ y-värdet till canvasens höjd och välj ett nytt slumpmässigt x med `Math.random()`.

**8. Skapa animationsloopen**
Skapa en funktion `gameLoop()` som körs kontinuerligt för att uppdatera skärmen:
* **a)** Rita bakgrundsbilden (`havBild`) med `drawImage` över hela canvasen istället för `clearRect`.
* **b)** Anropa `ritaUbat()`.
* **c)** Anropa `ritaBubbla()`.
* **d)** Anropa `animerabubbla()`.
* **e)** Se till att loopen fortsätter snurra genom att använda `requestAnimationFrame`.
* Glöm inte att anropa loopen en första gång längst ner i din kod så att den startar!

## Del 4: utmaningar
**1. Begränsa ubåtens rörelse**

* Se till att ubåten inte kan åka utanför canvasens kanter.
* Om ubåtens y-värde blir för litet (t.ex. mindre än 0) eller för stort (t.ex. större än `canvas.height - 80`) ska den stanna.

**2. Fler bubblor**

* Skapa en array `bubblor` med minst 5 bubbla-objekt (med olika start-x och start-y).
* Loopa igenom arrayen i `gameLoop()` och rita och animera varje bubbla.

**3. Tangentbordsstyrning**

* Lägg till händelselyssnare för `keydown`-eventet.
* Styr ubåten uppåt med piltangenten upp (`ArrowUp`) och nedåt med piltangenten ned (`ArrowDown`), precis som knapparna gör.

**4. Kollisionsdetektering**

* Kontrollera i `animerabubbla()` om bubblan krockar med ubåten.
* Visa en `alert` eller logga ett meddelande i konsolen när en kollision inträffar och återställ bubblan till startpositionen.
