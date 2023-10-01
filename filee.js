var start = document.querySelector('.innerb21');
var stop = document.querySelector('.innerb22');
var reset = document.querySelector('.innerb23');
var milis = document.querySelector('#milis');
var sec = document.querySelector('#sec');
var min = document.querySelector('#min');
start.addEventListener('click', chala);


stop.addEventListener('click', ruka);
reset.addEventListener('click', firsuru);
var interval;
var value = 0;


function chala(){
	if(value==0){
		value=1;
		startit();
}   }
function startit(){
	interval = setInterval(change, 10);
}
function change(){
	let val = parseInt(milis.innerHTML)+1;
	let vlu = pad(val);
	if(val==100){
		chngvl();
		vlu = pad(0);
	}	
	

	milis.innerHTML = vlu;
	// if(parseInt(milis.innerHTML)>=10)clearInterval(interval);
}

function chngvl(){
	let val = parseInt(sec.innerHTML)+1;
	let vlu = pad(val);
	if(val==60){
		chnchn();
		vlu = pad(0);
	}
	sec.innerHTML = vlu;

	
}
function chnchn(){
	let val = parseInt(min.innerHTML)+1;
	let vlu = pad(val);
	if(val==60)clearInterval(interval);
	min.innerHTML = vlu;

}
function pad(d){
	return(d<10)?'0'+d.toString():d.toString();
}
function ruka(){
	if(parseInt(min.innerHTML)<60){
		clearInterval(interval);
		value=0;
	}
	
	
}
function firsuru(){
	clearInterval(interval);
	value = 0;
	min.innerHTML = "00";
	sec.innerHTML = "00";
	milis.innerHTML = "00";


}



