function calculateQRSize() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let qrSize = Math.min(screenWidth, screenHeight) * 0.8;
    return qrSize;
}

$('#generate-button').click(function () {
    let text = $('#text-input').val();
    $('#qrcode').empty();
    let qrSize = calculateQRSize();
    let qrcode = new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: qrSize,
        height: qrSize
    });
    $('#download-button').show();
});

$('#download-button').click(function () {
    html2canvas(document.querySelector("#qrcode"))
    .then(canvas => {
        console.log(canvas);
        let img = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        let link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = img;
        link.click();
    });
});