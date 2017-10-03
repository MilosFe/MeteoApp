(function(global, toastr, $, application) {
    'use strict';
    var lat = document.getElementById("lat");
    var lon = document.getElementById("lon");
    var submitBtn = document.getElementById("submit");



    toastr.options = {
        'debug': false,
        'positionClass': 'toast-bottom-right',
        'onclick': null,
        'fadeIn': 300,
        'fadeOut': 1000,
        'timeOut': 2000,
        'extendedTimeOut': 2000
    };
    toastr.info('Admin Panel');

    submitBtn.addEventListener('click', function() {
        console.log('here');
        var open = new app(lat.value, lon.value);
        open.send();
    })

})(window, toastr, jQuery, app);