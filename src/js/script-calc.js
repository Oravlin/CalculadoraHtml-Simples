const container = document.querySelector('#botoes-container');

let displayText = "0";
let resultDisplay = "0";
let calc = [0, "", 0];
let numero;
let result;

container.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-calc')) {
        const idClick = event.target.id;
        if (idClick.length == 5) {
            numero = addTxtDisplay(idClick)
            console.log(numero);
        }
        document.getElementById("display-text").textContent = numero.toString();

        if (idClick === "btn-apaga") {
            document.getElementById("display-text").textContent = "0";
            displayText = "0";
            resultDisplay = "0";
            calc = [0, 0]
        }

        if (idClick === "btn-igual") {
            calc[2] = numero;
            if (calc[1] === "+") {
                console.log(calc);
                result = calc[0] + calc[2];
                calc[0] = result;
                calc[2] = 0;
                document.getElementById("display-text").textContent = result.toString();
                displayText = 0;
                resultDisplay = 0;
            }

            if (calc[1] === "-") {
                console.log(calc);
                result = calc[0] - calc[2];
                calc[0] = result;
                calc[2] = 0;
                document.getElementById("display-text").textContent = result.toString();
                displayText = 0;
                resultDisplay = 0;
            }

            if (calc[1] === "*") {
                console.log(calc);
                result = calc[0] * calc[2];
                calc[0] = result;
                calc[2] = 0;
                document.getElementById("display-text").textContent = result.toString();
                displayText = 0;
                resultDisplay = 0;
            }

            if (calc[1] === "/") {
                console.log(calc);
                result = calc[0] / calc[2];
                calc[0] = result;
                calc[2] = 0;
                document.getElementById("display-text").textContent = result.toString();
                displayText = 0;
                resultDisplay = 0;
            }

        }

        if (idClick === "btn-mais") 
            operacaoManeira("+")
        

        if (idClick === "btn-menos") 
            operacaoManeira("-")
        

        if (idClick === "btn-mult")
            operacaoManeira("*")

        if(idClick === "btn-div")
            operacaoManeira("/")
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

function operacaoManeira(pao) {
    if (calc[0] === 0) {
        calc[0] = numero;
        console.log(calc);
        document.getElementById("display-text").textContent = "0";
        displayText = "0";
        resultDisplay = "0";
    }
    else {
        calc[2] = numero;
        if (calc[1] === pao) {
            switch (pao) {
                case "-":
                    calc[0] = calc[0] - calc[2];
                    break;
                case "+":
                    calc[0] = calc[0] + calc[2];
                    break;
                case "*":
                    calc[0] = calc[0] * calc[2];
                    break;
                case "/":
                    calc[0] = calc[0] / calc[2];
                    break;
            }

            calc[2] = 0;
        }
        console.log(calc);
        document.getElementById("display-text").textContent = calc[0].toString();
        displayText = "0";
        resultDisplay = "0";
    }
    calc[1] = pao;
}