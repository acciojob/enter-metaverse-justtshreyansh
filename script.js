//your JS code here. If required.
const btn = document.querySelector("#enterBtn");
const p = document.querySelector("#status");
function eventHandler(){
	
	p.innerHTML = "<h1>Entered Metaverse</h1>";
	
	
	
}
btn.addEventListener('click',eventHandler);