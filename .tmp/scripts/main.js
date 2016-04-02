'use strict';

console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(document).ready(function () {
    console.log("ready!");

    $('li > a').click(function () {
        $('li').removeClass();
        $(this).parent().addClass('active');
    });
});
//# sourceMappingURL=main.js.map
