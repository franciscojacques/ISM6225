/*
Author : Francisco Jacques
Date : 11\24\2024
Description: This script animates the footer emojis
*/
const carParade = document.getElementById('car-parade');
const carIcons = ['🚗', '🚙', '🚓', '🚕', '🚐'];
const numberOfCars = 40; 

    for (let i = 0; i < numberOfCars; i++) {
        const carSpan = document.createElement('span');
        carSpan.textContent = carIcons[i % carIcons.length];
        carParade.appendChild(carSpan);
    }

