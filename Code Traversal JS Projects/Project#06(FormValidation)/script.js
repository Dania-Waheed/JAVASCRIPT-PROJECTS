const submitBtn = document.getElementById("submitBtn");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passError = document.getElementById("passError");
let fname = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(nameValidation() && emailValidation() && passValidation())
    {
        alert("Form Submitted Successfully");
        
    }
    fname.innerHTML == "";
        email.innerHTML == "";
        password.innerHTML == "";
});

function nameValidation()
{
    let name = document.getElementById("name").value;
    if(name.length == 0)
    {
        nameError.innerHTML = "Name is required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        nameError.innerHTML = "Write Full Name";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

function emailValidation()
{
    let email = document.getElementById("email").value;
    if(email.length == 0)
    {
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
        emailError.innerHTML = "Enter Valid Email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;

}
function passValidation()
{
    let password = document.getElementById("password").value;
    if(password.length == 0)
    {
        passError.innerHTML = "Password is required";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/))
    {
        passError.innerHTML = "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    passError.innerHTML = "";
    passError.previousElementSibling.classList.add('fa-check');
    return true;
}