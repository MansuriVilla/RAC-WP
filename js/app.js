$(document).ready(function () {
    // Open offcanvas menu
    $('.open-btn').click(function () {
        $('.offcanvas').addClass('open');
    });

    // Close offcanvas menu
    $('.close-btn').click(function () {
        $('.offcanvas').removeClass('open');
    });

    // Close offcanvas menu when clicking outside
    $(document).click(function (event) {
        if (!$(event.target).closest('.offcanvas, .open-btn').length) {
            $('.offcanvas').removeClass('open');
        }
    });
});
