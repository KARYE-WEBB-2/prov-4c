# Bedömningsinstruktioner för prov: lilla molntuss

**Filer som bedöms:** `molntuss.js` (funktionalitet testas via `molntuss.html`).

Gå igenom varje av de fyra huvudkategorierna och deras kriterier. Notera vad som är uppfyllt och vad som saknas.

> **Krav för godkänt (e-nivå):**
> För att nå E måste eleven visa grundläggande förståelse genom att klara de kriterier som är markerade med **(*)**. Detta innebär att eleven kan hämta element, sätta upp en **canvas-kontext**, rita ut en enkel form, samt skapa ett **klick-event**.

---

## Bedömningsmatris (totalt 20 poäng)

### 1. Grundläggande canvas och element (5 poäng)

*Fokus: Kan eleven interagera med sidans element och förbereda canvasen?*

* **1p – Selektorer (*):** Eleven använder korrekt syntax (t.ex. `querySelector`) för att hämta canvas och knappar.
* **1p – Canvas kontext (*):** Eleven skapar en 2D-kontext från canvas-elementet med `getContext("2d")`.
* **1p – Dataobjekt:** Eleven lagrar tillståndet (koordinater och status) i logiska strukturer, t.ex. objekt för `moln` och `sol`.
* **1p – Ladda bild:** Eleven instansierar ett nytt `Image`-objekt och sätter `.src` korrekt.
* **1p – Scope:** Variabler definieras i rätt scope så att de kan nås av både event listeners och animationsloopen.

### 2. Interaktivitet och händelser (5 poäng)

*Fokus: Fungerar knapparna och kopplingen till datan?*

* **1p – Event listener (*):** Eleven har kopplat en fungerande `click`-lyssnare till åtminstone en av knapparna.
* **1p – Uppdatera variabler (*):** Eleven kan modifiera en variabels värde via en knapptryckning (t.ex. ändra `sol.y`).
* **1p – State management:** Eleven byter status på en boolean (t.ex. `moln.spela = true`) via knapptryck istället för att bara hårdkoda en position.
* **1p – Animationsmotor:** Eleven använder `requestAnimationFrame` för att skapa en optimerad loop istället för `setInterval` eller enbart enstaka uppdateringar.
* **1p – Interaktionslogik:** Alla tre knappar fungerar enligt instruktion och påverkar canvasen (via variablerna) i realtid.

### 3. Logik och ritning (5 poäng)

*Fokus: Kan eleven använda canvas API och hantera villkor?*

* **1p – Rita former (*):** Eleven använder canvas-metoder (som `beginPath`, `arc`, `fill`) för att rita ut molnet.
* **1p – Rita bilder:** Eleven använder `drawImage` med korrekta parametrar för att rita ut bilden av solen.
* **1p – Rensa skärmen:** Eleven använder `clearRect` i början av sin loop för att undvika grafiska spår av tidigare frames.
* **1p – Animering:** Eleven manipulerar ett x- eller y-värde kontinuerligt inuti loopen så att rörelse uppstår.
* **1p – Villkor (if/else):** Eleven använder if-satser korrekt, t.ex. för att kolla om molnet har åkt utanför canvasens bredd och därefter nollställa positionen.

### 4. Kodkvalitet och struktur (5 poäng)

*Fokus: Är koden ren, läsbar och robust?*

* **1p – Variabler:** Eleven använder `const` och `let` (eller strukturerad `var`) på ett korrekt sätt.
* **1p – Namngivning:** Funktioner och objekt har namn som tydligt beskriver vad de gör (t.ex. `ritaSol`, `gameLoop`).
* **1p – Indentering:** Koden har en struktur och indrag som gör den lättläst.
* **1p – Funktionell uppdelning:** Koden är uppdelad i mindre, specialiserade funktioner (`ritaMoln`, `animeraMoln`) som anropas från huvudloopen, istället för att all kod ligger i en enda stor klump.
* **1p – Matematisk tillämpning:** Eleven använder matematik korrekt för canvasen (t.ex. `Math.PI` för att rita ut halvcirklar, eller `Math.random` för startpositioner).

---

## Mall för feedback till elev

Kopiera och klistra in nedan i bedömningen.

**Total poäng: x/20**

**Sammanfattning:**

* **Styrkor:** (T.ex. *"Du har väldigt bra koll på hur canvas-loopen är uppbyggd! Du har snyggt separerat koden i tydliga funktioner och din requestAnimationFrame fungerar felfritt."*)
* **Förbättringsområden:** (T.ex. *"Tänk på att du måste rensa canvasen med `clearRect` i början av din loop. Just nu ritas molnet över sig självt och lämnar ett spår över hela skärmen."*)
* **Nästa steg:** (Här kan du skriva vad eleven bör fokusera på inför nästa prov, exempelvis att öva på hur if-satser kan återställa koordinater).

