/*
Author : Francisco Jacques
Date : 11\24\2024
Description: This script animates the footer emojis
*/
const carAttribute = document.getElementById('car-attribute');
const carIcons = ['🚗', '🧍‍♂️', '🧍‍♀️', '🛣️', '🛑', '🟢', '🛤️', '🚓', '⚙️', '🛞', '🛠️', '🚗', '🛑 STOP', '🚙', '🚕', '💰'];
const numberOfIcons = 40;

for (let i = 0; i < numberOfIcons; i++) {
    const iconSpan = document.createElement('span');
    iconSpan.textContent = carIcons[i % carIcons.length];
    carAttribute.appendChild(iconSpan);
}
