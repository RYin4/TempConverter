//author: Randy Yin

//input element inside of div. instead of using getElementById()
const input = document.querySelector("#input > input");
const output = document.querySelector("#output > input");

function inputToCelcius() {
    if (document.getElementById('temp_f').checked) {

        //if the input.value contains any letters = output is false
        let isNum = /^\d+$/.test(input.value);
        if (isNum) {
            console.log("true")
            const fTemp = parseFloat(input.value);
            const cTemp = (fTemp - 32) * (5/9);
            const n = cTemp.toPrecision(6);
            output.value = `${fTemp} F = ${n} C`
        } else {
            window.alert("ERROR: Numbers Only!")
            console.log("false")
        }
    }
}

function inputToFahrenheit() {
    if (document.getElementById('temp_c').checked) {

        //if the input.value contains any letters = output is false
        let isNum = /^\d+$/.test(input.value);
        if (isNum) {
            console.log("true")
            const cTemp = parseFloat(input.value);
            const fTemp = (cTemp * (9/5)) + 32;
            const n = fTemp.toPrecision(6);
            output.value = `${cTemp} C = ${n} F`;
        } else {
            window.alert("ERROR: Numbers Only!")
            console.log("false")
        }
    }
}

//if no temp scale selected = error, otherwise send input to functions 
if (input.addEventListener('input', function (evt) {
    if (!document.getElementById('temp_c').checked && !document.getElementById('temp_f').checked) {
        console.log('error: no temp scale selection')
        window.alert("Error: No Temp Scale Selected")
    } else {
        input.addEventListener('input', inputToCelcius);
        input.addEventListener('input', inputToFahrenheit);
    }
}));







