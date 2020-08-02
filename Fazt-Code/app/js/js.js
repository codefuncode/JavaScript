jQuery(document).ready(function($) {
    //==========================================================
    $('#mySearch').keyup(function(argument) {

        var $busqueda = $('#mySearch').val();

        // console.log($busqueda.length);

        if ($busqueda.length == 0) {
            $('#datostareas').hide();
        } else {

            var datos = {
                busqueda: $busqueda
            };

            $.post("php/php.php", datos,

                function(data, status) {

                    var obj = JSON.parse(data);

                    var tbody = '';

                    for (var i = 0; i < obj.length; i++) {
                        tbody += "<tr><td>" + obj[i]['numero'] + "</td>" +
                            "<td>" + obj[i]['titulo'] + "</td><td>" + obj[i]['nota'] + "</td></tr>";

                    }

                    $("#datostareas").html(tbody);
                    $('#datostareas').show();
                });
        }

    });
    //==========================================================
});