# Lathund för canvas

Här är några vanliga canvas-kommandon som du kan ha nytta av under provet:

**Starta och rensa**
* `canvas.getContext("2d")` – Skapar den 2D-kontext (`ctx`) som du använder för att rita.
* `ctx.clearRect(x, y, bredd, höjd)` – Suddar ut ett rektangulärt område (ofta hela canvasen: `0, 0, canvas.width, canvas.height`).

**Rita banor och former**
* `ctx.beginPath()` – Startar en ny bana/form.
* `ctx.closePath()` – Stänger banan (frivilligt men bra praxis).
* `ctx.moveTo(x, y)` – Flyttar "pennan" till en viss koordinat utan att rita ett streck.
* `ctx.arc(x, y, radie, startvinkel, slutvinkel)` – Ritar en cirkelbåge. 
  *(Tips: En halvcirkel går från `Math.PI` till `0`. En hel cirkel går från `0` till `Math.PI * 2`).*
* `ctx.fillRect(x, y, bredd, höjd)` – Ritar direkt ut en fylld rektangel.

**Färglägga och rita ut**
* `ctx.fillStyle = "färgkod"` – Väljer vilken färg som ska användas (t.ex. `"#999999"` eller `"blue"`).
* `ctx.fill()` – Fyller formen du just ritat med den valda färgen.

**Bilder**
* `ctx.drawImage(bildvariabel, x, y, bredd, höjd)` – Ritar ut en förladdad bild på specifika koordinater med en viss storlek.

**Animering**
* `requestAnimationFrame(funktionsnamn)` – Säger åt webbläsaren att köra en specifik funktion inför nästa bilduppdatering (används för att skapa en loop).