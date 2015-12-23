/**
 * Created by vestein on 23.12.2015.
 */

var requestAnimationFrame =
    window.requestAnimtaionFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

var transforms = [
    'transform',
    'msTransform',
    'webkitTransform',
    'mozTransform',
    'oTransform'];

var transformProperty;
var snowflakes = [];
var browserWidth;
var browserHeight;
var nSnowflakes = 40;
var resetPosition = false;

window.addEventListener('load', init);

function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != "undefined") {
            return properties[i];
        }
    }
    return null;
}

function setTranslate3DTransform(element, xPosition, yPosition) {
    var val = "translate3d(" + xPosition + "px, " + yPosition + "px" + ", 0)";
    element.style[transformProperty] = val;
}

function getPosition(offset, size) {
    return Math.round(-1*offset + Math.random() * (size+2*offset));
}

function setResetFlag() {
    resetPosition = true;
}

function init() {
    transformProperty = getSupportedPropertyName(transforms);
    window.addEventListener('DOMContentLoaded', generateSnowflakes, false);
    window.addEventListener('resize', setResetFlag, false);
    generateSnowflakes();
}

function SnowFlake(element, xPos, yPos, speed) {
    this.element = element;
    this.xPos = xPos;
    this.yPos = yPos;
    this.speed = speed;
    this.counter = 0;
    this.sign = Math.random() < 0.5 ? 1 : -1;
    this.element.style.opacity = 0.1 + Math.random();
    this.element.style.fontSize = 12 + Math.random() * 30 + "px";
}

SnowFlake.prototype.update = function() {
    this.counter += this.speed / 5000;
    this.xPos += this.sign * this.speed * Math.cos(this.counter) / 40;
    this.yPos += Math.sin(this.counter) / 40 + this.speed /30;
    setTranslate3DTransform(this.element, Math.round(this.xPos), Math.round(this.yPos));
    this.yPos = this.yPos > browserHeight ? -50 : this.yPos;
};

function generateSnowflakes() {

    var originalSnowflake = document.createElement('p');
    originalSnowflake.className = 'snowflake';
    originalSnowflake.innerHTML = '*';

    var container = document.getElementsByTagName('body')[0];
    container.appendChild(originalSnowflake);

    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;

    for (var i = 0; i < nSnowflakes; i++) {
        var clone = originalSnowflake.cloneNode(true);
        container.appendChild(clone);
        var xPos = getPosition(50, browserWidth);
        var yPos = getPosition(50, browserHeight);
        var speed = 5 + Math.random() * 40;
        var snowflake = new SnowFlake(clone, xPos, yPos, speed);
        snowflakes.push(snowflake);
    }

    container.removeChild(originalSnowflake);
    moveSnowflakes();

}

function moveSnowflakes() {
    for (var i = 0; i < snowflakes.length; i++) {
        var snowflake = snowflakes[i];
        snowflake.update();
    }
    if (resetPosition) {
        browserWidth = document.documentElement.clientWidth;
        browserHeight = document.documentElement.clientHeight;
        for (var i = 0; i < snowflakes.length; i++) {
            var snowflake = snowflakes[i];

            snowflake.xPos = getPosition(50, browserWidth);
            snowflake.yPos = getPosition(50, browserHeight);
        }
        resetPosition = false;
    }
    requestAnimationFrame(moveSnowflakes);
}
