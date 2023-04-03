let colors;
colors = ['red', 'green', 'pink', 'purple', 'blue'];

function createElementDiv() {
    for(let i = 0;i<5;i++){
        let element = document.createElement("div");
        element.className = "element";
        document.getElementById("container").appendChild(element).innerHTML='Element '+`<span style='color: ${colors[i]}'>${i+1}</span>`;
    }
}
createElementDiv()
