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
                /*
                const allCards = cardContainer.querySelectorAll('.info-card');
                allCards.forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('expanded')) {
                        otherCard.classList.remove('expanded');
                    }
                });
                */
            }
        }
    });
});
