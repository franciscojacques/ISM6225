/*
Author : Francisco Jacques
Date : 11\24\2024
Description: This script manages data from crud page for analytics pages.
*/

// Initialize data storage
let evDatabase = JSON.parse(localStorage.getItem('evDatabase')) || [];
let currentId = null;

// Form submission handler
document.getElementById('crud-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newEV = {
        id: currentId || Date.now(),
        model: document.getElementById('model').value,
        range: document.getElementById('range').value,
        price: document.getElementById('price').value,
        charging: document.getElementById('charging').value,
        region: document.getElementById('region').value
    };
    
    if (currentId) {
        evDatabase = evDatabase.map(ev => ev.id === currentId ? newEV : ev);
        currentId = null;
    } else {
        evDatabase.push(newEV);
    }
    
    localStorage.setItem('evDatabase', JSON.stringify(evDatabase));
    
    displayData();
    this.reset();
});

// Display data
function displayData() {
    const dataList = document.getElementById('data-list');
    dataList.innerHTML = '';
    
    evDatabase.forEach(ev => {
        const item = document.createElement('div');
        item.className = 'data-item';
        item.innerHTML = `
            <div>
                <strong>${ev.model}</strong> - 
                Range: ${ev.range} miles | 
                Price: $${ev.price} | 
                Charging Time: ${ev.charging}h | 
                Region: ${ev.region}
            </div>
            <button onclick="editItem(${ev.id})" class="edit-btn">Edit</button>
            <button onclick="deleteItem(${ev.id})" class="delete-btn">Delete</button>
        `;
        dataList.appendChild(item);
    });
}

// Edit item
function editItem(id) {
    const ev = evDatabase.find(ev => ev.id === id);
    if (ev) {
        document.getElementById('model').value = ev.model;
        document.getElementById('range').value = ev.range;
        document.getElementById('price').value = ev.price;
        document.getElementById('charging').value = ev.charging;
        document.getElementById('region').value = ev.region;
        currentId = id;
    }
}

// Delete item
function deleteItem(id) {
    evDatabase = evDatabase.filter(ev => ev.id !== id);
    localStorage.setItem('evDatabase', JSON.stringify(evDatabase));
    displayData();
}

// Read item and navigate to analytics page
document.getElementById('read-btn').addEventListener('click', function() {
    const model = document.getElementById('model').value;
    const ev = evDatabase.find(ev => ev.model === model);
    if (ev) {
        window.location.href = `analytics-page.html?model=${encodeURIComponent(model)}`;
    } else {
        alert('Model not found');
    }
});

// Initial display
displayData();
