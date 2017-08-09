/**
 * Created by kevin on 5/30/17.
 */

$( function() {
    $( "#draggable" ).draggable();
} );

// TODO: CREATE FUNCTION TO ADJUST CONTENT WIDTHS BASED OFF BROWSER SIZE
// https://stackoverflow.com/questions/8717506/dynamically-resize-div-based-on-size-of-browser-window
// var width = $(window).width();
// window.alert("window width: " + width);
// original_width = $(".content").width().get();
// if (width > 750) {
//     $(".content").width(.70 * width);
// } else {
//     $(".content").width(original_width);
// }


// TODO: ANIMATE THE TERMINAL WINDOW USING WEBKIT
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup