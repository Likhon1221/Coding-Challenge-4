// Task 1. Create an Inventory Array of Product Objects

let inventory = [
   {name: "Mouse", price: 50, quantity: 60, lowStockLevel: 10},
   {name: "Keyboard", price: 100, quantity: 80, lowStockLevel: 12},
   {name: "Monitor", price: 150, quantity: 70, lowStockLevel: 8},
   {name: "Ram", price: 60, quantity: 140, lowStockLevel: 20},
   {name: "Headset", price: 200, quantity: 120, lowStockLevel: 18},
]; // You need click the array to see the data

console.log(inventory)

// Task 2. Create a Function to Display Product Details

function displayProductDetails(product) {
    
    for( let i = 0; i < product.length; i++) {
        if(product.quantity >= product.lowStockLevel) 
            {return "in stock";
        }
    else if(product.quantity <= product.lowStockLevel)
       {return "low stock"};
    }
};
console.log(displayProductDetails(inventory))