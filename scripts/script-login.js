document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");

    if (loginButton) {
        loginButton.addEventListener("click", function () {
            const loginUsername = document.getElementById("loginUsername");
            const loginPassword = document.getElementById("loginPassword");

            if (loginUsername && loginPassword) {
                const username = loginUsername.value;
                const password = loginPassword.value;

                const storedUser = JSON.parse(localStorage.getItem(username));

                if (storedUser && storedUser.password === password) {
                    localStorage.setItem("loggedInUser", username);
                    alert("Logged in successfully.");
                    redirectToProfileUpdatePage();
                } else {
                    alert("Invalid username or password.");
                }
            } else {
                console.error("One or more required elements not found.");
            }
        });
    } else {
        console.error("loginButton element not found.");
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

    function redirectToProfileUpdatePage() {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            const storedUser = JSON.parse(localStorage.getItem(loggedInUser));
            if (storedUser) {
                redirectToDashboard(storedUser.userType);
            } else {
                console.error("User data not found in localStorage.");
            }
        } else {
            console.error("loggedInUser not found in localStorage.");
        }
    }


});
