$ (document) .ready (function() {


    // $(".hide") .click (function() {
    //     $ ("p") .hide (900);

    // })

    // $(".show") .click (function() {
    //     $ ("p") .show (900);

    // })

    $("button") .click (function() {
        $(".demo1") .slideDown(3000);
    })

    $(".stop") .click (function() {
        $(".demo1") .stop();
    })
   
})
