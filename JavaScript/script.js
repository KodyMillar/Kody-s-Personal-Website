courses = [
    {code: "ACIT 1420", name: "Introduction to Systems Administration"}, 
    {code: "ACIT 1515", name: "Scripting for IT"},
    {code: "ACIT 1630", name: "Database Systems"}
];


do {
    code = prompt("Please enter a 4 digit course code: ");
}
while (code.length !== 4 || isNaN(code) === true); 


for (let course of courses) {
    if (course["code"].includes(code)) {
        console.log(`Yes, I am taking the course: ${course["code"]} - ${course["name"]}`);
        break;
    }

    else if (courses.indexOf(course) === courses.length - 1) {
        courses.push({code: code, name: null});
        console.log(`Successfully added new course code ${code} to courses list`);
        console.log(courses);
        break;
    }
}

