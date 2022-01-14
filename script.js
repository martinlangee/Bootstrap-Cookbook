/// The total number of recipes over all sections is returned
function calcTotalRecipeCount() {
    return recipeData.sections.reduce((aggregated, current) => aggregated + current.recipes.length, 0);
}

/// The total number of recipes on the left upper corner of the page is updated
function updateRecipeCount() {
    const recipeCountElem = document.getElementById('recipe-count');
    recipeCountElem.innerHTML = `${calcTotalRecipeCount()} Recipes`;
}

/// The onclick events of the recipe selection menu items are bound to a function that updates the selected recipe.
/// The passed recipe-id is taken from the according <li> element.
function updateMenuEvents() {
    let recipeMenuElems = document.getElementsByClassName('recipe-link-item');
    console.log(recipeMenuElems);
    for (let idx = 0; idx < recipeMenuElems.length; idx++) {
        const elem = recipeMenuElems[idx];
        elem.onclick = (obj) => {
            updateSelectedRecipe(obj.currentTarget.id);
        };
    }
}

/// The Bootstrap menu to select the current recipe to be shown is created from the recipe-data structure
function updateRecipeSelectionMenu() {
    let html = '';
    const recipeMenuElem = document.getElementById('recipe-menu');
    recipeData.sections.forEach(sec => {
        // add sections and recipes as from data
        html += `<li class="dropdown-item">${sec.name}
                    <ul class="submenu dropdown-menu">\n`;
        if (sec.recipes.length > 0) {
            sec.recipes.forEach(rec => {
                html += `<li class="recipe-link-item dropdown-item" id="${rec.id}">${rec.title}</li>\n`;
            });
        }
        // add static "Add Recipe" item
        html += `       <li class="border-gray-top"></li>
                        <li class="dropdown-item txt-darkred" onclick="alert('Sorry, >>Add Recipe<< is not yet implemented.');">Add Recipe ...</li>
                    </ul>
                </li>\n`;
    });

    // add static "Add Section" item
    html += `<li class="border-gray-top"></li>
             <li class="dropdown-item txt-darkred" onclick="alert('Sorry, >>Add Section<< is not yet implemented.');">Add Section ...</li>`;

    recipeMenuElem.innerHTML = html;
}

/// The view of the recipe is updated depending on the recipeId that is passed.
/// If no recipeId is passed (= undefined) a view of all recipes is created.
function updateSelectedRecipe(recipeId) {
    let html = '';
    recipeData.sections.forEach(sec => {
        // add sections and recipes as from data
        sec.recipes.forEach(rec => {
            if (recipeId != undefined && recipeId != rec.id) return;

            // top section with title, image, comment etc.
            html += `<div class="recipe" id="_${rec.id}">
                     <div class="title">
                            <h2>${rec.title}</h2>
                            <div class="line-horizontal"></div>
                        </div>
                        <div class="description">
                            ${rec.short}
                        </div>

                        <div class="item image-container">
                            <div class="recipe-image" style="background-image:url(./images/${rec.imagePath})">
                                <div class="cover d-flex justify-content-center flex-column">
                                    <h5 class="font-serif text-uppercase">${rec.title}</h5>
                                    <p class="font-serif" style="font-style: italic;">${rec.short}</p>
                                </div>
                            </div>
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

            // add list of ingredients
            rec.ingredients.forEach(ing => {
                html += `<div class="row">
                                <div class="col-6 border-gray-top">
                                    <p>${ing.ingredient}</p>
                                </div> 
                                <div class="col-3 border-gray-top">
                                    <p>${ing.amount}</p>
                                </div>
                            </div>`;
            });
            html += `</div>
                        <h4>Steps</h4>
                        <div class="container">
                            <div class="row recipe-row">`;

            // add list of steps
            rec.steps.forEach(step => {
                html += `
                                <p>${step}</p>`
            });
            html += `</div>
                        </div>
                        <h4>User Comments</h4>
                        <div class="container">
                            <div class="row">`;

            // add list of comments
            if (rec.comments.length == 0) {
                html += `<div class="col-12 font-smaller">
                                    No user comments yet.
                                 </div>`;
            } else {
                rec.comments.forEach(com => {
                    html += `<div class="col-2 font-smaller border-gray-top">
                                    ${com.date}<br>${com.author}
                                </div>
                                <div class="col-10 font-smaller border-gray-top">
                                    ${com.text}
                                </div>`;
                });
            }
            html += `</div>
                        </div>
                        <div class="social-btn-container">
                            <img src="./images/add-comment.png" class="cursor-pointer" onclick="alert('Not yet implemented!')" alt="Leave a comment">
                            <img src="./images/social-email.png" class="cursor-pointer" alt="Send an e-mail">
                            <img src="./images/social-insta.png" class="cursor-pointer" alt="Instagram">
                            <img src="./images/social-facebook.png" class="cursor-pointer" alt="Facebook">
                            <img src="./images/social-twitter.png" class="cursor-pointer" alt="Twitter">
                            <img src="./images/social-linkedin.png" class="cursor-pointer" alt="LinkedIn">
                        </div>
                        </div>`;
        });
    });
    const recipeListElem = document.getElementById('recipe-list');
    recipeListElem.innerHTML = html;
}

// create the dynamic parts of HTML
updateRecipeCount();
updateRecipeSelectionMenu();
updateSelectedRecipe();
updateMenuEvents();