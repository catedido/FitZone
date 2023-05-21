

function calculatebmi(kg, cm) {
    let result = (kg / cm**2) * 10000
    alert(`Your BMI is ${result}`)
}

console.log(calculatebmi)


const bmiButton = document.getElementById("bmi-button");
bmiButton.addEventListener("click", function() {
    let kg = prompt("What is your weight in Kilos?");
    let cm = prompt("What is your height in centimeters?");
    calculatebmi(kg,cm)
})
