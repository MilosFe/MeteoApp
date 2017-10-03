(function(global, toastr, $, application) {
    'use strict';


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
})(window, toastr, jQuery, app);