const form = document.querySelector("form");
const result = document.querySelector("#results");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const height = document.querySelector("#height").value;

if(height < 0 || isNaN(height) || height == '')
    alert("Enter Correct Value For Height")

    const weight = document.querySelector("#weight").value;

    if(weight < 0 || isNaN(weight) || weight == '')
        alert("Enter Correct Value For Weight")

   const resultValue = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `The value is ${resultValue}`;
})