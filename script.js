document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.cards-container');

    cardContainer.addEventListener('click', (event) => {
        // Encuentra el .card-header más cercano al elemento clickeado
        const cardHeader = event.target.closest('.card-header');

        if (cardHeader) {
            const card = cardHeader.closest('.info-card');
            if (card) {
                // Alternar la clase 'expanded' en la tarjeta clickeada
                card.classList.toggle('expanded');

                // Opcional: cerrar otras tarjetas al abrir una
                
                const allCards = cardContainer.querySelectorAll('.info-card');
                allCards.forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('expanded')) {
                        otherCard.classList.remove('expanded');
                    }
                });
                
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.info-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase activa de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            
            // Filtrar tarjetas
            cards.forEach(card => {
                if(category === 'todas') {
                    card.style.display = 'block';
                } else {
                    card.style.display = card.dataset.category === category ? 'block' : 'none';
                }
            });
        });
    });
});

function runSimulation() {
    const canvas = document.getElementById("piCanvas");
    const ctx = canvas.getContext("2d");
    const puntosTotales = parseInt(document.getElementById("puntos").value);
    let puntosDentro = 0;

    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dibujar cuadrado y círculo
    ctx.strokeStyle = "#53a8b6";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, canvas.width/2, 0, 2 * Math.PI);
    ctx.stroke();

    // Generar puntos
    for (let i = 0; i < puntosTotales; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        // Verificar si está dentro del círculo
        const centroX = canvas.width / 2;
        const centroY = canvas.height / 2;
        const distancia = Math.sqrt((x - centroX)**2 + (y - centroY)**2);
        if (distancia <= 200) {
            ctx.fillStyle = "#6ee7b7"; // Verde para puntos dentro
            puntosDentro++;
        } else {
            ctx.fillStyle = "#fca5a5"; // Rojo para puntos fuera
        }
        
        ctx.fillRect(x, y, 2, 2); // Dibujar punto
    }

    // Calcular resultados
    const piEstimado = 4 * (puntosDentro / puntosTotales);
    const error = ((Math.abs(Math.PI - piEstimado) / Math.PI) * 100).toFixed(2);

    // Actualizar UI
    document.getElementById("dentro").textContent = puntosDentro;
    document.getElementById("piEst").textContent = piEstimado.toFixed(4);
    document.getElementById("error").textContent = `${error}%`;
}
