function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.priceOfPizza = function() {
  let pizzaPrice = 0;
  if(this.size === "small") {
    pizzaPrice += 8;
  } else if(this.size === "medium") {
    pizzaPrice += 10;
  } else if(this.size === "large") {
    pizzaPrice += 12;
  } else {
    console.log("You should not be seeing this. Please contact the system admins.");
  }
  this.toppings.forEach(function() {
    pizzaPrice++;
  });
  this.price = pizzaPrice;
}

$(document).ready(function() {
  $("#createPizza").submit(function(event) {
    event.preventDefault();
    const pizzaSize = $("#pizzaSize").val();
    const toppings = document.querySelectorAll("input[name='toppings']:checked");
    let toppingsArray = [];
    toppings.forEach(function(topping) {
      toppingsArray.push(topping.value);
    });
    const userPizza = new Pizza(pizzaSize, toppingsArray);
    userPizza.priceOfPizza();
    $("#priceDisplay").html(userPizza.price);
  });
});