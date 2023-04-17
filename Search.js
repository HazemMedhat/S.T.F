function myFunction() {
    var input , filter , table , tr , td , i , txtValue ;
    input = document.getElementById("Input");
    filter = input.value.toUpperCase();
    table = document.getElementById("SearchTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }


// function filterTable() {
//     // Get input element and filter value
//     let input = document.getElementById("search-input");
//     let filter = input.value.toUpperCase();
    
//     // Get table body
//     let tableBody = document.querySelector(".ActiveStudents tbody");
    
//     // Get all rows of the table
//     let rows = tableBody.getElementsByTagName("tr");
    
//     // Loop through all rows, hide those that don't match the search query
//     for (let i = 0; i < rows.length; i++) {
//       let cells = rows[i].getElementsByTagName("td");
//       let rowMatches = false;
//       for (let j = 0; j < cells.length; j++) {
//         let cellText = cells[j].textContent.toUpperCase();
//         if (cellText.indexOf(filter) > -1) {
//           rowMatches = true;
//           break;
//         }
//       }
//       if (rowMatches) {
//         rows[i].style.display = "";
//       } else {
//         rows[i].style.display = "none";
//       }
//     }
//   }
  
//   // Listen for user input
//   document.getElementById("search-input").addEventListener("input", filterTable);
  


const data = localStorage.getItem("allActiveStudents");
   
const students1 = JSON.parse(data);
const createTableData1 = (students1) =>{
    let html1 = ``
    students1.forEach(student => {
        html1 += `
            <tr>
                <td>${student.fullName1}</td>
                <td>${student.sID}</td>
                <td>${student.sEmail}</td>
                <td>${student.sPhone}</td>
                <td>${student.sGender}</td>
                <td>${student.sLevel}</td>
                <td>${student.sGpa}</td>
                <td>${student.sDepartment}</td>
                <td>${student.sBirthDate}</td>
                <td>${student.sStatus}</td>
                <td>${student.button}</td> 
            </tr>
        `
    });
    return html1;
}
const createTable1 = (students1) => {
    return `
        <table class="ActiveStudents">
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Level</th>
            <th scope="col">Gpa</th>
            <th scope="col">Department</th>
            <th scope="col">BirthDate</th>
            <th scope="col">Status</th>
            <th scope="col"> Assign Dep </th>
        </tr>
        </thead>
        <tbody>
        ${createTableData1(students1)}
        </tbody>
    </table>
    `
}
document.getElementById('result').innerHTML = `
    <div>
        ${createTable1(students1)}
    </div>
`
// function viewStudent(StudentInfo) {
//     // Store the student data in localStorage
//     localStorage.setItem('selectedStudent', JSON.stringify(StudentInfo));
    
//     // Redirect to the target page
//     window.location.href = 'C:\Users\Hazem\Desktop\weeeeb\deprtement.html';
//   }

//   // Get the stored student data from localStorage
// const selectedStudent = JSON.parse(localStorage.getItem('selectedStudent'));

// // Do something with the student data, such as displaying it on the page
// console.log(selectedStudent.fullName1);
