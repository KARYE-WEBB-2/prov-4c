// --- Del 1: inställningar och grundläggande ---

// 1. Setup
// Ställ in canvas för 2d

// Hämta knapparna #dyk, #ytan och #slapp-bubbla här:


// 2. Ladda in bilden
// Skapa ett Image-objekt för ubåten och sätt src till "./submarine.png"


// 3. Skapa dina dataobjekt
// Skapa objektet 'bubbla' med x, y och variabeln spela (false från början)

// Skapa objektet 'ubat' med x och y



// --- Del 2: rita på canvas ---

// 4. Rita ubåten
function ritaUbat() {
    // Använd drawImage för att rita ut ubåtsbilden
    // Sätt bredd till 120 och höjd till 80
    
}

// 5. Rita bubblan
function ritaBubbla() {
    // Använd canvas-metoder (beginPath, arc, fill/stroke) för att rita ut en cirkel.
    // Sätt färgen till t.ex. rgba(255, 255, 255, 0.5)
    
}


// --- Del 3: interaktion och animering ---

// 6. Styra ubåten med knappar
// Lägg till en eventlistener för "Dyk" (#dyk) som ökar ubåtens y-värde

// Lägg till en eventlistener för "Upp till ytan" (#ytan) som minskar ubåtens y-värde


// 7. Animera bubblan (logik)
// Lägg till en eventlistener för "Släpp ut bubbla" (#slapp-bubbla) som sätter bubblans 'spela' till true


function animeraBubbla() {
    // Gör en if-sats: Om bubblan ska spelas (spela är true):
    // 1. Minska bubblans y-värde (så den flyter uppåt)
    // 2. Gör en ny if-sats: Om y-värdet blir mindre än t.ex. -50, 
    //    återställ y till canvasens höjd (canvas.height) så den kommer från botten igen.
    
}


// 8. Skapa animationsloopen
function gameLoop() {
    // a) Rensa hela canvasen
    
    // b) Anropa ritaUbat()
    
    // c) Anropa ritaBubbla()
    
    // d) Anropa animeraBubbla()
    
    // e) Använd requestAnimationFrame för att anropa gameLoop igen
    
}

// Starta loopen för första gången här!
