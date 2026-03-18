//your JS code here. If required.
let container=document.querySelector(".container");
for(let i=1 ;i<=800;i++){
	let box=document.createElement("div");
	box.addEventListener("mouseover",(e)=>{
		let rc=()=>{return Math.floor(Math.random()*256)};
		box.style.backgroundColor=`rgb(${rc()},${rc()},${rc()})`
	})
	box.addEventListener("mouseout",(e)=>{
		box.style.transition="1s";
		box.style.backgroundColor=`rgb(${29},${29},${29})`;
	})
	
	box.className="square";
	container.append(box);
}

