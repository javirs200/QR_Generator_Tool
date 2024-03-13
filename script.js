function calculateQRSize() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let qrSize = Math.min(screenWidth, screenHeight) * 0.8;
    return qrSize;
}

// Set default values
let defaultSize = 128;
let defaultBackgroundColor = '#ffffff';
let defaultBorderStyle = 'solid';
let defaultBorderColor = '#55d7fb';
let defaultBorderRadius = 20;
let defaultBorderWidth = 2;

// Set default values in settings
$('#size').val(defaultSize);
$('#background-color').val(defaultBackgroundColor);
$('#border-style').val(defaultBorderStyle);
$('#border-color').val(defaultBorderColor);
$('#border-radius').val(defaultBorderRadius);
$('#border-width').val(defaultBorderWidth);

$('#generate-button').click(function() {
    let text = $('#text-input').val();
    let size = $('#size').val();
    let backgroundColor = $('#background-color').val();
    let borderStyle = $('#border-style').val();
    let borderColor = $('#border-color').val();
    let borderRadius = $('#border-radius').val();
    let borderWidth = $('#border-width').val();

    $('#qrcode').empty();
    $('#qrcode').css({
        'background-color': backgroundColor,
        'border-style': borderStyle,
        'border-color': borderColor,
        'border-radius': borderRadius + 'px',
        'border-width': borderWidth + 'px'
    });

    let qrcode = new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: size,
        height: size
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

$('#toggle-settings').click(function() {
    $('#settings').toggle();
});