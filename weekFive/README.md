# Week 5 / Module 5 Challenge

## Description 

### [Website](https://roodhouse.github.io/weekFive/)

Created a calendar app. The calendar uses moment.js to update the date every day at the top of the app. Users are able to click within a text block and edit content at will. The save button will trigger a confirmation message at the top of the table and save the contents of the textarea into localstorage. When a user returns to the page then the textarea is populated with the values that are saved in localstorage. The colors of the timeblocks change based on if the time is in the past, present or future.

### Bugs

1. At smaller widths the time column and the save button column do not respect their containers. As the screen gets smaller the contents of the columns begin to bleed into the middle column. I expected the contents to remain in the middle of their columns as the screen changes. 

2. If the textarea is empty and the save button is clicked then a message displays that says "please enter something before you save". This is what I wanted. However, if a user erases the contents in the textarea, leaves it intentionally blank and presses the save button then the same message displays. This is not the behavior I was intending. I would rather no message display or "slot cleared" display but I am unsure of how to accomplish this.

### Screenshots

###### Website
![SS of the site](https://roodhouse.github.io/weekFive/assets/images/ss01.png)

![SS of the site](https://roodhouse.github.io/weekFive/assets/images/ss02.png)

