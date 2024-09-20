// let user = "Jnanesh"
// console.log(typeof user)
// console.log("Jnanesh here!!")
// let headder = document.createElement('h1')
// headder.textContent = "Welcome to TypeScript !!!"
// document.body.appendChild(headder)

// explicit annotations
let username: string = "Ram";
// implicit
let userpassword;
let address: string;
address = "Mangalore";
let userage: number = 24;
let salary: number = 23000000.6787;
username.toLowerCase();
let isActive: boolean = true;
console.log(typeof username);
console.log(typeof userpassword);
console.log(typeof userage);
let description = "user is programmer, email id is ";

let usermail = "abc@gmail.com";
let desc = `user is a programmer, id : ${usermail}`;
console.log(desc);

let networkdata: any = "This is a data";
console.log(networkdata);
let internetdata: any = {
  price: 6500,
  discountedprice: 45000,
};
console.log(internetdata.price);
console.log(internetdata.discountedprice);
console.log(typeof(internetdata))
console.log(typeof(networkdata))