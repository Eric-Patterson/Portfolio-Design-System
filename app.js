// Nav Bar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

var currentScrollpos = window.pageYOffset;
if(prevScrollpos > currentScrollpos) {
      document.getElementById("navbar").style.top = "0";
} else {
      document.getElementById("navbar").style.top = "-100px";
}

prevScrollpos = currentScrollpos;

}

// Button
var button = document.querySelectorAll('.workingButton');
for (var i = 0; i < button.length; i++) {
  button[i].onmousedown = function(e) {

    var x = (e.offsetX == undefined) ? e.layerX : e.offsetX;
    var y = (e.offsetY == undefined) ? e.layerY : e.offsetY;
    var effect = document.createElement('div');
    effect.className = 'effect';
    effect.style.top = y + 'px';
    effect.style.left = x + 'px';
    e.srcElement.appendChild(effect);
    setTimeout(function() {
      e.srcElement.removeChild(effect);
    }, 1100);
  }
}

// Social Media
var social = document.querySelectorAll('.social');
for (var i = 0; i < social.length; i++) {
      social[i].onmousedown = function(e) {

    var x = (e.offsetX == undefined) ? e.layerX : e.offsetX;
    var y = (e.offsetY == undefined) ? e.layerY : e.offsetY;
    var effect = document.createElement('div');
    effect.className = 'effect';
    effect.style.top = y + 'px';
    effect.style.left = x + 'px';
    e.srcElement.appendChild(effect);
    setTimeout(function() {
      e.srcElement.removeChild(effect);
    }, 1100);
  }
}