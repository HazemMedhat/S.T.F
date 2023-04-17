function show_confirm(){
    var r=confirm("Change Student Status");
    if (r==true)
      {
      alert("Student status Changed Successfully!");
      }
    else
      {
      alert("changing Status canceld!");
      }
}

const button1 = document.getElementById("button1")
btn1.addEventListener('click' , ()=> {
    const data1 = localStorage.getItem("allActiveStudents");
    const students1 = JSON.parse(data1);
    document.getElementById('activeTable').innerHTML = `
        <div>
            ${createTable1(students1)}
        </div>
    `
})


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
        </tr>
        </thead>
        <tbody>
        ${createTableData1(students1)}
        </tbody>
    </table>
    `
}


const createTableData1 = (students1) =>{
    let html1 = ``
    students1.forEach(student => {
        html1 += `
            <tr>
                <td>${student.fulltName1}</td>
                <td>${student.sID}</td>
                <td>${student.sEmail}</td>
                <td>${student.sPhone}</td>
                <td>${student.sGender}</td>
                <td>${student.sLevel}</td>
                <td>${student.sGpa}</td>
                <td>${student.sDepartment}</td>
                <td>${student.sBirthDate}</td>
                <td>${student.sStatus}</td>
            </tr>
        `
    });
    return html1;
}

const button2 = document.getElementById("button2")

btn2.addEventListener('click' , ()=> {
    const data2 = localStorage.getItem("allInActiveStudents");
    const students2 = JSON.parse(data2);
    document.getElementById('inActiveTable').innerHTML = `
        <div>
            ${createTable2(students2)}
        </div>
    `
})


const createTable2 = (students2) => {
    return `
        <table class="inActiveStudents">
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
        </tr>
        </thead>
        <tbody>
        ${createTableData2(students2)}
        </tbody>
    </table>
    `
}

const createTableData2 = (students2) =>{
    let html2 = ``
    students2.forEach(student => {
        html2 += `
            <tr>
                <td>${student.fullName1 }</td>
                <td>${student.sID}</td>
                <td>${student.sEmail}</td>
                <td>${student.sPhone}</td>
                <td>${student.sGender}</td>
                <td>${student.sLevel}</td>
                <td>${student.sGpa}</td>
                <td>${student.sDepartment}</td>
                <td>${student.sBirthDate}</td>
                <td>${student.sStatus}</td>
            </tr>
        `
    });
    return html2;
}
