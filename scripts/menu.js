/**
 * Created by vestein on 20.12.2015.
 */

var menu = {
    home: {
        href: '/index.html',
        display: '<b>Vestein Dahl</b>'
    },
    about: {
        href: "/about.html",
        display: "about"
    },
    twitter: {
        href: "http://www.twitter.com/woodstonevalley",
        display: "twitter"
    },
    github: {
        href: "https://www.github.com/woodstone",
        display: "github"
    },
    sokoban: {
        href: "/sokoban.html",
        display: "sokoban"
    }
};

onload = function() {
    var menuHtml = '';
    for (link in menu) {
        var linkHtml;
        linkHtml = '<a href="' + menu[link].href + '">' + menu[link].display + '</a>';
        menuHtml += linkHtml;
    }
    document.getElementById('nav').innerHTML = menuHtml;
};