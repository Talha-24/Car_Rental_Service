//Write a programme which prints the location from 2000 to 2025 using loops


let decade=1980;
let body=document.querySelector("body");
let select=document.createElement("select");
body.append(select);
let date=new Date();
let count=0;
for(let i=1980; i<date.getFullYear(); i++){
     decade = decade +1;
     console.log(decade);
     let p=document.createElement("option");
     p.setAttribute("value",decade);
     p.setAttribute("key",count);
     count++;
     p.innerHTML = decade;
     select.append(p);
}