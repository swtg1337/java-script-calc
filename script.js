function clearall() {

    document.getElementById('input').value = "";
    document.getElementById('result').value = "";
}

function calc() {

    if (document.getElementById('input').value == "")
        {
            alert('Введите выражение');
        } else 
            { 
            document.getElementById('result').value = (eval(input.value));
            }
    if (document.getElementById('result').value == "")
        {
            alert('Выражение введено некорректно')
        }
   
    
}