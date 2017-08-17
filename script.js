/**
 * Created by kevin on 5/30/17.
 */

$( function() {
    $( "#draggable" ).draggable();
} );

// TODO: CREATE FUNCTION TO ADJUST CONTENT WIDTHS BASED OFF BROWSER SIZE
// https://stackoverflow.com/questions/8717506/dynamically-resize-div-based-on-size-of-browser-window

var adjustContentWidth = function() {
    var width = $(window).width();
    widthChange = 1200;

    if (width > widthChange) {
        $(".width-adapter").css( "padding", "0 200px" )
    } else {
        $(".width-adapter").css("padding", "0");
    }
};

adjustContentWidth();

var addEvent = function(object, type, callback) {
    if (object === null || typeof(object) === 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

addEvent(window, "resize", adjustContentWidth);






// TODO: ANIMATE THE TERMINAL WINDOW USING WEBKIT
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup