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