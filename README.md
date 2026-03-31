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

---

## Del 4: utmaning (valfri)

**8. Objektet Fisk**  
Skapa ett objekt `fisk` med:
* Egenskaperna `x` (t.ex. `canvas.width + 50`), `y` (t.ex. 200) och `hastighet` (t.ex. 2).

Skapa sedan följande funktioner:
* En funktion `ritaFisk()` som ritar ut fisken med hjälp av canvas-former:
   * **Kropp:** en ellips med `ctx.ellipse(fisk.x, fisk.y, radiusX, radiusY, rotation, 0, Math.PI * 2)`.
   * **Stjärt:** en triangel (tre punkter med `moveTo` + `lineTo` + `closePath`).
   * **Öga:** en liten fylld cirkel med `arc`.
* En funktion `animeraFisk()` som minskar `fisk.x` med `fisk.hastighet`. När fisken passerar vänster kant (`fisk.x < -80`), återplacera den till höger med ett slumpmässigt `y`.
* En funktion `kolliderar(fisk, annat)` som returnerar `true` om fisken och `annat` (ubåten) överlappar. Jämför kanterna på de båda objekten (AABB-kollision):
   * `fisk.x + 55 > annat.x` och `fisk.x - 35 < annat.x + 120`
   * `fisk.y + 18 > annat.y` och `fisk.y - 18 < annat.y + 80`

*(Alternativt kan du lägga rita-, animera- och kollisionsfunktionerna som metoder direkt inuti `fisk`-objektet och använda `this.x` etc).*

**9. Poäng och kollision**  
* Lägg till en variabel `let poang = 0`.
* I din befintliga `gameLoop()`: anropa `ritaFisk()` och `animeraFisk()`.
* Om `kolliderar(fisk, ubat)` är sant: öka `poang` med 1 och flytta fisken till en ny slumpmässig position (t.ex. långt till höger och ett nytt `y`-värde).
* Rita poängen på canvasen med `ctx.fillText("Poäng: " + poang, 10, 28)`.
