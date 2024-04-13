let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let recipeHeadingEl = document.getElementById("recipeTitle");
recipeHeadingEl.textContent = recipeObj.title;

let imageContainerEl = document.getElementById("imageContainer1");
imageContainerEl.setAttribute("src", recipeObj.imgSrc);

let ingredientsContianerEl = document.getElementById("ingredientsList");
ingredientsContianerEl.style.color = "White"
ingredientsContianerEl.style.fontWeight = "400"
for (let recipeList of recipeObj.ingredients) {
    let ingredientsListEl = document.createElement("li");
    ingredientsListEl.textContent = recipeList;
    ingredientsListEl.classList.add("listItems");
    ingredientsContianerEl.appendChild(ingredientsListEl);
}
