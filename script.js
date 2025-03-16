const container = document.querySelector("#container");

console.log(`Height: ${container.offsetHeight}`);

for(let i=0;i<16;i++){
    let r = document.createElement("div");
    r.style.border = "1px solid rgba(155, 154, 154, 0.253)";
    r.style.width="100%";
    r.style.height="100%";
    container.appendChild(r);
    for(let j=0; j<16;j++){
        r.setAttribute("style","display:flex; flex-direction:row; justify-content:space-evenly")
        let c = document.createElement("div");
        c.classList.add("square");
        // c.textContent="A";
        r.appendChild(c);
    }
}
