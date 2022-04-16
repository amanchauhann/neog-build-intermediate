const fizzBuzz = document.getElementById("fizzBuzz");

fizzBuzz.addEventListener("click", ()=>{
    for(let i=1; i<101; i++){
        if(i % 3 === 0 && i % 5 ===0){
            console.log("fizbuzz")
        }else if(i % 3 === 0){
            console.log("fizz");
        }else if(i % 5 === 0){
            console.log("buzz");
        }else{
            console.log(i);
        }
    }
});

// -------------------------------------------

const star = document.getElementById("star");

star.addEventListener("click", ()=>{
    for(let i=1; i<=5; i++){
        console.log(("*").repeat(i));
    }
})

// -------------------------------------------

const tableInput = document.getElementById("tableInput");
const tableButton = document.getElementById("tableButton");
const tableResult = document.getElementById("tableResult");


tableButton.addEventListener("click", ()=>{
    const arr = []    
    const table = tableInput.value;
        for(let i=1; i<=12; i++){
            arr.push(table*i)
            tableResult.textContent = arr;
        }
    })

// -----------------------

const fibbSubmit = document.getElementById("fibbSubmit");
const fibb = document.getElementById("fibb");
const times = document.getElementById("times");

fibbSubmit.addEventListener("click", ()=>{
    let fibArr = [0, 1];
    const fibbTimes =  parseInt(times.value)
    for(let i=0; i<=fibbTimes; i++){
        const last = fibArr[fibArr.length-1];
        const sLast = fibArr[fibArr.length-2];
        fibArr.push(last + sLast);
        fibb.innerText =  fibArr;
    }
})

// ------------------------------------

const factorial = document.getElementById("factorial");
const factorialSubmit = document.getElementById("factorialSubmit");
const factorialResult = document.getElementById("factorialResult");

factorialSubmit.addEventListener("click", ()=>{
    let fValue = factorial.value;
    if(fValue == 0){
        factorialResult.textContent = 1;
    }else{
        for(let i=fValue-1; i>0; i--){
        console.log(i);
        fValue*=i;
        }
    factorialResult.textContent = fValue;
    }
})
// ------------------------------

const prime = document.getElementById("prime");
const primeSubmit = document.getElementById("primeSubmit");
const primeResult = document.getElementById("primeResult");

primeSubmit.addEventListener("click", ()=>{
    const primeValue = prime.value;
    primeValue % primeValue == 0 && primeValue % 1 == 0 ? console.log("sgmnsg") : console.log("sinfsf")
})
// -------------------------------------------


const week = document.getElementById("week");
const weekSubmit = document.getElementById("weekSubmit");
const weekResult = document.getElementById("weekResult");

weekSubmit.addEventListener("click", ()=>{
    const weekValue = week.value.toLowerCase();
    weekValue === "monday" || weekValue === "monday" || weekValue === "monday" || weekValue === "monday" || weekValue === "monday" 
    ? weekResult.textContent = "weekday" 
    : weekValue === "saturday" || weekValue === "sunday" 
    ? weekResult.textContent = "weekend" 
    : weekResult.textContent = "enter valid input";
})