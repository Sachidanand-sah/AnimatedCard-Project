// Select all the cards
const cards = document.querySelectorAll('.card');

// Add a click event listener to each card
cards.forEach((card) => {
    card.addEventListener('click', () => {
        // Add the fly-away animation class to the clicked card
        card.classList.add('fly-away');

        // Optional: Remove the card from the DOM after animation ends
        card.addEventListener('animationend', () => {
            card.remove();
        });
    });
});
