/*
Author : Francisco Jacques
Date : 11\24\2024
Description: This script creates data for analytics pages.
*/

// Fetch data from localStorage
let evDatabase = JSON.parse(localStorage.getItem('evDatabase')) || [];

// Get query parameter
const urlParams = new URLSearchParams(window.location.search);
const model = urlParams.get('model');

// Display data
function displayData() {
    const tableBody = document.getElementById('evTableBody');
    tableBody.innerHTML = '';
    
    evDatabase.forEach(ev => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ev.model}</td>
            <td>${ev.range}</td>
            <td>${ev.price}</td>
            <td>${ev.region}</td>
        `;
        tableBody.appendChild(row);
    });

    updateCharts();
}

// Update charts
function updateCharts() {
    const evData = {
        models: evDatabase.map(ev => ev.model),
        ranges: evDatabase.map(ev => ev.range),
        prices: evDatabase.map(ev => ev.price),
        regions: evDatabase.map(ev => ev.region)
    };

    // Combined Line Chart
    const comparisonCtx = document.getElementById('comparisonChart').getContext('2d');
    new Chart(comparisonCtx, {
        type: 'line',
        data: {
            labels: evData.models,
            datasets: [
                {
                    label: 'Range (miles)',
                    data: evData.ranges,
                    borderColor: 'rgba(26, 115, 232, 1)',
                    backgroundColor: 'rgba(26, 115, 232, 0.5)',
                    fill: false,
                    tension: 0.1
                },
                {
                    label: 'Price ($)',
                    data: evData.prices,
                    borderColor: 'rgba(52, 168, 83, 1)',
                    backgroundColor: 'rgba(52, 168, 83, 0.5)',
                    fill: false,
                    tension: 0.1
                },
                {
                    label: 'Streaming Market Value (USD Billion)',
                    data: [555.89, 674.25, 2660.88], // Example data points
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    fill: false,
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'EV Range, Price, and Streaming Market Value Comparison'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            }
        }
    });

    // Region Pie Chart
    const regionCtx = document.getElementById('regionChart').getContext('2d');
    const regionCounts = evData.regions.reduce((acc, region) => {
        acc[region] = (acc[region] || 0) + 1;
        return acc;
    }, {});

    new Chart(regionCtx, {
        type: 'pie',
        data: {
            labels: Object.keys(regionCounts),
            datasets: [{
                label: 'Region Distribution',
                data: Object.values(regionCounts),
                backgroundColor: ['rgba(26, 115, 232, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(255, 206, 86, 0.5)'],
                borderColor: ['rgba(26, 115, 232, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'EV Region Distribution'
                }
            }
        }
    });
}

// Initial display
displayData();
