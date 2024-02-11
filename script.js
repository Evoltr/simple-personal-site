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
const cursor = document.getElementById("cursor");

// Function to type out the current string
function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, typingDelay);
    }
}

// Function to erase the current string
function erase() {
    if (charIndex > 0) {
        typedText.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, erasingDelay);
    }
}

// Start the typing animation on page load
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, typingDelay);
});
