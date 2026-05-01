const display = document.getElementById('display-content');
let currentUser = null;
let balance = 1000.00;
let currentScreen = 'LOGIN';

// Keypad Input Logic
function typeKey(num) {
    // Only type if we are on a screen that needs an amount
    const input = document.getElementById('amount');
    if (input) {
        input.value += num;
    } else {
        // Optional: If you want to type into username/password too
        const active = document.activeElement;
        if(active.tagName === 'INPUT') active.value += num;
    }
}

function clearKey() {
    const input = document.getElementById('amount');
    if (input) input.value = '';
    else document.activeElement.value = '';
}

function handleEnter() {
    if (currentScreen === 'LOGIN') handleLogin();
    else if (currentScreen === 'DEPOSIT') processTx('deposit');
    else if (currentScreen === 'WITHDRAW') processTx('withdraw');
}

// Auth
function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user.trim() !== "" && pass.trim() !== "") {
        currentUser = user;
        showMenu();
    } else { alert("Enter Credentials!"); }
}

// Screen Views
function showMenu() {
    currentScreen = 'MENU';
    display.innerHTML = `
        <h5>Welcome, ${currentUser}</h5>
        <div class="text-start mt-3">
            <p>1. Deposit</p>
            <p>2. Withdraw</p>
            <p>3. Check Balance</p>
            <p>4. Logout</p>
        </div>
    `;
}

function showDeposit() {
    currentScreen = 'DEPOSIT';
    display.innerHTML = `
        <h5>Enter Amount</h5>
        <input type="number" id="amount" class="form-control mb-2" readonly placeholder="Use keypad...">
        <button class="btn btn-success w-100" onclick="processTx('deposit')">CONFIRM</button>
    `;
}

function showWithdraw() {
    currentScreen = 'WITHDRAW';
    display.innerHTML = `
        <h5>Enter Amount</h5>
        <input type="number" id="amount" class="form-control mb-2" readonly placeholder="Use keypad...">
        <button class="btn btn-warning w-100" onclick="processTx('withdraw')">WITHDRAW</button>
    `;
}

function checkBalance() {
    display.innerHTML = `<h5>Balance: ₹${balance.toFixed(2)}</h5><button class="btn btn-info" onclick="showMenu()">Back</button>`;
}

function handleLogout() {
    location.reload(); // Simplest way to reset
}

// Logic
function processTx(type) {
    const val = document.getElementById('amount').value;
    const amt = parseFloat(val);
    if (isNaN(amt) || amt <= 0) return alert("Insufficient amount");
    
    if (type === 'withdraw' && amt > balance) {
        display.innerHTML = `<h4 class="text-danger">Insufficient Balance!</h4>`;
        setTimeout(showMenu, 2000);
        return;
    }
    
    if(type === 'deposit') balance += amt;
    else balance -= amt;
    
    display.innerHTML = `<h4 class="text-success">Success!</h4><p>New Balance: ₹${balance.toFixed(2)}</p>`;
    setTimeout(showMenu, 2000);
}