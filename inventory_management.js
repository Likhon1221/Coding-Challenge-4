// Task 1. Create an Inventory Array of Product Objects

let inventory = [
   {name: "Mouse", price: 50, quantity: 60, lowStockLevel: 10},
   {name: "Keyboard", price: 100, quantity: 80, lowStockLevel: 12},
   {name: "Monitor", price: 150, quantity: 70, lowStockLevel: 8},
   {name: "Ram", price: 60, quantity: 140, lowStockLevel: 20},
   {name: "Headset", price: 200, quantity: 120, lowStockLevel: 18},
]; // You need click the array to see the data

console.log(inventory);

// Task 2. Create a Function to Display Product Details

function displayProductDetails(product) {
        
        if(product.quantity > product.lowStockLevel) 
            {console.log(product.name + " price: " + product.price + " quantity: " + product.quantity + " in stock");
        }
    else if(product.quantity <= product.lowStockLevel)
       {console.log(product.name + " price: " + product.price + " quantity: " + product.quantity + " low stock")};
    
}
displayProductDetails(inventory[0]);

// Task 3. Create a Function to Update Product Stock After Sales

function updateStock(product, unitSold) {
    product.quantity -= unitSold;
    if(product.quantity <= 0)
        console.log("out of stock");
    else if(product.quantity <= product.lowStockLevel)
        console.log("low stock");
}
updateStock(inventory[0], 60);

// Task 4. Create a Function to Check Low Stock Products

function checkLowStock(inventory) {
    for (let i = 0; i < inventory.length; i++) {
        const product = inventory[i];
        if(product.quantity < product.lowStockLevel)
            console.log(product.name);
    
        
    }
}
checkLowStock(inventory);

// Task 5. Create a Function to Calculate Total Inventory Value

function calculateInventoryValue(inventory) {
    let sum = 0;
    for (let i = 0; i < inventory.length; i++) {
        const product = inventory[i];
        sum += product.price * product.quantity;
    }
    console.log(sum);
}
calculateInventoryValue(inventory)