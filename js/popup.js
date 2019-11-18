$(document).ready(function () {
    
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});


//Функция отображения PopUp
function PopUpShow() {
    $("#popup1").show();
    document.body.style.overflow = "hidden";

    
}
//Функция скрытия PopUp
function PopUpHide() {
    $("#popup1").hide();
    
    document.body.style.overflow = "auto";
}