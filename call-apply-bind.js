let printfullname = function (city, state) {
    console.log(this.firstname + " " + this.lastname + " from " + city + ", " + state);
}

let name = {
    firstname: "Abhishek",
    lastname: "Jadhav",
}

printfullname.call(name, "Pune", "Maharashtra");

name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar"
}

// call()
// Invokes the function immediately.
// Arguments are passed individually.
printfullname.call(name2, "Mumbai", "India");


// apply()
// Invokes the function immediately.
// Arguments are passed as an array.
printfullname.apply(name2, ["Mumbai", "India"]);

// bind()
// Does not invoke the function immediately.
// Returns a new function with this bound (and optionally preset arguments).
let sachinDetails = printfullname.bind(name2, "Mumbai", "India");

sachinDetails();