# Prov: undervattensvärlden

**Fil att skriva i:** `undervatten.js`
**Mål:** Gör canvas-animationen interaktiv och rita ut objekten under ytan genom att lösa uppgifterna nedan.

---

## Del 1: inställningar och grundläggande

**1. Hämta element och sätt upp canvas**
* Hämta canvas-elementet från HTML-koden.
* Skapa en 2D-kontext (`ctx`) för att kunna rita.
* Hämta de tre knapparna `#dyk`, `#ytan` och `#slapp-bubbla` från DOM:en och spara dem i variabler.

**2. Ladda in bilden**
Skapa ett bildobjekt och ladda in bilden `./submarine.png` så att den är redo att ritas ut.

**3. Skapa dina dataobjekt**
* Skapa ett objekt `bubbla` som innehåller startvärden för `x` (t.ex. 250), `y` (t.ex. 450, så den startar i botten) och en boolean `spela` som från början är `false`.
* Skapa ett objekt `ubat` (ubåt) som innehåller startvärden för `x` (t.ex. 100) och `y` (t.ex. 150).

---

## Del 2: rita på canvas

**4. Rita ubåten**
Skapa en funktion `ritaUbat()`. I denna funktion ska du använda `drawImage` för att rita ut din ubåtsbild på canvasen baserat på x- och y-värdena i ditt `ubat`-objekt. Sätt bredd till 120 och höjd till 80.

**5. Rita bubblan**
Skapa en funktion `ritaBubbla()`. Använd ritmetoder (t.ex. `beginPath`, `arc` och `fill` eller `stroke`) för att rita ut en luftbubbla. 
*Tips: En fylld eller halvgenomskinlig cirkel fungerar utmärkt. Sätt färgen till t.ex. `rgba(255, 255, 255, 0.5)` för en snygg bubbeleffekt.*

---

## Del 3: interaktion och animering

**6. Styra ubåten med knappar**
Lägg till händelselyssnare (`click`) på knapparna för ubåten:
* När man klickar på knappen "Dyk" (`#dyk`) ska ubåtens y-värde öka (den åker neråt).
* När man klickar på knappen "Upp till ytan" (`#ytan`) ska ubåtens y-värde minska (den åker uppåt).

**7. Animera bubblan (logik)**
* Skapa en händelselyssnare på knappen "Släpp ut bubbla" (`#slapp-bubbla`) som ändrar bubblans egenskap `spela` till `true`.
* Skapa funktionen `animeraBubbla()`. 
    * **OM** bubblans egenskap `spela` är `true`, *minska* bubblans y-värde så den flyter uppåt.
    * **OM** bubblans y-värde blir mindre än -50 (utanför skärmen i toppen), återställ y-värdet till canvasens höjd (plus lite marginal) så den börjar om från botten.

**8. Skapa animationsloopen**
Skapa en funktion `gameLoop()` som körs kontinuerligt:
* **a)** Rensa hela canvasen (`clearRect`).
* **b)** Anropa `ritaUbat()`.
* **c)** Anropa `ritaBubbla()`.
* **d)** Anropa `animeraBubbla()`.
* **e)** Se till att loopen fortsätter snurra genom att använda `requestAnimationFrame`.
* Glöm inte att anropa loopen en första gång längst ner i din kod så att den startar!