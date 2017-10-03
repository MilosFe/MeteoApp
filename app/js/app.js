var app = function(lat, lon) {
    var request = new XMLHttpRequest();
    var url = '/meteo/?lat=' + lat + '&lon=' + lon;
    request.open('GET', url, true);

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

    return request;
}