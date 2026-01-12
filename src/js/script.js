const container = document.querySelector('#botoes-container');

let displayText = '0';
let resultDisplay = 0;
let calc = [0, 0];

container.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-calc')) {
        const idClick = event.target.id;
        
        if (parseFloat(Array.from(idClick)[5]) >= 0.0)
            addTxtDisplay(idClick)
    }
})

function addTxtDisplay(num) {
    const n = Array.from(num);
    if (displayText !== "0") {
        displayText =+ n[5];
    }
    else
        displayText = n[5];
    resultDisplay = parseFloat(displayText);
    console.log(displayText)
    console.log(n)
}