//smallest and largest number

//let a = 10; 
// let b = 20;
// let c = 30;


// if (a>b && a>c)
// {
// console.log("largestnumber:",a);
// }
// else if (b>a && b>c)
// {
// console.log("largestnumber:",b);
// }
// else 
// {
// console.log("largestnumber:",c)
// }

// if (a<b && a<c)
// {
// console.log("smallestnumber:",a);
// }
// else if (b<a && b<c)
// {
// console.log("smallestnumber:",b);
// }
// else 
// {console.log("smallestnumber:",c);
// }

//second largest number

// let a = 25;
// let b = 60;
// let c = 40;

// if (a > b && a > c) 
// {
// if (b > c)
// {
// console.log("Second largest:", b);
// }
// else
// {
// console.log("Second largest:", c);
// }
// }
// else if (b > a && b > c) 
// {
// if (a > c)
// {
// console.log("Second largest:", a);
// }
// else
// {
// console.log("Second largest:", c);
// }
// }
// else 
// {
// if (a > b) 
// {
// console.log("Second largest:", a);
// }
// else
// {
// console.log("Second largest:", b);
// }
// }

//  let numbers=[10,20,30,40,50]

// numbers.forEach((num) =>
// {
// if(num >= 25)
// console.log(num);
// });

// let numbers = [10, 15, 30, 35, 55];
// numbers.forEach((num) => 
// {
// if (num % 2 === 0) 
// {
// console.log("Even number:", num);
// }
// else 
// {
// console.log("Odd number:", num);
// }
// });

// let numbers=[10,20,30,40,50];

// let count=0;

// numbers.forEach((num) =>
// {
// if (num%2 ===0)
// {
// count++;
// }
// else
// {
// console.log("oddnumbers:",num);
// }

// });
// console.log("Totalcount Even:",count);


// let numbers=[10,20,30,40,50]

// let count=0;

// numbers.forEach((num) =>
// {
// count++;
// });

// console.log(count);


// let age = 20;

// if (age >= 18) {
//     console.log("Eligible for driving licence");
// }
// else {
//     console.log("Not eligible for driving licence");
// }

// const checkNumber = (num) => 
// {
// if (num % 2 === 0)
// {
// return "Even Number";
// } else 
// {
// return "Odd Number";
// }
// };

// console.log(checkNumber(10));
// console.log(checkNumber(7));

// let numbers=[10,15,20,25,30,35,40]
// numbers.forEach((num) =>
// {
// if(num%2===0){
// console.log("evennumbers:",num);
// }
// });

let numbers =[10,20,30,40,50];
let sum=0;

numbers.forEach((num) =>
{
sum += num;
});
console.log("total:",sum);