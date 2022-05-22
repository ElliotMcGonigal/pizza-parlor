## Specs
Describe: Pizza()

Test: "It should return a Pizza object with a size"
Code: const newPizza = new Pizza("large");
Expected Output: Pizza {size: "large"}

Test: "It should return a Pizza object with a size and an array of toppings"
Code: const newPizza = new Pizza("large", ["cheese", "pepperoni"]);
Expected Output: Pizza {size: "large", toppings: ["cheese", "pepperoni"]}