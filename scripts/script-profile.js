
document.addEventListener("DOMContentLoaded", function () {
    const updateProfileButton = document.getElementById("updateProfileButton");



    if (updateProfileButton) {
        updateProfileButton.addEventListener("click", function () {

            const companyName = document.getElementById("companyName");
            const companyLocation = document.getElementById("companyLocation");
            const employeeCount = document.getElementById("employeeCount");
            const companyEmail = document.getElementById("companyEmail");
            const companyPhone = document.getElementById("companyPhone");

            if (companyName && companyLocation && employeeCount && companyEmail && companyPhone) {
                const loggedInUser = localStorage.getItem("loggedInUser");

                // Retrieve the user data from localStorage based on the loggedInUser username
                const user = JSON.parse(localStorage.getItem(loggedInUser));


                if (user) {
                    user.company.name = companyName.value;
                    user.company.location = companyLocation.value;
                    user.company.employeeCount = employeeCount.value;
                    user.company.email = companyEmail.value;
                    user.company.phone = companyPhone.value;

                    // Store the updated user data back to localStorage
                    localStorage.setItem(loggedInUser, JSON.stringify(user));
                    alert("Profile updated successfully.");

                    redirectToDashboard(user.userType); // Redirect based on user type
                } else {
                    console.error("User data not found in localStorage.");
                }
            } else {
                console.error("One or more required elements not found.");
            }
        });
    } else {
        console.error("updateProfileButton element not found.");
    }

    function redirectToDashboard(userType) {
        if (userType === "contractor") {
            window.location.href = "contractor/contractorDashboard.html";
        } else if (userType === "supplier") {
            window.location.href = "supplier/supplierDashboard.html";
        } else {
            console.error("Unknown user type.");
        }
    }
});

