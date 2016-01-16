/**
 * Created by vestein on 14.01.2016.
 */

$(function() {
    $.getJSON("data/projects.json", function(data) {
        $.each( data, function(key, val) {
            $('#projects').append(createCell(key, val));
        });
    });
});

var cellClass = 'mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone';
var cardClass = 'mdl-card von-card mdl-shadow--2dp';
var mediaClass = 'mdl-card__media';
var titleClass = 'mdl-card__title';
var titleH2Class = 'mdl-card__title-text';
var textClass = 'mdl-card__supporting-text';
var actionClass = 'mdl-card__actions mdl-card--border';
var actionLinkClass = 'mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect';

var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

function createCell(key, cardData) {
    var cellDiv = document.createElement('div');
    cellDiv.className = cellClass;

    cellDiv.appendChild(createCard(key, cardData));

    return cellDiv;
}

function createCard(key, cardData) {
    var cardDiv = document.createElement('div');
    cardDiv.className = cardClass;

    cardDiv.appendChild(createMediaElement(key, cardData.media));
    cardDiv.appendChild(createTitleElement(cardData.title));
    cardDiv.appendChild(createTextElement(cardData.text));
    cardDiv.appendChild(createActionElement(cardData.buttons));

    return cardDiv;
}

function createMediaElement(key, media) {
    var mediaDiv = document.createElement('div');

    mediaDiv.className = mediaClass;
    mediaDiv.id = key;
    mediaDiv.style.backgroundImage = 'url("images/' + (isSafari ? media.png : media.webp) + '")';
    mediaDiv.style.backgroundPosition = 'center';
    mediaDiv.style.backgroundSize = 'cover';

    return mediaDiv;
}

function createTitleElement(title) {
    var titleDiv = document.createElement('div');
    titleDiv.className = titleClass;

    var h2 = document.createElement('h2');
    h2.className = titleH2Class;
    h2.innerHTML = title;

    titleDiv.appendChild(h2);

    return titleDiv;
}

function createTextElement(text) {
    var textDiv = document.createElement('div');
    textDiv.className = textClass;
    textDiv.innerHTML = text;

    return textDiv;
}

function createActionElement(buttons) {
    var actionDiv = document.createElement('div');
    actionDiv.className = actionClass;

    $.each(buttons, function(key, ref) {
        var link = document.createElement('a');
        link.className = actionLinkClass;
        link.href = ref;
        link.innerHTML = key;

        actionDiv.appendChild(link);
    });

    return actionDiv;
}