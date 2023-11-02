var Purchase_Price=145000;

var Downpayment= .02;
var Interest_Rate= .08 ;
var Mortgage_Years=30;
var Projected_Rent=1175;
var Rent_Increase_Rate=.03;
var Vacancy_Rate=.04;
var Taxes_and_insurance =.03;
var Property_Mgnt= .03;
var Appreciation_Rate= 0.0575;


var Annual_Rental_Income=[]
var length=Annual_Rental_Income.length-1
var Annual_Rental_Income_one=Projected_Rent*12;

Annual_Rental_Income.push(Annual_Rental_Income_one)

for (let i = 0; i < 12; i++) {
   
   Annual_Rental_Income.push((1+Rent_Increase_Rate)*Annual_Rental_Income[length]) 
  }
 console.log(Annual_Rental_Income,Annual_Rental_Income_one)