const insertNumber = (num) => {
    const display = document.getElementById('display');

    let valorVar = display.textContent;

    if (valorVar === '0' || valorVar === 'erro') {
        display.textContent = num
    } else {
        display.textContent = valorVar + num
    }
}

const ac = () => {
    const display = document.getElementById('display');
    display.textContent = '0';
}

const backspace = () => {
    const display = document.getElementById('display');
    let valorVar = display.textContent;
    if (valorVar.includes(' ')) {
        display.textContent = valorVar.slice(0, -3);
        return;
    }
    display.textContent = valorVar.slice(0, -1);
}

const divide = () => {
    const display = document.getElementById('display');
    display.textContent += ' / ';
}

const multiply = () => {
    const display = document.getElementById('display');
    display.textContent += ' * ';
}

const subtract = () => {
    const display = document.getElementById('display');
    display.textContent += ' - ';
}

const add = () => {
    const display = document.getElementById('display');
    display.textContent += ' + ';

}

const percent = () => {
    const display = document.getElementById('display');
    let valorVar = display.textContent.trim();
    
    const partes = valorVar.split(' ');
    
    if (partes.length === 3) {
        let num1 = parseFloat(partes[0]);
        let operador = partes[1];
        let num2 = parseFloat(partes[2]);

        let valorPercentual = num2 / 100;
        let resultadoParcial = valorPercentual;

        if (operador === '+' || operador === '-') {
            resultadoParcial = num1 * valorPercentual;
        } 

        if (operador === '*' || operador === '/') {
              display.textContent = `${num1} ${operador} ${valorPercentual}`;
              return;
        }

        if (operador === '+' || operador === '-') {
              display.textContent = `${num1} ${operador} ${resultadoParcial}`;
              return;
        }
        
    } else if (partes.length === 1 && valorVar !== 'erro' && valorVar !== '') {
        let num = parseFloat(valorVar);
        display.textContent = (num / 100).toString();
    }
}

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const percentual = (a) => a / 100;

const calcular = () => {
    const display = document.getElementById('display');
    let valorVar = display.textContent;
    let [num1, operador, num2] = valorVar.split(' ');

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operador) {
        case '+':
            display.textContent = somar(num1, num2);
            break;
        case '-':
            display.textContent = subtrair(num1, num2);
            break;
        case '*':
            display.textContent = multiplicar(num1, num2);
            break;
        case '/':
            display.textContent = dividir(num1, num2);
            break;
        default:
            display.textContent = 'erro';
    }

}

toggleTheme = () => {
    const el = document.getElementById('theme');
    el.href = el.href.includes('light.css') ? './dark.css' : './light.css';

    const button = document.getElementById('button-theme');
    button.textContent = button.textContent === '☀️' ? '🌙' : '☀️';
}