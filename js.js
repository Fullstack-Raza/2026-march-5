

function num(n){
let num = n;
if(num%2 === 0){
    console.log(`${num} is Even`)
}else{
    console.log(`${num} is Odd`)

}

for(let i = 1 ; i <=num ; i++){
   
    if(i%2 === 0){
    console.log(`${i} is Even`)
}
}
}

// num(24);

const inp = document.querySelector("input");

inp.addEventListener("input",function(d){
  if(d.data !== null){
    console.log(d.data)
  }

})
const sel = document.querySelector("select");
const h3 =document.querySelector("h3")
sel.addEventListener("change",function(e){
    
    h3.textContent = `${e.target.value} Selected`
})
