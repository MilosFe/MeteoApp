var app = (function(global, toastr) {
    var request = new XMLHttpRequest();
    request.open('GET', '/meteo', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = request.responseText;
            console.log(data);
        } else {
            // We reached our target server, but it returned an error

        }
    };

    request.onerror = function() {
        // There was a connection error of some sort
    };

    request.send();
})(window, toastr);