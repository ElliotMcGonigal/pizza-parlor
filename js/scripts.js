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


///User Interface Logic


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
    function pInfo() {
      let statement = "You are getting a " + userPizza.size + " pizza with ";
      toppingsArray.forEach(function(current, posi) {
        if(posi !== toppingsArray.length -1) {
          statement = statement + current + ", ";
        } else {
          statement = statement + "and " + current + ".";
        }
      })
      return statement;
    }
    let pizzaInfo = pInfo();
    $("#priceDisplay").html(userPizza.price);
    $("#pizzaInfo").html(pizzaInfo);
    $("#menu").toggle();
    $("#pricing").toggle();
  });
  $("#return").click(function(event) {
    event.preventDefault();
    $("#pricing").toggle();
    $("#menu").toggle();
  });
});