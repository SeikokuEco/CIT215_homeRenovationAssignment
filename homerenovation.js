function addPaintAndSupplies(totalCost, callback) {

    let cost = prompt("Enter the cost for the paint and supplies :");

    cost = parseFloat(cost);

    if (cost > 100)

        cost *= 1.1;



    // Get a handle for the paint paragraph

    let paintArea = document.querySelector(".paint");

    paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);

    return (totalCost + cost);

}


// added
const addFloorCoverings = function (totalCost, callback) {

    let cost = 9999;

    // wish i could do a do/while 
    while(cost > 2000) {

        cost = prompt("Enter the cost for floor coverings ($2000 Max) :");

        cost = parseFloat(cost);

        if (cost < 500)
            
            cost = cost - (cost*0.15);

        else if (cost > 2000)  {

            alert("Floor Covering Cost is too High");

        }


    }
    



    // Get a handle for the paint paragraph

    let floorCoveringstArea = document.querySelector(".floorCoverings");

    floorCoveringstArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);

    return (totalCost + cost);

}


// added
const addFurniture = (totalCost , callback) => {

    let cost = 9999;

    // wish i could do a do/while 
    while(cost > 2000) {

        cost = prompt("Enter the cost for furniture ($2000 Max) :");

        cost = parseFloat(cost);

        if (cost < 500)

            cost = cost - (cost*0.10);

        else if (cost > 2000)  {

            alert("Furniture Cost is too High");

        }

    }

    // Get a handle for the paint paragraph

    let furnitureArea = document.querySelector(".furniture");

    furnitureArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);

    return (totalCost + cost);

}

const updateTotals = (cost) => {

    // Get a handle for the furniture paragraph

    let totalsArea = document.querySelector(".totalCost");

    totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;

}




let totalCost = 0;



totalCost = addPaintAndSupplies(totalCost, updateTotals);

// ....

totalCost = addFloorCoverings(totalCost, updateTotals);
totalCost = addFurniture(totalCost, updateTotals);