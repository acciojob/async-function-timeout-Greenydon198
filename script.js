//your JS code here. If required.
let text = document.getElementById("text");
let delay = document.getElementById("delay");
let btn = document.getElementById("btn");
let op = document.getElementById("output")
btn.addEventListener("click",out);
async function out(){
	await new Promise((resolve)=>{
		setTimeout(()=>{resolve()},Number(delay.value));
		// resolve();
		// console.log(text.value,delay.value,`${text.value}`);
	});
	op.innerText = text.value;
}