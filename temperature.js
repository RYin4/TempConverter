//input element inside of div. instead of using getElementById()
const input = document.querySelector("#input > input");
const output = document.querySelector("#output > input");



function inputToCelcius() {
    if (document.getElementById('temp_c').checked) {
            const fTemp = parseFloat(input.value);
            const cTemp = (fTemp - 32) * (5/9);
            output.value = cTemp;
    
    }
}

function inputToFahrenheit() {
    if (document.getElementById('temp_f').checked) {
    const cTemp = parseFloat(input.value);
    const fTemp = (cTemp * (9/5)) + 32;
    output.value = fTemp;
    }
}


if (!document.getElementById('temp_c').checked && !document.getElementById('temp_f').checked ) {
    window.alert("No Temperature Scale Has Been Selected")
}

input.addEventListener('input', inputToCelcius);
input.addEventListener('input', inputToFahrenheit);
