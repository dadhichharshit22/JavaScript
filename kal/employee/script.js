// Load JSON data and initialize the gallery
window.onload = function() {
    fetch('employees.json')
        .then(response => response.json())
        .then(data => {
            const employees = data.employees;
            let currentIndex = 0;

            function loadEmployee(index) {
                const employee = employees[index];
                document.getElementById('employeeImage').src = employee.image;
                document.getElementById('employeeName').textContent = employee.name;
                document.getElementById('employeeDesignation').textContent = employee.designation;
                document.getElementById('employeeProject').textContent = `Project: ${employee.project}`;
                document.getElementById('employeeExperience').textContent = `Years of Experience: ${employee.experience}`;
            }

            // Load the first employee when the page loads
            loadEmployee(currentIndex);

            // Event listeners for next and previous buttons
            document.getElementById('nextBtn').addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % employees.length;
                loadEmployee(currentIndex);
            });

            document.getElementById('prevBtn').addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + employees.length) % employees.length;
                loadEmployee(currentIndex);
            });
        });
};
