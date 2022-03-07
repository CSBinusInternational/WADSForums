import fetch from "node-fetch";

//Promises

// The promise function takes 2 arguments and either rejects or accepts it
const event = new Promise((accept, reject) => {
    var vehicle = "Bike";
    // Check if the vehicle is a car or not, accepts if it is and rejects if it isn't
    if(vehicle == "Car") {
        accept(vehicle);
    }
    else {
        reject(vehicle + "Is not a car.");
    }
})

event   
    .then((vehicle) => {
        console.log(vehicle);
    })
    .catch((err) => {
        console.log(err);
    })


// Map, Filter & Reduce

const vehicles = [
    {id: 1, type: "Car", wheels: 4},
    {id: 2, type: "Bike", wheels: 2},
    {id: 3, type: "Boat", wheels: 0},
];

const mapVehicles = (id, newType) => {
    // Map loops through every index of an element and changes the values when it matches, or returns the elements if it doesn't
    const newMapVehicles = vehicles.map((vehicle) => {
        if(vehicle.id === id) {
            return {id: vehicle.id, type: newType, wheels: vehicle.wheels};
        }
        else {
            return vehicle;
        }
    });
    return newMapVehicles;
};

console.log(mapVehicles(1, "Truck"));

const filterVehicles = (type) => {
    // Filter does not change any of the elements and returns the array except the chosen value
    const newFilterVehicles = vehicles.filter((vehicle) => {
        return vehicle.type != type;
    });
    return newFilterVehicles;
};

console.log(filterVehicles("Bike"));

const reduceVehicles = () => {
    // reduce returns the sum of the total and number of wheels
    const newReduceVehicles = vehicles.reduce((total, vehicle) => {
        return total + vehicle.wheels; 
    }, 0);
    return newReduceVehicles
};

console.log(reduceVehicles());

// async and fetch

// async () activates when there is a function that it has to wait for
const fetchData = async () => {
    try {
        // wait to fetch the data to log it in the console and catch the error if it fails
        const data = await fetch("https://youtube.com");
        console.log(data);
    }
    catch(err) {
        console.log(err);
    }
  
}

fetchData();

