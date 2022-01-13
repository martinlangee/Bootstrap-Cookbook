# Cookbook
WBS Training Project

## Explanation
The design is implemented using manly grid styles from the Bootstrap library.
The site shows recipes that you select from the menu on the upper left side. The menu is adapted from a component taken from here: https://bootstrap-menu.com/detail-multilevel.html. The content of menu is created dynamically by reading an interpreting the recipe data stored in the file 'recipe-data.js'.
Currently on first load all recipes are shown on the content area of the page. If you select one recipe via menu the selected on is shown exclusively.
The dynamic creation of all the HTML code is implemented in the 'script.js' file. See function comments for details.