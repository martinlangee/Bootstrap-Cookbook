function calcTotalRecipeCount() {
    return recipeData.sections.reduce((aggregated, current) => aggregated + current.recipes.length, 0);
}

function updateRecipeCount() {
    const recipeCountElem = document.getElementById('recipe-count');
    recipeCountElem.innerHTML = `${calcTotalRecipeCount()} Recipes`;
}

function updateRecipeSelectionMenu() {
    let html = '';
    const recipeMenuElem = document.getElementById('recipe-menu');
    recipeData.sections.forEach(sec => {
        // add sections and recipes as from data
        html += `<li><a class="dropdown-item">${sec.name}</a></li>\n`;
    });
    // add static HTML for "Add Section" item
    html +=
        '<li class="border-gray-top"></li>\n' +
        '<li><a class="dropdown-item txt-darkred" href="#">Add Section</a></li>\n' +
        '<li class="border-gray-top"></li>';

    recipeMenuElem.innerHTML = html;
}

function updateSelectedRecipe() {
    let html = '';
    recipeData.sections.forEach(sec => {
        // add sections and recipes as from data
        sec.recipes.forEach(rec => {
            html += `
                    <div class="recipe" id="${rec.id}">
                        <div class="title">
                            <h2>${rec.title}</h2>
                            <div class="line-horizontal"></div>
                        </div>
                        <div class="description">
                            ${rec.short}
                        </div>
                        <div class="image-container">
                            <img class="recipe-image" src="./images/${rec.imagePath}">
                            <div class="hide image-hint">${rec.title}</div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-6">
                                    <p class="author-link"><a href="#">${rec.author}</a></p>
                                    <p>${rec.comment}</p>
                                </div>
                                <div class="col-3">
                                    <p class="total-time-header txt-gray">Total</p>
                                    <p class="txt-gray">${rec.time}</p>
                                </div>
                            </div>
                        </div>
                        <h4>Ingredients</h4>
                        <div class="container">`;
            rec.ingredients.forEach(ing => {
                html += `
                            <div class="row">
                                <div class="col-6 border-gray-top">
                                    <p>${ing.ingredient}</p>
                                </div> 
                                <div class="col-3 border-gray-top">
                                    <p>${ing.amount}</p>
                                </div>
                            </div>`;
            });
            html += `
                        </div>
                        <h4>Steps</h4>
                        <div class="container">
                            <div class="row recipe-row">`;
            rec.steps.forEach(step => {
                html += `
                                <p>${step}</p>`
            });
            html += `
                            </div>
                        </div>
                    </div>`;
        });
    });
    const recipeListElem = document.getElementById('recipe-list');
    recipeListElem.innerHTML = html;
}

updateRecipeCount();
updateRecipeSelectionMenu();
updateSelectedRecipe();