// Login Page 
document.getElementById('sign-btn').addEventListener('click', function(){
    const userNameInput = document.getElementById('usernameInput');
    const userName = userNameInput.value;

    const userPasswordInput = document.getElementById('passwordInput');
    const userPassword = userPasswordInput.value;

    if(userName === "admin" && userPassword === "admin123"){
        alert("Sign In Success");

        window.location.assign('home.html');

    }
    else{
        alert("Sign In Failed, USE Demo Credentials");
        return;
    }

})