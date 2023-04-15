
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

 
  if (StudentInfo.sStatus == "active") {
    let activeStudentsArray =JSON.parse(localStorage.getItem("allActiveStudents")) || [];
    activeStudentsArray.push(StudentInfo);
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
let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  AddLocal();
  printMessage();
});