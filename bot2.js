/*
bot2.js

Fills checkout form with appropriate values, edit var data with the
appropriate values

-MUST HAVE SIMILAR SYNTAX, IF YOU DONT THE VALUES WILL NOT FILL
-MUST MANUALLY CLICK TO CHECKOUT
*/

var data = {
	fullname: "Firstname Lastname",
	email: "email@gmail.com",
	tel: "1234567890",
	address1: "123 Change Lane",
	city: "Baltimore",
	postcode: "21228",
	country: "USA",
	state: "MD",
	number: "1234123412341234",
	expmonth: "12",
	expyear: "2020",         
};

function fill() {
	document.getElementById("order_billing_name").value = data.fullname;
	document.getElementById("order_email").value = data.email;
	document.getElementById("order_tel").value = data.tel;
	document.getElementById("bo").value = data.address1;
	document.getElementById("order_billing_city").value = data.city;
	document.getElementById("order_billing_zip").value = data.postcode;
	document.getElementById("order_billing_country").value = data.country;
	document.getElementById("order_billing_state").value = data.state;
	document.getElementById("credit_card_month").value = data.expmonth;
	document.getElementById("credit_card_year").value = data.expyear;
	document.querySelectorAll("input[type=text]")[6].value = data.number;
}

fill();
