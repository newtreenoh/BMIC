const btnCalculate = document.getElementById("btn");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const bmiResult = document.getElementById("bmiResult");

function calculateBMI(){
    try {
        // const bmiValue = weight/height;
        // bmiResult.innerText = bmiValue;
        // bmiResult.innerText = "Clicked biatch!";
        console.log("Clicked!");
    } catch (error) {
        console.log("Error!");
        // bmiResult.innerText = "Error encountered. Please try again.";
    }
}

btnCalculate.addEventListener("click", calculateBMI);