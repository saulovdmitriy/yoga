// require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill')

window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js'),
        sendform = require('./parts/sendform.js'),
        slider = require('./parts/slider.js'),
        calc = require('./parts/calc.js');

    tabs();
    timer();
    modal();
    sendform();
    slider();
    calc();
});