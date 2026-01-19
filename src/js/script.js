const container = document.querySelector('#botoes-container');

let displayText = "0";
let resultDisplay = "0";
let calc = [0, 0];
let numero;

container.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-calc')) {
        const idClick = event.target.id;
        if (idClick.length == 5)
            numero = addTxtDisplay(idClick)
        document.getElementById("display-text").textContent = numero.toString();

        if (idClick === "btn-apaga") {
            document.getElementById("display-text").textContent = "0";
            displayText = "0";
            resultDisplay = "0";
            calc = [0, 0]
        }
        if (idClick === "btn-mais") {
            if (calc[0] === 0) {
                calc[0] = numero;
                console.log(calc);
                document.getElementById("display-text").textContent = "0";
                displayText = "0";
                resultDisplay = "0";
            }
            else{
                calc[1] = numero;
                calc[0] = calc[0] + calc[1];
                calc[1] = 0;
                console.log(calc);
                document.getElementById("display-text").textContent = calc[0].toString();
                displayText = "0";
                resultDisplay = "0";
            }
        }
    }
})

function addTxtDisplay(num) {
    const n = Array.from(num);
    if (displayText == "0") {
        displayText = n[4];
    }
    else
        displayText = + n[4];
    resultDisplay = resultDisplay + displayText;
    return parseFloat(resultDisplay);
}