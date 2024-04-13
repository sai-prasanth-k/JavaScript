let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];
let groceryListContainer = document.getElementById("groceryListContainer");

groceryListContainer.classList.add("grocery-list-container");
// Heading
let groceryListHeading = document.createElement('h1');
groceryListHeading.classList.add("grocery-list-heading");
groceryListHeading.textContent = "Grocery List";
groceryListContainer.appendChild(groceryListHeading);

let groceryDetailContainer = document.createElement("ul");
groceryDetailContainer.classList.add("list-items-container");
groceryListContainer.appendChild(groceryDetailContainer);

for (let eachElement of groceryList) {
    let listItem = document.createElement("li");
    listItem.textContent = eachElement;
    groceryDetailContainer.appendChild(listItem);
}