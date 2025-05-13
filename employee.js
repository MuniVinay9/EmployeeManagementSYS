const tbody = document.querySelector("tbody");
const form = document.querySelector(".form");

window.addEventListener("DOMContentLoaded", loadEmployeesFromStorage);

function addEmployee(employee){
    const tr = document.createElement("tr");
    
    for(let key in employee){
        const td = document.createElement("td");
        td.innerText = employee[key];
        tr.appendChild(td);
    }

    const td = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    td.appendChild(deleteBtn);
    tr.appendChild(td);

    tbody.appendChild(tr);

    deleteBtn.addEventListener("click", () =>{
        tr.remove();
        deleteEmployeeFromStorage(employee.email);
    })
}



form.addEventListener("submit", event => {
    event.preventDefault();
    const employeeData = {
        name: form.name.value,
        email: form.email.value,
        salary: form.salary.value,
        companyName: form.companyName.value,
        gender: form.gender.value,
        role: form.role.value
    }
    addEmployee(employeeData);
    saveEmployeeToStorage(employeeData);
    form.reset();
});
// addEmployee({name: "Vinay", email:"v@gmail.com", salary:1200000, companyName:"google", gender: "Male"});

// Local storage Functions

function getEmployeesFromStorage(){
    return JSON.parse(localStorage.getItem("employees")) || [];
}

function saveEmployeeToStorage(employee){
    const employees = getEmployeesFromStorage();
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
}

function loadEmployeesFromStorage(){
    const employees = getEmployeesFromStorage();
    employees.forEach(employee => {
        addEmployee(employee);
    })
}

function deleteEmployeeFromStorage(email){
    let employees = getEmployeesFromStorage();
    employees= employees.filter(emp => emp.email !== email);
    localStorage.setItem("employees",JSON.stringify(employees));
}