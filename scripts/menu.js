/**
 * Created by vestein on 20.12.2015.
 */

$(function() {
    $.getJSON('data/menu.json', function(data) {
        $.each(data, function(key, value) {
            $('.nav').append(createLink(value, key, 'mdl-navigation__link'));
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