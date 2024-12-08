class Calculator {
    constructor() {
        // Initialise les valeurs de la calculatrice
        this.previousOperand = '';
        this.currentOperand = '0';
        this.operation = undefined;
        this.resultDisplayed = false;
    }

    clear() {
        // Réinitialise la calculatrice
        this.previousOperand = '';
        this.currentOperand = '0';
        this.operation = undefined;
        this.resultDisplayed = false;
    }

    delete() {
        // Supprime le dernier caractère ou réinitialise
        if (this.currentOperand === '0') return;
        if (this.resultDisplayed) {
            this.clear();
        } else if (this.currentOperand.length === 1) {
            this.currentOperand = '0';
        } else {
            this.currentOperand = this.currentOperand.slice(0, -1);
        }
    }

    appendNumber(number) {
        // Ajoute un chiffre ou un point au nombre courant
        if (this.resultDisplayed) {
            this.currentOperand = number;
            this.resultDisplayed = false;
            return;
        }
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else if (number === '.' && this.currentOperand.includes('.')) {
            return;
        } else {
            this.currentOperand += number;
        }
    }

    chooseOperation(operation) {
        // Définit l'opération mathématique
        if (this.currentOperand === '0' && this.previousOperand === '') return;
        if (this.resultDisplayed) {
            this.previousOperand = this.currentOperand;
            this.resultDisplayed = false;
        } else if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '0';
    }

    compute() {
        // Effectue le calcul en fonction de l'opération choisie
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        let computation;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '−':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
                case '÷':
                    if (current === 0) {
                        showMessage("Brozer, c'est impossible ce que tu me demandes là !");
                        return;
                    }
                    computation = prev / current;
                    break;
                computation = prev / current;
                break;
            case '%':
                computation = prev % current;
                break;
            default:
                return;
        }

        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = '';
        this.resultDisplayed = true;
    }

    updateDisplay() {
        // Met à jour les éléments de l'affichage
        document.querySelector('.current-operand').textContent = this.currentOperand;
        if (this.operation != null) {
            document.querySelector('.previous-operand').textContent = `${this.previousOperand} ${this.operation}`;
        } else {
            document.querySelector('.previous-operand').textContent = '';
        }
    }
    
}
function showMessage(message) {
    // Crée une div pour le message
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;

    // Style de base
    messageDiv.style.cssText = `
        background-color: #444;
        color: #fff;
        padding: 15px;
        border-radius: 5px;
        margin-bottom: 10px;
        font-family: Arial, sans-serif;
        font-size: 1rem;
        text-align: center;
        opacity: 1;
        transition: opacity 0.5s ease-out;
    `;

    // Ajoute la div au conteneur
    const container = document.getElementById('message-container');
    container.appendChild(messageDiv);

    // Supprime la div après 3 secondes
    setTimeout(() => {
        messageDiv.style.opacity = '0'; // Transition pour disparaître
        setTimeout(() => messageDiv.remove(), 500); // Supprime après la transition
    }, 3000);
}

// Instancie et initialise la calculatrice
const calculator = new Calculator();
calculator.clear();
calculator.updateDisplay();

// Ajoute les événements sur les boutons
// Gestion des événements pour tous les boutons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const type = button.dataset.type;
        const value = button.dataset.value;

        if (type === 'clear') {
            calculator.clear();
        } else if (type === 'delete') {
            calculator.delete();
        } else if (type === 'equals') {
            calculator.compute();
        } else if (type === 'operator') {
            calculator.chooseOperation(value);
        } else if (type === 'number') {
            calculator.appendNumber(value);
        }
        calculator.updateDisplay();
    });
});

// Gestionnaire pour le bouton spécial "🖩"
document.querySelector('[data-type="special"]').addEventListener('click', () => {
    showMessage("Tu crois vraiment que j'ai fait la calculatrice scientifique ?");
});