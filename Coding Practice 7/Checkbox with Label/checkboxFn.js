let checkboxContainerEl = document.getElementById("checkboxWithLabelContainer");

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkbox";
checkboxContainerEl.appendChild(inputElement);

let labelCheckboxEl = document.createElement("label");
labelCheckboxEl.textContent = "Click Me!";
labelCheckboxEl.setAttribute("for", "checkbox");
labelCheckboxEl.classList.add("ml-2");
labelCheckboxEl.id = "checkboxLabel";
checkboxContainerEl.appendChild(labelCheckboxEl);