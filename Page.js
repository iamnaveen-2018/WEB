
function validateEmail() {
    let email_id = document.getElementById("mail").value;
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!regex_pattern.test(email_id)) {
        return window.alert("Wrong Email");
    }
}

function check()
{
    let b = document.getElementById("pass").value;
    if(b.length < 8){
        window.alert("Password is too short..!");
    }
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if(!regex.test(b))
    {
        return window.alert("Invalid Password");
    }
    else{
        return window.alert("Login Successful");
    }
}
