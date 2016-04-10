'use strict';

console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(document).ready(function () {
    console.log("ready!");

    $('li > a').click(function () {
        $('li').removeClass();
        $(this).parent().addClass('active');
    });

    $('.btn-success').click(function () {
        $('body').css({
            'background-color': 'white',
            'color': '#7DE718'
        });
    });
});
//# sourceMappingURL=main.js.map
