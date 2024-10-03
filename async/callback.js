function orderFood(foodIsReady) {
  console.log("Order has been placed");

  setTimeout(() => {
    console.log("Food is ready");
    //chef
    foodIsReady()
  }, 10000);
}
const eatingFunction = ()=>{
    console.log("I am eating now")
}

// customer
orderFood(eatingFunction);
