// let numbers = [10,20,30,40];
// for(let i=0;i<numbers.length;i++)
// {
//     console.log(numbers[i]);
// }

// let numbers = [10,20,30,40];
// numbers.forEach((num) =>
// {
//     console.log(num);
// });


// let numbers = [10,20,30,40];
// for(let num of numbers)
// {
//     console.log(num);
// }

   


// let numbers = [10,20,30,40];
// for(let num in numbers)
// {
//     console.log(numbers[num]);
// }

// const student = {
//   name: "Maha",
//   age: 21,
//   grade: "A"
// };

// for(let data in student)
// {
//     console.log(student[data]);
// }

// const numbers = [50, 60, 70, 80];

// const result = numbers.map((num) => {
//     return num - 10;
// });

// console.log(result);


// const values = [5, 12, 8, 25, 3, 15];

// const filteredValues = values.filter((value) => {
//   return value > 10;
// });


const nums = [5, 10, 15, 20];

const total = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(total);