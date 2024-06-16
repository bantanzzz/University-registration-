function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "charles" && password === "2005") {  // Simple check, replace with actual validation
        window.location.href = "home.html";
    } else {
        alert("Invalid credentials");
    }
    return false;  // Prevent form submission
}


function validateForm() {
    var name = document.getElementById("name").value;
    var school = document.getElementById("school").value;
    var wassceCredits = parseInt(document.getElementById("wassceCredits").value);
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    // Simple validation (you can expand this as needed)
    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }
    if (school.trim() === "") {
        alert("Please enter your school.");
        return false;
    }
    if (isNaN(wassceCredits) || wassceCredits < 0) {
        alert("Please enter a valid number of credits obtained in WASSCE exam.");
        return false;
    }
    if (gender === "") {
        alert("Please select your gender.");
        return false;
    }
    if (address.trim() === "") {
        alert("Please enter your address.");
        return false;
    }
    if (!phoneNumber.match(/^\d{3}-\d{3}-\d{4}$/)) {
        alert("Please enter a valid phone number in the format XXX-XXX-XXXX.");
        return false;
        window.location.href = "course.html";
    }

    // Form is valid, you can submit it
    // Here you can add code to submit the form data to a server or perform other actions
    return true;
    
}






// Sample function to display student's schedule
function displayMySchedule() {
    const myScheduleDiv = document.getElementById('mySchedule');
    myScheduleDiv.innerHTML = '<h2>My Schedule</h2>';
    if (mySchedule.length === 0) {
        myScheduleDiv.innerHTML += '<p>No courses added to schedule yet.</p>';
    } else {
        mySchedule.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.classList.add('course');
            courseDiv.innerHTML = `<span>${course.name} - ${course.instructor}</span>
                                   <button class="button" onclick="removeCourse(${course.id})">Remove</button>`;
            myScheduleDiv.appendChild(courseDiv);
        });
    }
}

// Sample function to add course to student's schedule
function addCourse(courseId) {
    const course = availableCourses.find(course => course.id === courseId);
    if (course) {
        mySchedule.push(course);
        displayAvailableCourses();
        displayMySchedule();
    }
}

// Sample function to remove course from student's schedule
function removeCourse(courseId) {
    mySchedule = mySchedule.filter(course => course.id !== courseId);
    displayAvailableCourses();
    displayMySchedule();
}

// Sample function to calculate academic progress
function calculateAcademicProgress() {
    const academicProgressDiv = document.getElementById('academicProgress');
    academicProgressDiv.innerHTML = '<h2>Academic Progress</h2>';
    const progress = (mySchedule.length / availableCourses.length) * 100;
    academicProgressDiv.innerHTML += `<p>Progress: ${progress.toFixed(2)}%</p>`;
}

// Initial display of available courses and student's schedule
displayAvailableCourses();
displayMySchedule();

// Calculate and display academic progress
calculateAcademicProgress();

// Sample function to handle form submission
document.getElementById('recordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const courseName = document.getElementById('courseName').value;
    const grade = document.getElementById('grade').value;
    const academicAchievement = document.getElementById('academicAchievement').value;

    // Create transcript entry
    const transcriptEntry = document.createElement('div');
    transcriptEntry.innerHTML = `<strong>Course Name:</strong> ${courseName}<br>
                                 <strong>Grade:</strong> ${grade}<br>
                                 <strong>Academic Achievement:</strong><br>${academicAchievement}<hr>`;

    // Append transcript entry to transcript
    document.getElementById('transcript').appendChild(transcriptEntry);

    // Clear form fields
    document.getElementById('recordForm').reset();
});
