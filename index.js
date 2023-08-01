const converter = document.getElementById("style_converter");
const calculator = document.getElementById("style_calculator");
const main_container = document.getElementById("main_container_style");
const content = document.createElement("div");
main_container.append(content)
content.setAttribute("class", "container content");

// function fetchApi(){
//     fetch("https://v6.exchangerate-api.com/v6/c111de3d642ca52fe7dc4f9b/latest/RUB")
//         .then(res => res.json())
//         .then(data =>{
//             converter(data.conversion_rates)
//         })
// }
// fetchApi()
//
//
// function converter(conversion_rates){
//     console.log(conversion_rates)
// }

function switchConverter(){
    content.innerHTML = "";
    converter.style.borderBottom = "1px solid";
    calculator.style.borderBottom ="none";

    // content.innerHTML = render();
}

function  renderCalculator(){
    return `
        <h1 style="headerH"> Calculator</h1>
        <div id="display_calculator"></div>
    `

}

function switchCalculator(){
    content.innerHTML = "";
    calculator.style.borderBottom = "1px solid";
    converter.style.borderBottom ="none";
    content.innerHTML = renderCalculator();
}

