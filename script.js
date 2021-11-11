function clearall() {
    document.getElementById('input').value = "";
    document.getElementById('result').value = "";
}

function calc() {
    let x = document.getElementById('input').value;
    if (x == ""){
        alert('Введите выражение в поле для ввода');
    } else { 
        if (x.match (/^\d+[+\-*/]\d+$/ ) != x){
            alert('Введите корректное выражение')
        } else {
            let firstnumber = Number(x.match(/^\d+/));
            let operator = x.match(/[+\-*/]/);
            let secondnumber = Number(x.match(/\d+$/));
            
            document.getElementById('result').value = (operator == "+") ? firstnumber + secondnumber:
                (operator == "-") ? firstnumber - secondnumber:
                (operator == "/") ? firstnumber / secondnumber:
                firstnumber * secondnumber;
        }
    }  
}



