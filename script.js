// Textos aleatorios para carrusel
const texts = [
    "...vestibulum mollis, tortor ac congue commodo",
    "...proin eu nulla eget purus commodo vehicula",
    "...mauris at ante accumsan hendrerit non a urna"
];

// Función para seleccionar un texto aleatorio
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

// Cambiamos el texto aleatorio al cargar la página y cada 2 segundos
document.addEventListener('DOMContentLoaded', () => {
    const randomTextElement = document.getElementById('randomText');

    // Cambiamos el texto al cargar la página
    randomTextElement.textContent = getRandomText();

    // Cambiamos el texto cada 2 segundos
    setInterval(() => {
        randomTextElement.textContent = getRandomText();
    }, 2000); 
})
