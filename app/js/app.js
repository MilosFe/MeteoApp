var http = function(opts) {
    console.log('Opts');
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open(opts.method, opts.url);
        request.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                console.log('Resolve');
                resolve(request.response);
            } else {
                reject({
                    status: this.status,
                    statusText: request.statusText
                })
            }
        };
        request.onerror = function() {
            reject({
                status: this.status,
                statusText: request.statusText
            });
        };
        request.send();
    })


}