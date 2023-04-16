const btnCalculate = document.getElementById("btn");
const bmiResult = document.getElementById("bmiResult");
const weightCondition = document.getElementById("weightCondition");

function calculateBMI(){
    //height based on meter, so dividing value by 100
    const height = document.getElementById("height").value / 100; 
    const weight = document.getElementById("weight").value;
    const bmiValue = weight / (height * height);
    
    // using .value as input type is text
    bmiResult.value = bmiValue;

    //Add if conditions to calculate the weight range
    if(bmiValue < 18.5){
        weightCondition.value = "Underweight"
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        weightCondition.value = "Normal"
    }else if(bmiValue >= 25 && bmiValue <= 29.9){
        weightCondition.value = "Overweight"
    }else if(bmiValue >= 30){
        weightCondition.value = "Obse"
    }
}

btnCalculate.addEventListener("click", calculateBMI);