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

  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if(request.readyState === XMLHttpRequest.DONE) {
      if(request.status === 200) {
        var counter = request.responseText;
        var span = document.getElementById('count');
        span.innerHTML = counter.toString();
      }
    }
  };

  request.open('GET', '/counter', true);
  request.send(null);
};

//enter name

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i=0; i<names.length; i++) {
                    list += '<li>' +names[i]+ '</li>';

                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', '/submit-name?name=' + name, true);
    request.send(null);
};

//enter comment

var submit1 = document.getElementById('comment_btn');
submit1.onclick = function () {
  var request1 = new XMLHttpRequest();

  request1.onreadystatechange = function () {
    if(request1.readyState === XMLHttpRequest.DONE) {
      if(request1.status === 200) {
        var comments = request1.responseText;
        comments = JSON.parse(comments);
        var list = '';
        for (var i=0; i<comments.length; i++) {
          list += '<li>' +comments[i]+ '</li>';

        }
        var ul = document.getElementById('commentlist');
        ul.innerHTML = list;
      }
    }
  };
  var commentInput = document.getElementById('comment');
  var comment = commentInput.value;
  request.open('GET', '/submit-comment?comment=' + comment, true);
  request.send(null);
};

//Time code
function showDate() {
	var now = new Date();
	var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
	var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
	var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
	function fourdigits(number)
	{
		return (number < 1000) ? number + 1900 : number;
	}

	tnow=new Date();
	thour=now.getHours();
	tmin=now.getMinutes();
	tsec=now.getSeconds();
	var ap;

	if(thour==0){ap=" AM";thour=12;}
    else if(thour<12){ap=" AM";}
    else if(thour==12){ap=" PM";}
    else if(thour>12){ap=" PM";thour-=12;}


	if (tmin<=9) { tmin="0"+tmin; }
	if (tsec<=9) { tsec="0"+tsec; }

	today = days[now.getDay()] + ", " + date + " " + months[now.getMonth()] + ", " + (fourdigits(now.getYear()));
	time = thour + ":" + tmin +":"+ tsec+""+ap;
	document.getElementById("dateDiv").innerHTML = today;
	document.getElementById("timeDiv").innerHTML = time;
}
setInterval("showDate()", 1000);
