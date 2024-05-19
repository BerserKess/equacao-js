const calculateBtn = document.getElementById('calculate');
const clearBtn = document.getElementById('clear');
const resultDiv = document.getElementById('result');

function calculate(ev){
    ev.preventDefault();

    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const number3 = document.getElementById('number3').value;

    let delta = Math.pow(number2,2) - 4 * number1 * number3;

    if (delta > 0){
        const rootOne = (-number2 + Math.sqrt(delta)) / (2 * number1);
        const rootTwo = (-number2 - Math.sqrt(delta)) / (2 * number1);

        resultDiv.innerHTML = `&#916 = ${delta}<br>X' = ${rootOne}<br> X'' = ${rootTwo}`;
    } else if (delta === 0){
        const root = (-number2 + Math.sqrt(delta)) / (2 * number1);
        resultDiv.innerHTML = `&#916 = ${delta}<br><br>X = ${root}`;
    } else if (delta < 0){
        resultDiv.innerHTML = `&#916 = ${delta}<br><br>Não existem raízes no conjunto dos número reais.`;
    }


}

function clear(ev){
    ev.preventDefault();
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('number3').value = '';
    resultDiv.innerHTML = null;
}

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", clear);
