//your JS code here. If required.
const btn = document.querySelector("#enterBtn");
const p = document.querySelector("#status");
function eventHandler(){
	const h1 = document.createElement('h1');
	h1.innerText = p.innerText;
	h1.id = p.id;
	p.parentNode.replaceChild(h1,p);
}
btn.addEventListener('click',eventHandler);