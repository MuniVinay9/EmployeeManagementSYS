Employee Management System (Local Storage Version)
A simple web-based Employee Management System using pure HTML, CSS, and JavaScript with Local Storage support.

It allows you to:

✅ Add employees.

✅ View employee data in a table.

✅ Delete employees.

✅ Persist data in the browser even after page reloads.

🛠 Features
Add employee with:

Name

Email (used as a unique identifier)

Salary

Gender

Company Name

Role

Display all employees in a table.

Delete employee.

Data stored in browser's Local Storage.

📁 Project Structure

EmployeeManagementSYS/
├── employee.html     # Main webpage
├── employee.js       # JavaScript logic (add, delete, storage)
├── style.css         # Styling for the UI
├── Screenshot.png     # UI Screenshot 
└── README.md


🚀 Getting Started
1. Clone or Download the project
git clone https://github.com/MuniVinay9/EmployeeManagementSYS

2. Open employee.html in your browser
Simply double-click employee.html or right-click and select Open with browser.

💾 How Local Storage Works
On Form Submit:

Captures employee data.

Saves the data to local storage.

Updates the table.

On Page Load:

Fetches all employees from local storage.

Displays them automatically.

On Delete:

Removes the row from the table.

Updates local storage by removing the selected employee using their email.

🖼 Screenshot

![Employee Management UI](./Screenshot(228).png)

💡 Technologies Used

HTML5
CSS3 (Flexbox & Grid)
JavaScript (DOM Manipulation & Local Storage API)

📚 How to Customize
Modify the employee fields by updating the form in employee.html.

Adjust styling in style.css.

Enhance or modify logic in employee.js.

🌟 Future Improvements (Ideas)
Add Edit functionality.

Validate duplicate emails.

Export employee data as CSV.

Improve UI using Bootstrap or Tailwind CSS.

