# Cookbook
WBS Training Project

## Explanation
The design is implemented using manly grid styles from the Bootstrap library.

The site shows a recipe that you select from the menu on the upper left side. The menu is adapted from a component taken from here: https://bootstrap-menu.com/detail-multilevel.html. The menu content is created dynamically by reading and interpreting the recipe data stored in the file 'recipe-data.js'.

Currently on first load, all recipes are displayed top-down on the content area of the page. If you select one recipe via menu the selected one is shown exclusively.

The pages is responsive: the menu automatically jumps to the top of the recipes when the window size is decreased. There is an issue with the menu in case of small screens: see <em>Knwon Issues</em>.

All dynamic creation of HTML code is implemented in the 'script.js' file. See function comments there for details.

The anchor elements where the dynamic HTML is inserted are:
'&lt;ul id="recipe-menu" ... >' for the recipe menu and
'&lt;div id="recipe-list"> for the recipe description.
The elements are identified by the ids respectively.

## Open Issues
<ol>
    <li>Introduce "Share" button(s)</li>
    <li>Nice to have: comment funtionality</li>
</ol>

## Known Bugs
<ol>
    <li>The display of all recipes on start up is not a feature but a bug. A solution has to be found for what is expected after first loading.</li>
    <li>The selection menu is not closing after click on it.</li>
    <li>The second level of the selection menu is not displayed in case the browser window is less then around 950 px wide. This is an issue of the multilevel menu component which automatically switches to the "smart phone mode". Further investigation necessary.</></li>
</ol>