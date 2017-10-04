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
        console.log('Here')
        var url = '/meteo/?lat=' + lat.value + '&lon=' + lon.value;
        var city = request({
            method: 'GET',
            url: url
        });
        city.then(function(data) {
            console.log(data);
        })

    })

})(window, toastr, jQuery, http);