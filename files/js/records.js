function onclickrec(id) {
		location='https://garmonyvkusa.com/recept.html?tid=' + id;
	}
	    	checkwindow();
	window.addEventListener('resize', checkwindow);

	function checkwindow(){
		var w = window.innerWidth;
		var h = window.innerHeight;
    if (document.getElementById("iframe")==null) {}
    else {
    document.getElementById('iframe').setAttribute("style", "height: " + (document.getElementById("iframe").offsetWidth * 0.5625 - 9).toString() + "px;");
    }
		if (h<500) {
				document.getElementById("computer").setAttribute("hidden", "");
				document.getElementById("mobile").removeAttribute("hidden");
		}
		else if (w<1220) {
			document.getElementById("computer").setAttribute("hidden", "");
			document.getElementById("mobile").removeAttribute("hidden");
		}
		else {
			document.getElementById("computer").removeAttribute("hidden");
			document.getElementById("mobile").setAttribute("hidden", "");
		}

}