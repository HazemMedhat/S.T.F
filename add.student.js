// this function is to add student data to the local storage
function AddLocal() {
  var fullName = document.getElementById("name").value;
  var ID = document.getElementById("id").value;
  var birthDate = document.getElementById("birth").value;
  var Gpa = document.getElementById("GPA").value;
  var Gender = document.getElementById("gender").value;
  var Level = document.getElementById("level").value;
  var Status = document.getElementById("status").value;
  var Department = document.getElementById("department").value;
  var Email = document.getElementById("email").value;
  var Phone = document.getElementById("phone").value;
// all the code above is to get all elements values from the from
  
// this is the object that hold all the student data take care when you get data from the local storage you will use this abject for example 
// StudentInfo.firstName
var StudentInfo = {
    firstName: fullName,
    sID: ID,
    sBirthDate: birthDate,
    sGpa: Gpa,
    sGender: Gender,
    sLevel: Level,
    sStatus: Status,
    sDepartment: Department,
    sEmail: Email,
    sPhone: Phone,
  };

  // this if condition is to separate active and inactive students in different arrays

  if (StudentInfo.sStatus == "active") {
      // this to convert the stringify object to object again
    let activeStudentsArray =JSON.parse(localStorage.getItem("allActiveStudents")) || [];
    // after we get the data we push the new student info
    activeStudentsArray.push(StudentInfo);
    // after we push we get back the array of oject to the local storage again
    localStorage.setItem("allActiveStudents",JSON.stringify(activeStudentsArray));
  } 
  else 
  {
    let inactiveStudentsArray =JSON.parse(localStorage.getItem("allInActiveStudents")) || [];
    inactiveStudentsArray.push(StudentInfo);
    localStorage.setItem("allInActiveStudents",JSON.stringify(inactiveStudentsArray));
  }
}
function printMessage() {
    let message = document.getElementById('message');
    message.innerHTML='Student added successfully!';
    message.removeAttribute('hidden');
    setTimeout(function () {
        message.innerHTML='';
        message.setAttribute('hidden', 'true');
    }, 5000)
}
// here we add event listner to the submit button
let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  AddLocal();
  printMessage();
});