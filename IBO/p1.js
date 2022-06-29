const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 50,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 50,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

function getUniqueProductCount(data) {
  let final_output = {};
  for (var i = 0; i < data.length; i++) {
    // console.log(data[i].productName);
    var out = data[i].productName;

    if (final_output[out] === undefined) {
      final_output[out] = 1;
    } else {
      final_output[out] = final_output[out] + 1;
    }
  }
  return final_output;
}
const ProductCount_answer = getUniqueProductCount(listOfProducts);
console.log(ProductCount_answer);

function getUniquePrducts(data) {
  let final_output = [];
  var obj = {};
  for (var i = 0; i < data.length; i++) {
    var out = data[i];

    if (obj[out.productName] == undefined) {
      obj[out.productName] = out;
    } else {
      obj[out.productName].quantity =
        obj[out.productName].quantity + out.quantity;
    }
  }

  for (let key in obj) {
    final_output.push(obj[key]);
  }
  return final_output;
}

const UniquePrducts_answer = getUniquePrducts(listOfProducts);
console.log(UniquePrducts_answer);

// you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.
