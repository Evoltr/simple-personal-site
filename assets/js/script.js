const typedText = document.querySelector("#typed-text");

// An array of strings that will be typed out
const textArray = [
    "Web Developer",
    "Front-End Developer",
    "Prompt Engineer",
];

// Index of the current string being typed
let textArrayIndex = 0;

// Index of the current character being typed in the current string
let charIndex = 0;

// Speed of typing in milliseconds
const typingSpeed = 100;

// Speed of erasing in milliseconds
const erasingSpeed = 50;

// Delay before typing in milliseconds
const typingDelay = 1500;

// Delay before erasing in milliseconds
const erasingDelay = 1000;

// Blink animation toggle
const blink = document.getElementById("blink");

// Function to type out the current string
function type() {
    // If finished typing the current string, schedule erase and return early.
    if (charIndex >= textArray[textArrayIndex].length) {
        setTimeout(erase, typingDelay);
        return;
    }

    // Append the next character and schedule the next call.
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex++);
    setTimeout(type, typingSpeed);
}

// Function to erase the current string
function erase() {
    // If finished erasing the current string, reset for the next string and schedule type.
    if (charIndex === 0) {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, erasingDelay);
        return;
    }

    // Erase the last character and schedule the next call.
    typedText.textContent = textArray[textArrayIndex].substring(0, --charIndex);
    setTimeout(erase, erasingSpeed);
}

// Start the typing animation on page load
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, typingDelay);
});

// Modal functionality
const aboutMeModal = document.getElementById("about-me-modal");
const portfolioModal = document.getElementById("portfolio-modal");
const aboutMeLink = document.getElementById("about-me-link");
const portfolioLink = document.getElementById("portfolio-link");
const closeAboutMe = document.getElementById("close-about-me");
const closePortfolio = document.getElementById("close-portfolio");

function closeModal(modal) {
    const modalContent = modal.querySelector('.modal-content');
    modalContent.classList.add('closing');
    setTimeout(() => {
        modal.style.display = 'none';
        modalContent.classList.remove('closing');
    }, 300);
}

aboutMeLink.addEventListener("click", () => {
    event.preventDefault();
    aboutMeModal.style.display = "block";
});

portfolioLink.addEventListener("click", () => {
    event.preventDefault();
    portfolioModal.style.display = "block";
});

closeAboutMe.addEventListener("click", () => {
    aboutMeModal.style.display = "none";
});

closePortfolio.addEventListener("click", () => {
    portfolioModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == aboutMeModal) {
        closeModal(aboutMeModal);
    }
    if (event.target == portfolioModal) {
        closeModal(portfolioModal);
    }
});