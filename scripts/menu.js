/**
 * Created by vestein on 20.12.2015.
 */

var menu = [
    {
        href: '/index.html',
        display: '<b>Vestein Dahl</b>'
    },
    {
        href: "/about.html",
        display: "about"
    },
    {
        href: "http://www.twitter.com/woodstonevalley",
        display: "twitter"
    },
    {
        href: "https://www.github.com/woodstone",
        display: "github"
    },
    {
        href: "/sokoban/sokoban.html",
        display: "sokoban"
    }
];

onload = function() {
    var menuHtml = '';
    for (link in menu) {
        var linkHtml;
        linkHtml = '<a href="' + menu[link].href + '">' + menu[link].display + '</a>';
        menuHtml += linkHtml;
    }
    document.getElementById('nav').innerHTML = menuHtml;
};