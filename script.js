// Define an array of menu items
const menuItems = [
    { name: "Bun Kebab", price: "200 PKR" },
    { name: "One Bite Samosa Plate  (12 piece)", price: "200 PKR" },   
    { name: "Shami Kebab", price: "80 PKR" },
    { name: "Shami Kebab Roll", price: "150 PKR" },
    { name: "Chicken Biryani", price: "200 PKR" },
    { name: "Chicken Roll", price: "150 PKR" },
    { name: "Fries", price: "150 PKR" },
    { name: "Club Sandwich", price: "350 PKR" },
    { name: "Mexican Sandwich", price: "350 PKR" },
    { name: "Pizza Pie", price: "350 PKR" },
    { name: "Zinger ", price: "350 PKR" },
    { name: "Hot Shots", price: "350 PKR" },
    { name: "Pasta White Sauce", price: "350 PKR" },
    { name: "Pasta Red Sauce", price: "350 PKR" },
    { name: "Chowmein", price: "350 PKR" },
    { name: "Chicken Shashlik With Fried Rice", price: "350 PKR" },
    { name: "Chicken Boti", price: "400 PKR" },
    { name: "Omellete", price: "60 PKR" },
    { name: "Cheese Omellete", price: "120 PKR" },
    { name: "Cheese Omellete", price: "120 PKR" },
    { name: "Omellete Sandwich ", price: "120 PKR" },
    // Add more menu items as needed
];

// Get the menu container

const menuContainer = document.getElementById("menu");

// loop

for (let i = 0; i < menuItems.length; i++){
// <div class="menu-item"> </div>    
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item")

// <span class="food name">name of food</span> 
    const foodName = document.createElement("span");
    foodName.classList.add("food-name");
    foodName.textContent = menuItems[i].name;

// <span class="food-price">price of food</span>
    const foodPrice = document.createElement('span');
    foodPrice.classList.add("food-price");
    foodPrice.textContent = menuItems[i].price;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodPrice);
    menuContainer.appendChild(menuItem);
    



}