let itemList = [{
    itemName: "Veg Biryani",
    uniqueNo: 1,
},
{
    itemName: "Chicken 65",
    uniqueNo: 2,
},
{
    itemName: "Paratha",
    uniqueNo: 3,
}
];

let orderedItemsContainerEl = document.getElementById("orderedItemsContainer");
let orderedListContainerEl = document.getElementById("orderedListContainer");

// removing items function 
function onDelete(itemId) {
let itemEl = document.getElementById(itemId);
orderedItemsContainerEl.removeChild(itemEl);
}
// Cancel Function of ordered items
function createAndAppend(items) {
let itemId = "item" + items.uniqueNo;
let buttonId = "button" + items.uniqueNo;

// creating list items Element 
let itemsListEl = document.createElement("li");
itemsListEl.id = itemId;
itemsListEl.textContent = items.itemName;
itemsListEl.classList.add("list-customize", "mr-3");
orderedItemsContainerEl.appendChild(itemsListEl);


//creating button Element
let itemsbuttonEl = document.createElement("button");
itemsbuttonEl.id = buttonId;
itemsbuttonEl.textContent = "Cancel";
itemsbuttonEl.classList.add("btn", "btn-danger", "m-2");
itemsbuttonEl.onclick = function() {
    onDelete(itemId);
};
itemsListEl.appendChild(itemsbuttonEl);

}
for (let items of itemList) {
createAndAppend(items);
}