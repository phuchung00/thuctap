function change(){
	
	var button = document.getElementById('btn1');
	button.addEventListener("click", check);
}
function check(){
	document.getElementById("after_submit").style.visibility = "visible";
	
}