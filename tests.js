// Simule des clics pour automatiser les tests
function simulateClick(buttonValue) {
    const button = document.querySelector(`[data-value="${buttonValue}"]`);
    if (!button) {
        console.error(`Bouton avec data-value="${buttonValue}" introuvable.`);
        return;
    }
    button.click();
}

// Test helpers
function getCurrentDisplay() {
    return document.querySelector('.current-operand').textContent.trim();
}

function getPreviousDisplay() {
    return document.querySelector('.previous-operand').textContent.trim();
}

// Fonction pour afficher un résultat de test
function logTestResult(testName, condition) {
    const result = condition ? "✅" : "❌";
    console.log(`${testName}: ${result}`);
}

// Tests
function runTests() {
    console.log('Début des tests automatiques :');

    function resetCalculator() {
        calculator.clear();
        calculator.updateDisplay();
    }

    // Test : Initialisation
    resetCalculator();
    logTestResult(
        'Test 1 : Initialisation',
        getCurrentDisplay() === '0' && getPreviousDisplay() === ''
    );

    // Test : Addition
    resetCalculator();
    simulateClick('5');
    simulateClick('+');
    simulateClick('3');
    simulateClick('=');
    logTestResult(
        'Test 2 : Addition',
        getCurrentDisplay() === '8'
    );

    // Test : Soustraction

    resetCalculator();
    // Simuler 10 en cliquant sur 1 et 0
    simulateClick('1');
    simulateClick('0');
    simulateClick('−');
    simulateClick('4');
    simulateClick('=');
    logTestResult(
        'Test 3 : Soustraction',
        getCurrentDisplay() === '6'
    );

    // Test : Division par zéro
    resetCalculator();
    simulateClick('8');
    simulateClick('÷');
    simulateClick('0');
    simulateClick('=');
    logTestResult(
        'Test 4 : Division par zéro',
        getCurrentDisplay() === '0' // Diviser par zéro retourne 0 par défaut
    );

    // Test : Concaténation de nombres
    resetCalculator();
    simulateClick('1');
    simulateClick('2');
    simulateClick('3');
    logTestResult(
        'Test 5 : Concaténation de nombres',
        getCurrentDisplay() === '123'
    );

    // Test : Effacement
    resetCalculator();
    simulateClick('1');
    simulateClick('2');
    simulateClick('3');
    simulateClick('←');
    logTestResult(
        'Test 6 : Effacement',
        getCurrentDisplay() === '12'
    );

    console.log('Fin des tests automatiques.');
}

// Lancer les tests après le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    calculator.clear(); // Réinitialisation globale
    calculator.updateDisplay();
    runTests();
});