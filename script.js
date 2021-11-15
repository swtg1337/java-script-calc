function clearall() {
    document.getElementById('input').value = "";
    document.getElementById('result').value = "";
    document.getElementById('error').style.display = "none";
}

function calc() {
    let x = document.getElementById('input').value;
    if (!x){
        document.getElementById('result').value = "";
        document.getElementById('error').innerHTML = '<b>Ошибка!</br>Поле для ввода пустое</b>';
        document.getElementById('error').style.display = "block";
    } else { 
        if (x.match (/^ *\d+ *[+\-*/] *\d+ *$/) != x){
            document.getElementById('result').value = "";
            document.getElementById('error').innerHTML = '<b>Ошибка!</br>Введите корректное выражение</b>';
            document.getElementById('error').style.display = "block";
        } else {
            let firstnumber = Number(x.match(/^ *\d+ */));
            let operator = x.match(/[-+/*]/);
            let secondnumber = Number(x.match(/ *\d+ *$/));
                
            SwitchResult(operator[0], firstnumber, secondnumber);
        }
    }  
}

function SwitchResult(a,b,c){
    switch (a) {
        case '+':
            document.getElementById('result').value = b + c;
            break;
        case '-':
            document.getElementById('result').value = b - c;
            break;
        case '*':
            document.getElementById('result').value = b * c;
            break;
        case '/': 
            document.getElementById('result').value = b / c;   
    }
}



