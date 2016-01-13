/**
 * Created by vestein on 20.12.2015.
 */

var menu = [
    {
        href: '/',
        display: 'home'
    },
    {
        href: "/projects",
        display: "projects"
    },
    {
        href: "http://www.twitter.com/woodstonevalley",
        display: "twitter"
    },
    {
        href: "https://www.github.com/woodstone",
        display: "github"
    }
];

function createLink(href, display, classes) {
    var link = document.createElement('a');
    link.className = classes;
    link.href = href;
    link.innerHTML = display;
    return link;
}

function func() {
    for (var i = 0; i < menu.length; i++) {
        var link;
        if (window.location.href.indexOf(menu[i].href) != -1) {
            link = createLink(menu[i].href, menu[i].display, 'mdl-navigation__link active');
        } else {
            link = createLink(menu[i].href, menu[i].display, 'mdl-navigation__link');
        }
        var elements = document.getElementsByClassName('nav');
        for (var j = 0; j < elements.length; j++) {
           elements[j].appendChild(link.cloneNode(true));
        }
    }
}

func();