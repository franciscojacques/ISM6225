/*
Author : Francisco Jacques
Date : 11\24\2024
Description: This script animates the footer emojis
*/

const evAttribute = document.getElementById('ev-attribute');
const evIcons = ['📊', '📈', '🔍', '📋', '📉', '💻', '💡', '🚀', '🌐', '🔋', '🔌', '⚙️', '🔧', '💰', '💲'];
const numberOfIcons = 40;

for (let i = 0; i < numberOfIcons; i++) {
    const iconSpan = document.createElement('span');
    iconSpan.textContent = evIcons[i % evIcons.length];
    evAttribute.appendChild(iconSpan);
}

