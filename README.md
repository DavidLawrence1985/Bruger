# Burger APP


## Eat da Burger
    "Eat da Burger" is an app where visitors to the page can add a new burger to the list of burgers to eat.
    Once the burger is added to the page user can select "eat" with will then add the burger to the devoured section on the page.

## Technologies

    MYSQL - used as the development database for storing burgers to the page.
    Express - node package used for serving our routes 
    javaSCript - Is used for all page funtionality on the front end and the back end.
        JQuery - library used for javaScript
        orm.js - Used for MYSQL queries. 
        burger.js - Imports the orm and impliments the orm to the burgers table inside of MYSQL.
        burger_controllers.js - Handles the routes for our for GET(which also renders to our handlebars files), PUT, and POST to our databse. 
        burgerjs.js - Uses AJAX to post and put data to from user imput
    Handlebars - npm package used to handle the front end display from our database inforamation
    CSS - Is used for all front end styling.
    Heroku - Use for deployment with oceandb as a MYSQL replica database.

## How it works 
    The add burger button uses a POST to add the new burger to the datebase with a devoured boolean default value of false.
    The eat button for each burger uses a PUT to update the boolean to a value of true of the corresponding burger.

# Page screenshot

    ![Burger](/public/assets/img/burgerShot.png)

### creator 
    David Lawrence https://www.linkedin.com/in/david-lawrence-2705aa174/




        