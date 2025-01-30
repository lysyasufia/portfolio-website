document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('animated-text');
    const texts = ["Lysya Sufia", "Content Creator", "UI/UX Designer", "Photographer", "Videographer"];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function typeText() {
        if (isDeleting) {
            currentText = texts[index].substring(0, charIndex--);
        } else {
            currentText = texts[index].substring(0, charIndex++);
        }

        textElement.textContent = currentText;

        if (!isDeleting && charIndex === texts[index].length) {
            setTimeout(() => isDeleting = true, 1000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }

        setTimeout(typeText, isDeleting ? 50 : 100); // Adjust typing speed
    }

    typeText();
});

function showSlides() {
    console.log("showSlides running"); // Debugging
    // ... rest of your code
}
