const converter = document.getElementById("style_converter");
const calculator = document.getElementById("style_calculator");
const main_container = document.getElementById("main_container_style");
const content = document.createElement("div");
const arrNumber = [];
main_container.append(content)
content.setAttribute("class", "container content");

function fetchApi(valuta){
    fetch(`https://v6.exchangerate-api.com/v6/c111de3d642ca52fe7dc4f9b/latest/${valuta}`)
        .then(res => res.json())
        .then(data =>{
            currencies(data.conversion_rates)
        })
}

function currencies(conversion_rates,value){
    const second_title = document.getElementById("second_title");
    const fieldNumber = document.getElementById("second_currency");
    const first_currency = document.getElementById("first_currency");
    let number = +first_currency.innerText;
    let valuta = second_title.innerText;
    valuta = valuta.substr(0, valuta.indexOf(' '))
    fieldNumber.innerText = conversion_rates[valuta] *number;
    console.log(fieldNumber)
}

function switchConverter(){
    content.innerHTML = "";
    converter.style.borderBottom = "1px solid";
    calculator.style.borderBottom ="none";
    content.innerHTML = renderConverter();
}
function changeTitle(value,value_id){
    const title = document.getElementById(value_id);
    title.innerHTML = value + "  &#9660" ;
    value = value.substr(0, value.indexOf(' '))
    if(value_id == "first_title"){
        fetchApi(value)
    }
}

function renderConverter(){
    return `
        <h1>Converter</h1>
        <div class="main_container">
            <div class="display_converter">
                <li class="nav_valuta">
                    <span id="first_title">USD Dollar  &#9660;</span>
                    <ul class="list_valuta">
                        <li onclick="changeTitle('AMD Armenia','first_title')"><img src="icons_flag/armenia.png">AMD Armenia</li>
                        <li onclick="changeTitle('RUB Russian','first_title')"><img src="icons_flag/russian.png">RUB Russian</li>
                        <li onclick="changeTitle('UAH Ukraine','first_title')"><img src="icons_flag/ukraine.png">UAH Ukraine</li>
                        <li onclick="changeTitle('USD USA','first_title')"><img src="icons_flag/usa.png" >USD USA</li>
                    </ul>
                </li>
                <div class="box_valuta">
                    <span class="valuta" id="first_currency">1</span>
<!--                    1$-->
                </div>
            </div>
            <img src="Picture/change.png" id="changeCurrency" onclick="changCurents()">
            <div class="display_converter" style="margin-top: 4px;">
                <li class="nav_valuta">
                    <span id="second_title">UAH Ukraine &#9660;</span>
                    <ul class="list_valuta">
                        <li onclick="changeTitle('AMD Armenia','second_title')"><img src="icons_flag/armenia.png">ARM Armenia</li>
                        <li onclick="changeTitle('RUB Russian','second_title')"><img src="icons_flag/russian.png">RUB Russian</li>
                        <li onclick="changeTitle('UAH Ukraine','second_title')"><img src="icons_flag/ukraine.png">UAH Ukraine</li>
                        <li onclick="changeTitle('USD USA','second_title')"><img src="icons_flag/usa.png" >USD USA</li>
                    </ul>
                </li>
                <div class="box_valuta">
                   <span class="valuta" id="second_currency">1</span>
                </div>
            </div>
            <div class="grid_container_numbers">
                  <button class="numbers" onclick="printNum(value)" value="1">1</button>
                  <button class="numbers" onclick="printNum(value)" value="2">2</button>
                  <button class="numbers" onclick="printNum(value)" value="3">3</button>
                  <button class="numbers" onclick="printNum(value)" value="4">4</button>
                  <button class="numbers" onclick="printNum(value)" value="5">5</button>
                  <button class="numbers" onclick="printNum(value)" value="6">6</button>
                  <button class="numbers" onclick="printNum(value)" value="7">7</button>
                  <button class="numbers" onclick="printNum(value)" value="8">8</button>
                  <button class="numbers" onclick="printNum(value)" value="9">9</button>
                  <button class="numbers" onclick="printNum(value)" value=".">.</button>
                  <button class="numbers" onclick="printNum(value)" value="0">0</button>
                  <button class="numbers" onclick="deleteLastNumber()"><img src="Picture/return_icon.png"></button>                   
            </div>
        </div>
   `
}
function changCurents(){
    const first_curency = document.getElementById("first_title");
    const second_curency = document.getElementById("second_title");
    let c = first_curency.innerText;
    first_curency.innerText = second_curency.innerText;
    second_curency.innerText = c;

}
function deleteLastNumber(){
    const number = document.getElementById("first_currency");
    number.innerText =   parseInt (number.innerText /10)
    if (number.innerText == 0 ){
        number.innerText = "";
    }
}
function printNum(value){
    const first_valuta = document.getElementById("first_currency");
    const first_title = document.getElementById("first_title");
    let shortCur = first_title.innerText;
    shortCur =  shortCur.substr(0, shortCur.indexOf(' '));
    first_valuta.innerText += value;

    // fetchApi()
}
function  renderCalculator(){
    return `
        <h1> Calculator</h1>
        <div id="display_calculator"></div>
        <div id="grid_container">${renderInput()}</div>
    `
}
function  renderInput(){
    return `
        <button class="button_style_operation" style="color: #1874f2" onclick="clearHost()">C</button>
        <button class="button_style_operation" onclick="changeSign()">+/-</button>
        <button class="button_style_operation" onclick="percentageNumber('%')">%</button>
        <button class="button_style_operation operator" onclick="operator('/')">/</button>
        <button class="button_style_number" onclick="printNumber(value)" value = 7 >7</button>
        <button class="button_style_number" onclick="printNumber(value)" value = 8 >8</button>
        <button class="button_style_number" onclick="printNumber(value)" value = 9 >9</button>
        <button class="button_style_operation operator" onclick="operator('X')">X</button>
        <button class="button_style_number" onclick="printNumber(value)" value = 4 >4</button>
        <button class="button_style_number" onclick="printNumber(value)" value = 5 >5</button>
        <button class="button_style_number" onclick="printNumber(value)" value = 6 >6</button>
        <button class="button_style_operation operator" onclick="operator('-')">-</button>
        <button class="button_style_number" onclick="printNumber(value)" value = 1 >1</button>
        <button class="button_style_number" onclick="printNumber(value)" value = 2 >2</button>
        <button class="button_style_number" onclick="printNumber(value)" value = 3 >3</button>
        <button class="button_style_operation operator" onclick="operator('+')">+</button>
        <button class="button_style_number "  onclick="printNumber(value)" value=".">.</button>
        <button class="button_style_number" onclick="printNumber(value)" value= 0 >0</button>
        <button class="button_style_number grid_item_last" onclick="result()">=</button>
    `
}
function  percentageNumber(){
    const displayCalculator = document.getElementById("display_calculator");
    displayCalculator.innerText = +displayCalculator.innerText /100;
}
function changeSign(){
        const displayCalculator = document.getElementById("display_calculator");
        displayCalculator.innerText = -1 * parseFloat(displayCalculator.innerText);
}
function  clearHost(){
    // const arrOperators = document.getElementsByClassName("operator");
    const displayCalculator = document.getElementById("display_calculator");
    displayCalculator.innerText = "";
    deleteAllElements(arrNumber)
    // console.log(arrOperators)
    // for (let i  = 0; arrOperators.length;i++) {
    //     arrOperators[i].style.filter = "brightness(100%)";
    // }
    // console.log(arrNumber)
}
function switchCalculator(){
    content.innerHTML = "";
    calculator.style.borderBottom = "1px solid";
    converter.style.borderBottom ="none";
    content.innerHTML = renderCalculator();
}

