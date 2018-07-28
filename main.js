//coffee-shop

var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  findDrink : function(drinkType) {
    if (this.drinkRequirements[drinkType]) {
      return this.drinkRequirements[drinkType];
    }
    alert("Sorry, we don't make " + drinkType);
    return null;
  },
  
  makeDrink: function(drinkType) {
    let drink = this.findDrink(drinkType);

    if (drink === null) {
      return;
    }

    if (this.beans >= drink) {
      this.beans -= drink;
      console.log(this.beans);
    } else {
      alert("Sorry, we're all out of beans!");
    }
  }
 
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");



 /*beansCountForDrinkType: function(drinkType) {
    if (this.beans >= this.findDrink(drinkType)) {
      console.log(this.beans -= this.findDrink(drinkType));
      return this.beans -= this.findDrink(drinkType);
    } 
    alert("Sorry, we're all out of beans!");
    return null;
    }
  },*/

  /*  makeDrink: function(drinkType) {
      for (let key in this.drinkRequirements) {
        if (drinkType === key) {
          if (this.beans >= this.drinkRequirements[drinkType]) {
            this.beans -= this.drinkRequirements[drinkType];
            console.log(this.beans);
            return; 
          } else {
            alert("Sorry, we're all out of beans!");
            return;
          } 
        } 
    }
    alert("Sorry, we don't make " + drinkType);
  }
 */ 