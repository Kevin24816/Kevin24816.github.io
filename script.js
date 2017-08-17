/**
 * Created by kevin on 5/30/17.
 */

$( function() {
    $( "#draggable" ).draggable();
} );

/* adds event listeners */
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

/* adjusts width of page */
var adjustContentWidth = function() {
    var width = $(window).width();
    widthChange = 1200;

    if (width > widthChange) {
        $(".width-adapter").css("padding", "0 200px")
    } else {
        $(".width-adapter").css("padding", "0");
    }
};

adjustContentWidth();
addEvent(window, "resize", adjustContentWidth);

/* toogles dropdown menu */
var dropped = false;
var toggleDropDown = function(b) {
    if (b) {
        dropped = true;
        $(".mynavbar .dropdown-content").css("display", "block");
        $(".mynavbar .menu-icon").css("color", "orange");
    } else {
        dropped = false;
        $(".mynavbar .dropdown-content").css("display", "none");
        $(".mynavbar .menu-icon").css("color", "white");
    }
};

var dropdownOnClick = function(event) {
    if (event.target.classList.contains('menu-icon')) {
        if (dropped === false) {
            toggleDropDown(true);
        } else {
            toggleDropDown(false);
        }
    } else {
        toggleDropDown(false);
    }
};

addEvent(window, "click", dropdownOnClick);


// TODO: ANIMATE THE TERMINAL WINDOW USING WEBKIT
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup