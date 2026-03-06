function num(n) {
  let num = n;
  if (num % 2 === 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is Even`);
    }
  }
}

num(24);

const inp = document.querySelector("input");

inp.addEventListener("input", function (d) {
  if (d.data !== null) {
    console.log(d.data);
  }
});
const sel = document.querySelector("select");
const h3 = document.querySelector("h3");
sel.addEventListener("change", function (e) {
  h3.textContent = `${e.target.value} Selected`;
});

// / Math functions and problems:
//   Math.abs()  ea negative ko positive me convert krta hy
console.log(Math.abs(-23478));

//  Math.ceil() ea point num ko next num me conver krta hy
console.log(Math.ceil(10.00000001)); //output 11 ay ga

//  Math.floor()  ea point num ko khatam krta hy num badhta nai hy
console.log(Math.floor(10.9999999)); //output 10 ay ga

//  Math.round() ea  ceil or floor sy milkr bana hy agr point num .5 sy km hy tu floor kry ga agr .5 ya is sy ziada hy tu ceil kry ga
console.log(Math.round(10.5)); //outpu 11 ay ga
console.log(Math.round(10.4)); //outpu 10 ay ga

//  Math.trunc() ea point numbers ko hide krdeta hy
console.log(Math.trunc(11.76675645645453)); //outpu 11 ay ga

//  Math.pow() ea 2 value accept krta ,  kis num ko kitni bar power krna hy
console.log(Math.pow(2, 4)); //output 16 ay ga

//  Math.max()  ea values me sy jo sb sy bada hy wo nikal kr deta hy
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 20)); //output 20 ay ga

//  Math.random() ea 0 sy 1 k bich random num nikal kr deta hy , 1kabhi nai ay ga , 0 aa skta hy
console.log(Math.random()); //output hr bar change milta hy اتفاق  sy same bhi aa skta hy

//  Math.tofixed() kitny point num chaea number k bad
console.log(Math.random().toFixed(2)); //output string ay ga , or num+ 2point num ay ga

//  Compound Interest ka standard formula

// let p = prompt("Enter principle"); //10000
// let r = prompt("Enter rate of interest"); // 5
// let t = prompt("Enter time"); //3
// console.log((p * Math.pow(1 + r / 100, t) - p).toFixed(2));

//   OTP
console.log(Math.floor(Math.random() * 9000 + 1000)); //  ea kabh kabhi 4 digit sy km ho skta hy is ko set krny k lea +1000 kia hy  , math.floor is lea ta k .9 ko bhi num bada na dy km wala dy 9999.9 ko 9999 output ay

//   Root of s * (s-a) * (s-b) * (s-c)

//    pi r**

///////////////////////////////percentage /////////////////////////////
//  kisi bhi num ko 100 hassy krna or 1 hissy ki value ko nikalna , is ka formula hy --------> (value * percent) / 100
// hint 80/10 tu 80 sy aik digit km hoga 8 bachy ga 
//  84/10 8.4

function percent(value, percent) {
  return (value * percent) / 100;
}
console.log(percent(100, 20));

////////////////// percent Trick 2//////////////////////
//  ab value kitny percent hy kisi num ka jesy k 20 kitny percent hy 80 k 
//  matlb k hm 2 num ko compare kr rahy hen 
//   20 or 80  hm ko find krna hy percent first ka secound sy 
//  (value * x ) /100 = 20 find x -----------> x (first*100)/value

function percent(value, percent) {
  return (percent * 100) / value;
}
console.log(`${percent(80, 20)}%`);


////////////////////////////////percent Trick 3////////////////
//  hmary pass asl value nai hen lekin percent ki num hen k 40% hoty hen 50 
//  is ko solve krny k lea hn jo percent ki value hy us ko 100 sy multyplay kren gy phr divide by percent
//  x = (50*100)/40 
function percent(value, percent) {
  return (value * 100) / percent;
}
console.log(percent(50, 40));

/////////////////////////////////////////percent Trick 4////////////////
// increasing & decreasing ab hm ko aik value ki kuch percent us me add krna hy , jesy k 80 me 20 % increase kro mtlb add kro 80 ka 20%
//  sb sy pehly value ka percent nikaly gy 

function percent(value, percent) {
  return ((value * percent) / 100)+value; // jo bhi jwab ay ga percent ka us ko hm asl value me add kren gy isi lea  +value kr dia hy 
  value * (1+percent/100)
}
console.log(percent(200, 30));
