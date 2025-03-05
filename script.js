// Sample data for courses
const courses = [
    { name: 'Bachelor of Science [B.Sc] (computer science)', description: 'Learn the fundamentals of computer science.' },
    { name: 'Mathematics', description: 'Explore advanced mathematical concepts.' },
    { name: 'Physics', description: 'Study the principles of physics.' },
    { name: 'Chemistry', description: 'Understand the basics of chemistry.' },
    { name: 'Biology', description: 'Understand the basics of chemistry.' },
    { name: 'Bachelor of Science [B.Sc] (INformation Technology)', description: 'Understand the basics of chemistry.' },
    { name: 'Bachelor of Computer Applications [BCA]', description: 'Understand the basics of chemistry.' },
    { name: 'Bachelor of Commerce [B.Com]', description: 'Understand the basics of chemistry.' },
    { name: 'Bachelor of Business Administration [BBA]', description: 'Understand the basics of chemistry.' },
    { name: 'Master of Business Administration [MBA]', description: 'Understand the basics of chemistry.' },
    { name: 'Bachelor of Education [B.Ed]', description: 'Understand the basics of chemistry.' },
    { name: 'Bachelor of Science [B.Sc] (Mathematics)', description: 'Understand the basics of chemistry.' },
    { name: 'Master of Computer Applications [MCA]', description: 'Understand the basics of chemistry.' },
    { name: 'Master of Business Administration [MBA]', description: 'Dive into the world of biology and life sciences.' },
];

// Function to create course cards dynamically
function loadCourses() {
    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
        <h3>${course.name}</h3>
        <p>${course.description}</p>
        <button onclick="enroll('${course.name}')">Enroll Now</button>
      `;
        courseList.appendChild(courseCard);
    });
}

// Function to handle enrollment action
function enroll(courseName) {
    alert(`You have successfully enrolled in ${courseName}`);
}

// Call the loadCourses function to display the courses
loadCourses();
