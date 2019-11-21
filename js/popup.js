$(document).ready(function () {

    PopUpHide("#popup1");
    PopUpHide("#popup2");
});


function PopUpShow(popup) {
    $(popup).show();
    document.body.style.overflow = "hidden";
}

function PopUpHide(popup) {
    $(popup).hide();
    document.body.style.overflow = "auto";
}

