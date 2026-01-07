const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrBody = document.getElementById("qr-body");

let size = sizes.value;

generateBtn.addEventListener("click", () => {
    if (!qrText.value.trim()) {
        alert("Please enter text or URL");
        return;
    }
    generateQR();
});

sizes.addEventListener("change", () => {
    size = sizes.value;
    if (qrText.value.trim()) generateQR();
});

downloadBtn.addEventListener("click", () => {
    const img = qrBody.querySelector("img") || qrBody.querySelector("canvas");
    downloadBtn.href = img.src || img.toDataURL();
});

function generateQR() {
    qrBody.innerHTML = `<p class="placeholder">Generating QR...</p>`;

    setTimeout(() => {
        qrBody.innerHTML = "";
        new QRCode(qrBody, {
            text: qrText.value,
            width: size,
            height: size,
            colorDark: "#000",
            colorLight: "#fff"
        });
        downloadBtn.classList.remove("disabled");
    }, 300);
}
