console.log('Loaded!');

var img = document.getElementById('madi');
var marginLeft=0;
function moveRight () {
    marginLeft = marginLeft +10;
    img.style.marginLeft = marginLeft + 'px';
    if(marginLeft>800) {
        marginLeft=-400;
    }
}
img.onclick = function() {
  var interval = setInterval(moveRight, 100);
};