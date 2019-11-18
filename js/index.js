$(document).ready(function() {
    $('b[role="presentation"]').hide();
    $('.select2-arrow').append('<i class="fa fa-angle-down"></i>');
    $('.js-example-basic-single').select2({
        minimumResultsForSearch: Infinity,
        width: '100%'
      });
     
});