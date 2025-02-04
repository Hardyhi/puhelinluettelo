const readline = require("readline");

// Luodaan käyttöliittymä käyttäjän syötteelle
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Puhelinluettelo taulukko
let henkilot = [
    { nimi: "Aku Ankka", numero: "040-1234567" },
    { nimi: "Hessu Hopo", numero: "050-7654321" }
];

// Funktio hakee puhelinnumeron nimen perusteella
function haeNumero(henkilot, nimi) {
    for (let i = 0; i < henkilot.length; i++) {
        if (henkilot[i].nimi.toLowerCase() === nimi.toLowerCase()) {
            return henkilot[i].numero;
        }
    }
    return "Numeroa ei löytynyt.";
}

// Kysytään käyttäjältä toiminto
function kysyToiminto() {
    rl.question("Lisää henkilö 1\nHae henkilöä 2\nLopeta käyttö 3\nAnna valinta numerona: ", (syote) => {
        if (syote === "1") {
            // Lisätään uusi henkilö
            rl.question("Anna nimi: ", (uusiNimi) => {
                rl.question("Anna puhelinnumero: ", (uusiNumero) => {
                    henkilot.push({ nimi: uusiNimi, numero: uusiNumero });
                    console.log(`Lisätty: ${uusiNimi} - ${uusiNumero}\n`);
                    kysyToiminto();
                });
            });

        } else if (syote === "2") {
            // Haetaan henkilöä
            rl.question("Anna nimi: ", (haettavaNimi) => {
                let numero = haeNumero(henkilot, haettavaNimi);
                console.log(`Henkilö: ${haettavaNimi}, numero: ${numero}\n`);
                kysyToiminto();
            });

        } else if (syote === "3") {
            // Lopetetaan ohjelma
            console.log("Ohjelma lopetettu.");
            rl.close();

        } else {
            console.log("Virheellinen valinta, yritä uudelleen.");
            kysyToiminto();
        }
    });
}

// Käynnistetään ohjelma
kysyToiminto();
