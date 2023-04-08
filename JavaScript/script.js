
const courses = document.querySelectorAll(".name-date");


function createCourseArray(){
    const courseArray = [];
    for (let name of courses){
        const courseName = name.querySelector(".course-name").textContent;
        const courseDate = name.querySelector(".course-date").textContent;
        courseArray.push({code: `${courseName}`, date: `${courseDate}`});
    }
 
    return courseArray;
}


function findCourse(courseList){
    do {
        code = prompt("Please enter a 4 digit course code: ");
    }
    while (code.length !== 4 || isNaN(code) === true);

    for (let course of courseList){
        if (course["code"].includes(code)){
            document.getElementById(code).style.backgroundColor = "green";
            return;
            }
        }
    
    const courseListDiv = document.querySelector("#course-list");
    const courseSection = document.createElement("section");
    courseSection.className = "course course-border";
    const nameDate = document.createElement("div");
    courseListDiv.appendChild(courseSection);
    courseSection.appendChild(nameDate);
    const description = document.createElement("div");
    courseSection.appendChild(description);
    const courseName = document.createElement("a");
    courseName.href = "#"
    const courseDate = document.createElement("p");
    courseName.textContent = code;
    courseName.className = "course-name";
    courseDate.textContent = "Fall 2020";
    courseDate.className = "course-date"
    nameDate.appendChild(courseName);
    nameDate.appendChild(courseDate);
    const courseDescription = document.createElement("p");
    courseDescription.textContent = "N/A";
    description.appendChild(courseDescription);
    
}



findCourse(createCourseArray());

