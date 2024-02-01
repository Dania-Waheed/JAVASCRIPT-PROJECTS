let toastBox = document.getElementById("toastBox");

let successMsg = `<i class="fa-solid fa-circle-check"></i> Successful!`;
let errorMsg = `<i class="fa-solid fa-circle-xmark"></i> Error Occurred!`;
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid!`;

function showToast(msg)
{
    let toast = document.createElement('div');
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes("Error"))
    {
        toast.classList.add("error");
    }
    else if(msg.includes("Invalid"))
    {
        toast.classList.add("invalid")
    }
}