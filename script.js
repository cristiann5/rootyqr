const input = document.getElementById("text");
const button = document.getElementById("btn");
const qr = document.getElementById("qr");
const saveButton = document.getElementById("save");

input.value = "https://example.com";

function generate() {
  const value = input.value.trim();
  qr.innerHTML = "";
  if (!value) return;
  new QRCode(qr, { text: value, width: 256, height: 256 });
}

function downloadQR() {
  const img = qr.querySelector("img");
  if (!img) return;
  const a = document.createElement("a");
  a.href = img.src;
  a.download = "qrcode.png";
  a.click();
}

button.addEventListener("click", generate);
saveButton.addEventListener("click", downloadQR);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") generate();
});