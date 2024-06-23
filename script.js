// Function to generate a random amount between a given range
function getRandomAmount(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// Function to show patterns for Amazon
function showAmazonPatterns() {
    const patternsDiv = document.getElementById('patterns');
    patternsDiv.innerHTML = ''; // Clear previous patterns

    for (let i = 1; i <= 5; i++) {
        let patternDiv = document.createElement('div');
        patternDiv.className = 'card pattern';
        let patternRange = [parseInt(getRandomAmount(20, 500)), parseInt(getRandomAmount(20, 500))]; // Random range for Amazon
        patternDiv.innerHTML = `<div class="card-body"><h5 class="card-title">Pattern ${i}</h5><p class="card-text">Range: $${patternRange[0]} - $${patternRange[1]}</p></div>`;
        patternDiv.dataset.range = patternRange;

        patternDiv.addEventListener('click', function() {
            showAmazonOrders(i, patternRange);
        });

        patternsDiv.appendChild(patternDiv);
    }
}

// Function to show orders for Amazon
function showAmazonOrders(patternIndex, patternRange) {
    const patternsDiv = document.getElementById('patterns');
    patternsDiv.innerHTML = ''; // Clear previous patterns

    for (let j = 1; j <= 5; j++) {
        let orderDiv = document.createElement('div');
        orderDiv.className = 'card order';
        orderDiv.innerHTML = `<div class="card-body"><h5 class="card-title">Order ${patternIndex}.${j}</h5></div>`;
        orderDiv.style.cursor = 'pointer'; // Add cursor pointer for interaction

        // Sub-orders section
        let subOrdersDiv = document.createElement('div');
        subOrdersDiv.className = 'sub-orders mt-3';
        subOrdersDiv.style.display = 'none'; // Initially hide sub-orders

        for (let k = 1; k <= 5; k++) {
            let subOrderAmount = getRandomAmount(1, 500);
            let subOrderCard = document.createElement('div');
            subOrderCard.className = 'card mb-2 sub-order';
            subOrderCard.innerHTML = `
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                            <h6 class="card-title">Sub-Order ${patternIndex}.${j}.${k}</h6>
                            <p class="card-text">Amount: $${subOrderAmount}</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/50" alt="Placeholder image">
                        </div>
                    </div>
                </div>
            `;
            subOrdersDiv.appendChild(subOrderCard);
        }

        orderDiv.appendChild(subOrdersDiv);

        // Toggle sub-orders visibility on order click
        orderDiv.addEventListener('click', function() {
            subOrdersDiv.style.display = subOrdersDiv.style.display === 'none' ? 'block' : 'none';
        });

        patternsDiv.appendChild(orderDiv);
    }

    // Add a back button to go back to patterns
    let backButton = document.createElement('button');
    backButton.className = 'btn btn-secondary back-button';
    backButton.textContent = 'Back to Patterns';
    backButton.addEventListener('click', function() {
        showAmazonPatterns();
    });
    patternsDiv.appendChild(backButton);
}

// Event listeners for schemes
document.getElementById('amazon').addEventListener('click', function() {
    showAmazonPatterns();
});

// Function to show patterns for Alibaba
function showAlibabaPatterns() {
    const patternsDiv = document.getElementById('patterns');
    patternsDiv.innerHTML = ''; // Clear previous patterns

    for (let i = 1; i <= 5; i++) {
        let patternDiv = document.createElement('div');
        patternDiv.className = 'card pattern';
        let patternRange = [parseInt(getRandomAmount(100, 3000)), parseInt(getRandomAmount(100, 3000))]; // Random range for Alibaba
        patternDiv.innerHTML = `<div class="card-body"><h5 class="card-title">Pattern ${i}</h5><p class="card-text">Range: $${patternRange[0]} - $${patternRange[1]}</p></div>`;
        patternDiv.dataset.range = patternRange;

        patternDiv.addEventListener('click', function() {
            showAlibabaOrders(i, patternRange);
        });

        patternsDiv.appendChild(patternDiv);
    }
}

// Function to show orders for Alibaba
function showAlibabaOrders(patternIndex, patternRange) {
    const patternsDiv = document.getElementById('patterns');
    patternsDiv.innerHTML = ''; // Clear previous patterns

    for (let j = 1; j <= 5; j++) {
        let orderDiv = document.createElement('div');
        orderDiv.className = 'card order';
        orderDiv.innerHTML = `<div class="card-body"><h5 class="card-title">Order ${patternIndex}.${j}</h5></div>`;
        orderDiv.style.cursor = 'pointer'; // Add cursor pointer for interaction

        // Sub-orders section
        let subOrdersDiv = document.createElement('div');
        subOrdersDiv.className = 'sub-orders mt-3';
        subOrdersDiv.style.display = 'none'; // Initially hide sub-orders

        for (let k = 1; k <= 5; k++) {
            let subOrderAmount = getRandomAmount(1, 500);
            let subOrderCard = document.createElement('div');
            subOrderCard.className = 'card mb-2 sub-order';
            subOrderCard.innerHTML = `
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                            <h6 class="card-title">Sub-Order ${patternIndex}.${j}.${k}</h6>
                            <p class="card-text">Amount: $${subOrderAmount}</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/50" alt="Placeholder image">
                        </div>
                    </div>
                </div>
            `;
            subOrdersDiv.appendChild(subOrderCard);
        }

        orderDiv.appendChild(subOrdersDiv);

        // Toggle sub-orders visibility on order click
        orderDiv.addEventListener('click', function() {
            subOrdersDiv.style.display = subOrdersDiv.style.display === 'none' ? 'block' : 'none';
        });

        patternsDiv.appendChild(orderDiv);
    }

    // Add a back button to go back to patterns
    let backButton = document.createElement('button');
    backButton.className = 'btn btn-secondary back-button';
    backButton.textContent = 'Back to Patterns';
    backButton.addEventListener('click', function() {
        showAlibabaPatterns();
    });
    patternsDiv.appendChild(backButton);
}

// Event listeners for schemes
document.getElementById('alibaba').addEventListener('click', function() {
    showAlibabaPatterns();
});

// Function to show patterns for AliExpress
function showAliExpressPatterns() {
    const patternsDiv = document.getElementById('patterns');
    patternsDiv.innerHTML = ''; // Clear previous patterns

    for (let i = 1; i <= 5; i++) {
        let patternDiv = document.createElement('div');
        patternDiv.className = 'card pattern';
        let patternRange = [parseInt(getRandomAmount(300, 15000)), parseInt(getRandomAmount(300, 15000))]; // Random range for AliExpress
        patternDiv.innerHTML = `<div class="card-body"><h5 class="card-title">Pattern ${i}</h5><p class="card-text">Range: $${patternRange[0]} - $${patternRange[1]}</p></div>`;
        patternDiv.dataset.range = patternRange;

        patternDiv.addEventListener('click', function() {
            showAliExpressOrders(i, patternRange);
        });

        patternsDiv.appendChild(patternDiv);
    }
}

// Function to show orders for AliExpress
function showAliExpressOrders(patternIndex, patternRange) {
    const patternsDiv = document.getElementById('patterns');
    patternsDiv.innerHTML = ''; // Clear previous patterns

    for (let j = 1; j <= 5; j++) {
        let orderDiv = document.createElement('div');
        orderDiv.className = 'card order';
        orderDiv.innerHTML = `<div class="card-body"><h5 class="card-title">Order ${patternIndex}.${j}</h5></div>`;
        orderDiv.style.cursor = 'pointer'; // Add cursor pointer for interaction

        // Sub-orders section
        let subOrdersDiv = document.createElement('div');
        subOrdersDiv.className = 'sub-orders mt-3';
        subOrdersDiv.style.display = 'none'; // Initially hide sub-orders

        for (let k = 1; k <= 5; k++) {
            let subOrderAmount = getRandomAmount(1, 500);
            let subOrderCard = document.createElement('div');
            subOrderCard.className = 'card mb-2 sub-order';
            subOrderCard.innerHTML = `
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                            <h6 class="card-title">Sub-Order ${patternIndex}.${j}.${k}</h6>
                            <p class="card-text">Amount: $${subOrderAmount}</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/50" alt="Placeholder image">
                        </div>
                    </div>
                </div>
            `;
            subOrdersDiv.appendChild(subOrderCard);
        }

        orderDiv.appendChild(subOrdersDiv);

        // Toggle sub-orders visibility on order click
        orderDiv.addEventListener('click', function() {
            subOrdersDiv.style.display = subOrdersDiv.style.display === 'none' ? 'block' : 'none';
        });

        patternsDiv.appendChild(orderDiv);
    }

    // Add a back button to go back to patterns
    let backButton = document.createElement('button');
    backButton.className = 'btn btn-secondary back-button';
    backButton.textContent = 'Back to Patterns';
    backButton.addEventListener('click', function() {
        showAliExpressPatterns();
    });
    patternsDiv.appendChild(backButton);
}

// Event listeners for schemes
document.getElementById('aliexpress').addEventListener('click', function() {
    showAliExpressPatterns();
});

// Initial load to show Amazon patterns
showAmazonPatterns();