function printNumber(value){
    const displayCalculator = document.getElementById("display_calculator");
    if(displayCalculator.innerText !== "NaN"){
        displayCalculator.innerText += value;
    }
    else{
        deleteAllElements(arrNumber)
        arrNumber.push(+value)
        console.log(arrNumber)
        displayCalculator.innerText = value;
    }

}


function deleteAllElements(array){
    array.splice(0);
}

function operator(value){

        const displayCalculator = document.getElementById("display_calculator");
        const arrOperators = document.getElementsByClassName("operator");

        for (let i = 0; i< arrOperators.length;i++){
            if(arrOperators[i].style.filter !== "brightness(60%)"){
                if(arrOperators[i].innerText === value){
                    arrOperators[i].style.filter = "brightness(60%)";
                    arrNumber.push(+displayCalculator.innerText)
                    displayCalculator.innerText  = "";
                }
            }
            else {
                arrOperators[i].style.filter = "brightness(100%)";
                    arrNumber.push(+displayCalculator.innerText)
                    mathOperation(value);
            }
        }

}

function  result(){
    const arrOperators = document.getElementsByClassName("operator");
    const displayCalculator = document.getElementById("display_calculator");
    arrNumber.push(+displayCalculator.innerText);
    for (let i = 0; i< arrOperators.length;i++){
        if(arrOperators[i].style.filter === "brightness(60%)"){
            arrOperators[i].style.filter = "brightness(100%)";
            mathOperation(arrOperators[i].innerText)
        }
    }
}
function mathOperation(value){
    const displayCalculator = document.getElementById("display_calculator");
    let result = 0;
    switch (value){
        case "+":
            result = arrNumber.reduce((total,amount) => total+amount)
            break;
        case "-":
            result = arrNumber.reduce((total,amount) => total-amount)
            break;
        case "X":
            result = arrNumber.reduce((total,amount) => total*amount)
            break;
        case "/":
            result = arrNumber.reduce((total,amount) => total/amount)
            break;
    }
    deleteAllElements(arrNumber)
    displayCalculator.innerText = result;
    console.log(arrNumber)
}
function documentLoaded(){
    switchConverter();
    // fetchApi("AMD")
}
document.addEventListener('DOMContentLoaded', documentLoaded);

