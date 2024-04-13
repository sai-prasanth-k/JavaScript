let skillList = [{
    skillName: "HTML",
    uniqueNo: 1,
},
{
    skillName: "CSS",
    uniqueNo: 2,
},
{
    skillName: "JavaScript",
    uniqueNo: 3,
}
];

let skillsContainerEl = document.getElementById("skillsContainer");


function onMarkSkill (labelId) {
let labelEl = document.getElementById(labelId);
labelEl.classList.toggle("selected");
}

function createAndAppendSkill(skill) {
let checkboxId = "checkbox" + skill.uniqueNo;
let labelId = "label" + skill.uniqueNo;

let skillItems = document.createElement("li");
skillItems.classList.add("p-1");
skillsContainerEl.appendChild(skillItems);

let checkboxEl = document.createElement("input");
checkboxEl.type = "checkbox";
checkboxEl.id = checkboxId;

checkboxEl.onclick = function() {
    onMarkSkill(labelId);
};
skillItems.appendChild(checkboxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", checkboxId);
labelEl.classList.add("checkbox-label");
labelEl.id = labelId;
labelEl.textContent = skill.skillName;
skillItems.appendChild(labelEl);
}
for (let skill of skillList) {
createAndAppendSkill(skill);
}