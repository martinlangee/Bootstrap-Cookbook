# Cookbook
WBS Training Project

## Explanation
The design is implemented using manly grid styles from the Bootstrap library.

The site shows recipes that you select from the menu on the upper left side. The menu is adapted from a component taken from here: https://bootstrap-menu.com/detail-multilevel.html. The menu content is created dynamically by reading and interpreting the recipe data stored in the file 'recipe-data.js'.

Currently on first load, all recipes are shown top-down on the content area of the page. If you select one recipe via menu the selected one is shown exclusively.

All dynamic creation of HTML code is implemented in the 'script.js' file. See function comments for details.