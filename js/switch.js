document.getElementById('switch1').click(function () {
    if ((this).is(':checked')) {
        document.getElementById('bookcheck').css("color", "#3D3D3D;");
        document.getElementById('quotescheck').css("color", "#508FF4");
    } else {
        document.getElementById('bookcheck').css("color", "#508FF4;");
        document.getElementById('quotescheck').css("color", "#3D3D3D");
    }


});