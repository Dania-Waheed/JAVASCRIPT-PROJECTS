const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const downloadBtn = document.getElementById("downloadBtn");
const generateBtn = document.getElementById("generateBtn");

const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;

generateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput();
})

sizes.addEventListener('change', (e)=>{
    size = e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector(".qr-body img");
    if(img != null)
    {
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute('href',imgAttr);
    }
    else
    {
        downloadBtn.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`);
    }
})

function isEmptyInput()
{
    // if(qrText.value.lenght = 0)
    // {
    //     alert("Enter Text or URL to generate QR Code.");
    // }
    // else
    // {
    //     generateQRCode();
    // }

    qrText.value.lenght = 0 ? alert("Enter Text or URL to generate QR Code.") : generateQRCode();
}

function generateQRCode()
{
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text: qrText.value,
        width: size,
        height: size,
        colorLight: "#ffffff",
        colorDark: "#000"
    });
}