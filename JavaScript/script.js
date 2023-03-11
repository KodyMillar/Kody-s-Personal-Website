courses = [
    {code: "ACIT 1420", name: "Introduction to Systems Administration"}, 
    {code: "ACIT 1515", name: "Scripting for IT"},
    {code: "ACIT 1630", name: "Database Systems"}
];

code = prompt("Please enter a 4 digit course code: ");
if (code.length != 4 || isNaN(code) == true) {
    do {
        code = prompt("Invalid entry. Please enter a 4 digit number: ");
    }
    while (code.length != 4 || isNaN(code) == true) 
}