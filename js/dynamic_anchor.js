'use strict'
window.document.addEventListener('DOMContentLoaded', function() {
  var elem = document.getElementById('scroller');
  var start = elem.getBoundingClientRect().top;
  var header = document.getElementById('header');
  var DHTML = function() {
    var ua = navigator.userAgent.toLowerCase();
    var dom = {
      body: document.body,
      elem: document.documentElement,
      scrl: document.scrollingElement
    }
    return ua.indexOf('chrome') != -1 ? dom.scrl
    : ua.indexOf('safari') != -1 ? dom.body
    : ua.indexOf('edge') != -1 ? dom.body
    : ua.indexOf('msie') != -1 ? dom.body
    : ua.indexOf('firefox') != -1 ? dom.elem
    : ua.indexOf('opera') != -1 ? dom.body
    : ua.indexOf('gecko') != -1 ? dom.elem
    : ua.indexOf('ie') != -1 ? dom.elem : dom.body;
  }
  var end = -90;
  DHTML().id = 'top';

  function move() {
    elem.href = '#top';
    elem.classList.add('active');
    header.classList.add('active');
  }
  function remove() {
    elem.href = '#tg';
    elem.classList.remove('active');
    header.classList.remove('active');
  }
  var scroll = function() {
    var pos = elem.getBoundingClientRect().top;
    var from = DHTML().scrollTop;
    if (from > 100) {
      move();
    } else if (from < 100) {
      remove();
    }
  }
  document.addEventListener('scroll', scroll);
});
