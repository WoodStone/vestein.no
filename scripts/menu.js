/**
 * Created by vestein on 20.12.2015.
 */

$(function() {
    $.getJSON('data/menu.json', function(data) {
        $.each(data, function(key, value) {
            var link;
            if (window.location.href.indexOf(value) != -1) {
                link = createLink(value, key, 'mdl-navigation__link active');
            } else {
                link = createLink(value, key, 'mdl-navigation__link');
            }
            $('.nav').append(link);
        })
    })
});

function createLink(href, display, classes) {
    var link = document.createElement('a');
    link.className = classes;
    link.href = href;
    link.innerHTML = display;
    return link;
}