// let connect = {
        $(document).ready(function(){
            var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
            socket.on('my response', function(msg) {
                $('#log').append('<p>Received: ' + msg.data + '</p>');
            });
            socket.on('field1', function(msg) {
                console.log(msg.data[0]['field1'])
                $('#f1').append('<p>' +msg.data[0]['field1']+ '</p>');
            });
            socket.on('field2', function(msg) {
                $('#f2').append('<p>' +msg.data[0]['field2']+ '</p>');
            });
            socket.on('field3', function(msg) {
                $('#f3').append('<p>' +msg.data[0]['field3']+ '</p>');
            });
            socket.on('field4', function(msg) {
                $('#f4').append('<p>' +msg.data[0]['field4']+ '</p>');
            });
            socket.on('field5', function(msg) {
                $('#f5').append('<p>' +msg.data[0]['field5']+ '</p>');
            });
            socket.on('field6', function(msg) {
                $('#f6').append('<p>' +msg.data[0]['field6']+ '</p>');
            });
            socket.on('field7', function(msg) {
                $('#f7').append('<p>' +msg.data[0]['field7']+ '</p>');
            });
            socket.on('field8', function(msg) {
                $('#f8').append('<p>' +msg.data[0]['field8']+ '</p>');
            });
            socket.on('field9', function(msg) {
                $('#f9').append('<p>' +msg.data[0]['field9']+ '</p>');
            });
            $('form#emit').submit(function(event) {
                console.log('to odpala')
                socket.emit('my event', {data: $('#emit_data').val()});
                return false;
            });
            $('form#f1').submit(function(event) {
                console.log($('#player').get(0).innerHTML)
                socket.emit('field1', {data: $('#player').get(0).innerHTML});
                return false;
            });
            $('form#broadcast').submit(function(event) {
                socket.emit('my broadcast event', {data: $('#broadcast_data').val()});
                return false;
            });
        });

// }