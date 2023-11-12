/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Rafael Jimenez";

const currentYear = new Date().getFullYear();

const profilePicture = "images/IMG_0690.jpg";













/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.getElementById("year");

const imageElement = document.querySelector("img");







/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);



const altText = `Profile image of ${fullName}`;

// Set the alt attribute of the image element
imageElement.setAttribute('alt', altText);










/* Step 5 - Array */

const favoriteFoods = ["Pizza", "Burger", "Sushi", "Tacos"];
foodElement.innerHTML = favoriteFoods.join('<br>');
const newFavoriteFood = "Peruvian Chicken"; 
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
favoriteFoods.pop();




