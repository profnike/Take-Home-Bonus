let age=prompt("Type-in your age group\n(a)Age 18-20(b)Age 21-30 (c)Age 31-50")
let Salary=prompt("Type-in your monthly salary ")
Salary=+(Salary.replace(",",""))
function calc(){
let perc;

if (age==="a"){perc=((5/100)*Salary)+Salary}
 if (age==="b"){perc=((10/100)*Salary)+Salary}
 if (age==="c"){perc=((20/100)*Salary)+Salary}
 alert("Your take-home bonus is" + " " +perc)
return perc
}
calc()