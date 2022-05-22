## Specs
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