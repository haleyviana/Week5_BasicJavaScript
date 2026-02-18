


function tickUp(){
    let countUp=document.getElementById("counter");
    let currentValue= counter.innerText;
    currentValue= Number(currentValue)+1;
    counter.innerText=currentValue;
}

function tickDown(){
    let countDown=document.getElementById("counter");
    let currentValue= counter.innerText;
    currentValue= Number(currentValue)-1;
    counter.innerText=currentValue;
}

function runForLoop(){
    let counter=document.getElementById("counter");
    let currentValue= Number(counter.innerText);
    let result=document.getElementById("forLoopResult");
    let printValue="";
    for(let i=0; i<=currentValue; i++){
        printValue= printValue + i + " ";
    }
    result.innerText=printValue;
}

function showOddNumbers(){
    let result=document.getElementById("oddNumberResult");
    let count=document.getElementById("counter");
    let currentValue= Number(count.innerText);
    let printValue="";
    for(let i=1; i<=currentValue; i++){
        if(i%2!==0){
            printValue= printValue + i + " ";
        }
    }
    result.innerText=printValue;
}

function addMultiplesToArray(){
    let count=document.getElementById("counter");
    let currentValue= Number(count.innerText);
    let multiplesArray=[];

    //print nothinf is less than 5 
    if(currentValue<5){
        console.log(multiplesArray);
        return;
    }

    //goes backwards from current value to 0 and adds multiples of 5 to array
    for (let i=currentValue; i>=5; i--){
        if(i%5==0){
            multiplesArray.push(i);
        }
    }

    //prints array
    console.log(multiplesArray);
}

function printCarObject(){
    let carType=document.getElementById("carType").value;
    let carMPG=document.getElementById("carMPG").value;
    let carColor=document.getElementById("carColor").value;

    let carObject={
        type: carType,
        mpg: carMPG,
        color: carColor
    };

    console.log(carObject);
}



function loadCar(number){
    let carObject;
    if(number==1){
        carObject=carObject1;
    } else if(number==2){
        carObject=carObject2;
    } else{
        carObject=carObject3;
    }
    
    document.getElementById("carType").value = carObject.cType;
    document.getElementById("carMPG").value = carObject.cMPG;
    document.getElementById("carColor").value = carObject.cColor;
}

function changeColor(number){
    let colorParagraph=document.getElementById("styleParagraph");
    if(number==1){
        colorParagraph.style.color="red";
    } else if(number==2){
        colorParagraph.style.color="green";
    } else{
        colorParagraph.style.color="blue";
    }
}
