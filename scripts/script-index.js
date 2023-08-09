document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const signupPage = document.getElementById("signupPage");
    const profileUpdatePage = document.getElementById("profileUpdatePage");

    const signupButton = document.getElementById("signupButton");
    const userTypeSelect = document.getElementById("userType");
    // ... other elements ...

    signupButton.addEventListener("click", function () {
        const userType = userTypeSelect.value;
        const fullName = signupFullName.value;
        const email = signupEmail.value;
        const username = signupUsername.value;
        const password = signupPassword.value;
        const user = { userType, fullName, email, username, password, company: {} };

        localStorage.setItem(username, JSON.stringify(user));
        localStorage.setItem("loggedInUser", username); 


        navigateToProfileUpdatePage();
    });

    // ... other event listeners ...

    function navigateToProfileUpdatePage() {
        window.location.href = "companyProfile.html";
    }
});
