// --- Del 1: inställningar och grundläggande ---

// 1. Hämta element och sätt upp canvas
// Hämta canvas-elementet
// Skapa en 2D-kontext (ctx)
// Hämta knapparna .ubat-upp, .ubat-ner och .slapp-bubbla


// 2. Ladda in bilderna
// Skapa ett Image-objekt för ubåten -> submarine.png
// Skapa ett Image-objekt för bakgrunden -> hav.jpg


// 3. Skapa dataobjekt
// Skapa ett objekt ubat med x (t.ex. 100) och y (t.ex. 150)
// Skapa ett objekt bubbla med x (t.ex. 250), y (t.ex. canvas.height) och spela: false


// --- Del 2: rita på canvas ---

// 4. Rita ubåten
function ritaUbat() {
    // Använd drawImage med ubåtsbilden, ubat.x och ubat.y
    // Sätt bredd till 120 och höjd till 80

}

// 5. Rita bubblan
function ritaBubbla() {
    // Använd beginPath, fillStyle, arc och fill
    // Sätt färgen till rgba(255, 255, 255, 0.5)

}


// --- Del 3: interaktion och animering ---

// 6. Styra ubåten med knappar
// Lägg till click-lyssnare på .ubat-upp: minska ubat.y
// Lägg till click-lyssnare på .ubat-ner: öka ubat.y


// 7. Animera bubblan
// Lägg till click-lyssnare på .slapp-bubbla: sätt bubbla.spela = true

function animerabubbla() {
    // Om bubbla.spela är true: minska bubbla.y
    // Om bubbla.y < -50: återställ y till canvas.height, välj nytt slumpmässigt x

}


// 8. Animationsloopen
function gameLoop() {


}
