/*
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
  var interval = setInterval(moveRight, 50);
};*/

var button = document.getElementById('counter');
var counter=0;
button.onclick = function() {
    
    var request = XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if(request.readystate === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET', 'http://http://tijothomas11.imad.hasura-app.io', true);
    request.send(null);
};