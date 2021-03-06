<p align="center">
  <img src="src/images/bitter-homepage.png" width="50%" title="Home page">
</p>

# Bitter - A tool for brewing calculations and recipe management

My portfolio project for the Codaisseur academy. This project was done in two weeks from planning to having a working version. This was my first attempt at coding a web app using TypeScript.

# The concept

The app can be devided into three parts:

1. A recipe management tool that allows users to import and store recipes
1. A recipe calculator that allows users to calculate the correct amount of ingredients based on specifications
1. A tool that allows to follow a brew and sets timers and reminders for the different steps of the brewing process

## Recipe management

<p align="center">
  <img src="src/images/recipe-management.gif"  title="recipe management example">
</p>
The app allows a user to :

- See the recipes in his library
- Add a new recipe to his library
- Remove a recipe from his library
- Toggle between the card view mode and the full recipe page. In the full recipe page, the user can enter the amount of beer he wants to brew and the app will adapt the recipe consequently

## Recipe calculator

<p align="center">
  <img src="src/images/recipe-calculator.gif"  title="recipe calculator example">
</p>
The recipe calculator allows a user to enter the beer specifications, the ingredients she wishes to use and in what ratios. Once the information is entered, the correct quantities for each ingredients and for a desired volume will be displayed in the full recipe page.

### Introducing the Beeratron 5000

A completely random beer recipe generator. The Beeratron5000 generates a random name as well as a random recipe. A user can then import it into his libary.

<b> Disclaimer:</b> Although very useful to seed a database, I do not stand by the quality of the beers generated by the beeratron. Brew at your own risk.

## Brewing day tool

The app allows a user to check he has all the ingredients to start the brew. I will also display timers for the relevant step and inform the user when it is time to add a new ingredients or move on to a new step.

# Languages and tools

This app is built using the following languages and tools:

<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code>
<code><img height="20" src="https://icon2.cleanpng.com/20180804/aaz/kisspng-postgresql-object-relational-database-oracle-datab-portfolio-whitebolt-whitebolt-5b65f8213f29d6.5042016815334093132587.jpg"></code>
<code><img height="20" src="https://camo.githubusercontent.com/58e35d08b53ec029f0e3e587a28a6f65777d352f797add843d153a0db60b9d7d/68747470733a2f2f692e696d6775722e636f6d2f79764559686e5a2e706e67"></code>

# The back end

## DB model

A database model was dran on Lucid chart before starting coding. Here is the database schema:

<p align="center">
  <img src="src/images/DB-model.png"  title="recipe calculator example">
</p>

## Source code

<a href='https://github.com/thibaudszy/brewing-app-backend'> Click here to see the back end repo.
