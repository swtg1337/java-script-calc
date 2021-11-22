function clearAll() {
    document.getElementById('expression').value = "";
    document.getElementById('result').value = "";
    document.getElementById('error').style.display = "none";
}

function displayError(message) {
	document.getElementById('expression').value = "";
    document.getElementById('error').innerHTML = `<b>Ошибка!</br>${message}</b>`;
    document.getElementById('error').style.display = "block";
}

function calc() {
    const x = document.getElementById('expression').value;
    let error = null;
    
    if (!x) {
        displayError('Поле ввода пустое');
        
        return;
    }
    
    const match = x.match (/^\s*(\d+)\s*([+\-*/])\s*(\d+)\s*$/);

		if (!match){
        displayError('Введите корректное выражение');
        
        return;
    }
        
    const op1 = Number(match[1]);
    const operator = match[2];
    const op2 = Number(match[3]);

		clearAll();
    document.getElementById('result').value = processExpression(operator, op1, op2);
}

function processExpression(operator, op1, op2){
    switch (operator) {
        case '+':
            return op1 + op2;
        case '-':
						return op1 - op2;
        case '*':
            return op1 * op2;
        case '/': 
            if (op2 == 0) {
                displayError('На 0 делить нельзя')
            } else {
                return op1 / op2;
            }
        default:
        	throw Error(`undefined operator ${operator}`)
    }
}