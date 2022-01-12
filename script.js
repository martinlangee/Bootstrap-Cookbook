function calcTotalRecipeCount() {
    return recipeData.sections.reduce((aggregated, current) => aggregated + current.recipes.length, 0);
}

function updateRecipeCount() {
    const recipeCountHtml = document.getElementById('recipe-count');
    recipeCountHtml.innerHTML = `${calcTotalRecipeCount()} Recipes`;
}

function updateRecipeData() {
    window.alert(recipeData.sections[0].name)
}

//updateRecipeData();
updateRecipeCount();