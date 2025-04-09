const loginUrl = "https://yourwebsite.com/login"; // Replace with your actual login page URL

  const qrcode = new QRCode(document.getElementById("qrCode"), {
    text: loginUrl,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });