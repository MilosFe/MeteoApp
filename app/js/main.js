(function(global, toastr, $, request, cords) {
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

        var get = new cords();
        get.constructor({
            location: '#location',
            destination: "#destination"
        })
        global.map = JSON.stringify(get.validateFields());
        console.log(global.map);



        // var url1 = '/meteo/?lat=' + x['0'].lat + '&lon=' + x['1'].lon;
        // var url2 = '/meteo/?lat=' + x['0'].lat + '&lon=' + x['1'].lon;
        // console.log(url1);
        // console.log('\n ==========================================');
        // console.log(url2);

        // var first = request({
        //     method: 'GET',
        //     url: url
        // });
        // var second = request({
        //     method: 'GET',
        //     url: url
        // });

        // Promise.all([first, second]).then(function(data1, data2) {
        //     console.log(data1);
        //     console.log('\n\n\n\n\n');
        //     console.log(data2);
        // });


    });

})(window, toastr, jQuery, http, cordinates);