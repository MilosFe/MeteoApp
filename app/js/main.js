(function(global, toastr, $, request) {
    'use strict';
    var lat = document.getElementById("location");
    var lon = document.getElementById("destination");
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

        var url = '/meteo/?lat=' + lat.value + '&lon=' + lon.value;
        var first = request({
            method: 'GET',
            url: url
        });
        var second = request({
            method: 'GET',
            url: url
        });

        Promise.all([first, second]).then(function(data1, data2) {
            console.log(data1);
            console.log('\n\n\n\n\n');
            console.log(data2);
        });


    });

})(window, toastr, jQuery, http);