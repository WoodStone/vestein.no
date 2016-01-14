/**
 * Created by vestein on 14.01.2016.
 */

$(function() {
    $.getJSON("projects/projects.json", function(data) {
        $.each( data, function(key, val) {
            $('#projects').append(createCell(key, val));
        });
    });
});


function createCell(key, cardData) {
    var cellDiv = document.createElement('div');
    cellDiv.className = 'mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone';

    cellDiv.appendChild(createCard(key, cardData));

    return cellDiv;
}

function createCard(key, cardData) {
    var cardDiv = document.createElement('div');
    cardDiv.className = 'mdl-card von-card mdl-shadow--2dp';

    cardDiv.appendChild(createMediaElement(key, cardData.media));
    cardDiv.appendChild(createTitleElement(cardData.title));
    cardDiv.appendChild(createTextElement(cardData.text));
    cardDiv.appendChild(createActionElement(cardData.buttons));

    return cardDiv;
}

function createMediaElement(key, media) {
    var mediaDiv = document.createElement('div');

    mediaDiv.className = 'mdl-card__media';
    mediaDiv.id = key;
    mediaDiv.style.backgroundImage = 'url("images/' + media + '")';
    mediaDiv.style.backgroundPosition = 'center';
    mediaDiv.style.backgroundSize = 'cover';

    return mediaDiv;
}

function createTitleElement(title) {
    var titleDiv = document.createElement('div');
    titleDiv.className = 'mdl-card__title';

    var h2 = document.createElement('h2');
    h2.className = 'mdl-card__title-text';
    h2.innerHTML = title;

    titleDiv.appendChild(h2);

    return titleDiv;
}

function createTextElement(text) {
    var textDiv = document.createElement('div');
    textDiv.className = 'mdl-card__supporting-text';
    textDiv.innerHTML = text;

    return textDiv;
}

function createActionElement(buttons) {
    var actionDiv = document.createElement('div');
    actionDiv.className = 'mdl-card__actions mdl-card--border';

    $.each(buttons, function(key, ref) {
        var link = document.createElement('a');
        link.className = 'mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect';
        link.href = ref;
        link.innerHTML = key;

        actionDiv.appendChild(link);
    });

    return actionDiv;
}