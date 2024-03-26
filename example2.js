const NEWYEAR = 20;
const BLACKFRIDAY = 30;
const SUMMERSALE = 15;


let contribution = 2000;
let units = 5;
let action = BLACKFRIDAY;
let discount = 0;
let toPay = 0 ;
let unitsDiscount = 0;
let additionalDiscount = 0;

if(action == NEWYEAR) {
    console.log ("yor discount ", NEWYEAR + "%") ;
    console.log (discount =+ NEWYEAR)
}
else {discount + 5}


if(action == BLACKFRIDAY) {
    console.log ("yor discount ", BLACKFRIDAY + "%");
    console.log (discount =+ BLACKFRIDAY)
}
else { discount + 5 }
if(action == SUMMERSALE) {
    console.log ("yor discount ", SUMMERSALE + "%");
    console.log (discount =+ SUMMERSALE)
}
else {discount + 5}


console.log (toPay = contribution * ((100 - (discount + unitsDiscount + additionalDiscount ))/100) )


if (toPay >  1000) {
    additionalDiscount = 10;
   console.log ("yor discount ", additionalDiscount + "%");
}
else  {0}


if (units >= 3) {
    unitsDiscount = 5 ;
    console.log ("yor discount " , unitsDiscount + "%")
}
else {0}

console.log (toPay = contribution * ((100 - (discount + unitsDiscount + additionalDiscount ))/100) )

console.log ("Загальна знижка", additionalDiscount + discount + unitsDiscount + "%")
