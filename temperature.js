//input element inside of div. instead of using getElementById()
const celciusInput = document.querySelector("#celcius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const outputInput =document.querySelector("#output > input");

function celciusToFahrenheit() {
    // console.log(celciusInput.value);
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    // console.log(fTemp);
    outputInput.value = fTemp;
}

function fahrenheitToCelcius() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    // console.log(cTemp);
    outputInput.value = cTemp;
}

//event listeners (any changes to input fields)
celciusInput.addEventListener('input', celciusToFahrenheit);
fahrenheitInput.addEventListener('input', fahrenheitToCelcius);

//input box
//based on toggle selection 
//perform that function 



