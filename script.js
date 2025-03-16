const container = document.querySelector("#container");

console.log(`Height: ${container.offsetHeight}`);

function grid(n=16){
    container.replaceChildren();
    for(let i=0;i<n;i++){
        let r = document.createElement("div");
        r.style.border = "1px solid rgba(155, 154, 154, 0.253)";
        r.style.width="100%";
        r.style.height="100%";
        container.appendChild(r);
        r.setAttribute("style","display:flex; flex-direction:row; justify-content:space-evenly")
        for(let j=0; j<n;j++){        
            let c = document.createElement("div");
            c.classList.add("square");
            c.style.width = `calc(960px/${n})`;
            c.style.height = `calc(960px/${n})`;
            r.appendChild(c);
        }
    }
}


container.addEventListener('mouseover',(e)=>{
    const target = e.target;
    target.style.backgroundColor = "black";
})

const mod = document.querySelector("#size");
mod.addEventListener('click',()=>{
    let ns = prompt("Enter new grid size between 1 & 100.",16);

    if(!(ns<=100 && ns>=1)) alert("Invalid size! Kindly note that 1 <= size <= 100");
    else{
        grid(ns);
    }
});

grid();