# Pizza Parlor
#### Project by Elliot McGonigal
## Description
This is a webpage that will let you order a pizza(not actually, this is a project).
## Technologies Used
* html
* css
* javascript
* bootstrap
* jquery
* TDD
## Setup
1. Set up a code environment. I use VSCode with Git Bash.
2. Clone this repository using 'git clone https://github.com/ElliotMcGonigal/pizza-parlor'
3. Navigate to the directory and open it in your coding environment. 
4. Launch the webpage, I use the VSCode addon Live Server to do this. 
5. Fill out the form and order your pizza. Have fun!
## Known Bugs
No known bugs
## License
GNU gpl 3.0 view LICENSE for more details
### Specs
Describe: Pizza()

Test: "It should return a Pizza object with a size"
Code: const newPizza = new Pizza("large");
Expected Output: Pizza {size: "large"}

Test: "It should return a Pizza object with a size and an array of toppings"
Code: const newPizza = new Pizza("large", ["cheese", "pepperoni"]);
Expected Output: Pizza {size: "large", toppings: ["cheese", "pepperoni"]}

Describe: Pizza.prototype.priceOfPizza()

Test: "It should take in a Pizza object and return a price based on it's size and toppings"
Code: const newPizza = new Pizza("large", ["cheese", "pepperoni"]);
newPizza.priceOfPizza();
Expected Output: newPizza.price === 14