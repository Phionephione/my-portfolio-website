// static/js/main.js

// Wait until the entire HTML page is loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

    // --- Typing Effect Logic ---
    const roles = ["BCA Student", "Aspiring Developer", "Problem Solver", "Tech Enthusiast"];
    let roleIndex = 0;
    let charIndex = 0;
    const typingElement = document.querySelector('.typing-effect');

    function type() {
        if (charIndex < roles[roleIndex].length) {
            typingElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        }
    }
    
    // --- Scroll Reveal Animation Logic ---
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

    // Initial calls to start the animations when the page first loads
    type();
    reveal();

    // --- NEW: Image Modal Logic ---

    // Get the modal elements
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-button");

    // Get all clickable certificate cards
    const certificateCards = document.querySelectorAll(".card.clickable");

    // Loop through each card and add a click event listener
    certificateCards.forEach(card => {
        card.addEventListener('click', function() {
            modal.style.display = "block"; // Show the modal
            // Get the image path from the data-image attribute and set it as the source for the modal image
            modalImg.src = this.dataset.image;
        });
    });

    // When the user clicks on the close button (X), close the modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere on the modal background (outside the image), close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});