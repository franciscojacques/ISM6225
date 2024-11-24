/*
Author : Francisco Jacques
Date : 11\24\2024
Description: This script animates the footer emojis
*/
const greetings = [
    { text: "Hello!", class: "hello" },
    { text: "Bonjour!", class: "bonjour" },
    { text: "Hola!", class: "hola" }
];
let index = 0;

setInterval(() => {
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerHTML = `<span class="greeting ${greetings[index].class}">${greetings[index].text}</span>`;
    index = (index + 1) % greetings.length;
}, 2000);
