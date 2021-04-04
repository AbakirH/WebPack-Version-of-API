(function ($) {
    $('#citiesTable').DataTable( {
        "ajax": "http://localhost:8080/api/v1/airtravel",
        "columns": [
            { "data": "Month" },
            { "data": "Column_1958" },
            { "data": "Column_1959" },
            { "data": "Column_1960" },
        ]
    } );

})(jQuery);