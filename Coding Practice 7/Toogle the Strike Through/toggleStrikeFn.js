let checkBoxWithLabelContainerEl = document.getElementById("checkBoxWithLabelContainer");

let inputEl = document.createElement("input");
inputEl.type = "checkbox";
inputEl.id = "checkbox";
inputEl.classList.add("mr-3");
checkBoxWithLabelContainerEl.appendChild(inputEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", "checkbox");
labelEl.id = "checkboxLabel";
labelEl.textContent = " I am a label";
checkBoxWithLabelContainerEl.appendChild(labelEl);

function checkboxStatusChange(){
    labelEl.classList.toggle("strike-through");
}

inputEl.onclick = function () {
    checkboxStatusChange();
}
