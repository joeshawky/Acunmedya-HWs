// Question 1
// 1 ile 50 arasındaki çift sayıların toplamını hesaplayan bir program yazın.

console.log("Question 1:");

let start:number = 2
let end:number = 50

let sum:number = 0
for(let i = start; i <= end; i += 2)    
    sum += i

console.log(`sum: ${sum}`);



// Question 2
// 7 sayısının 1'den 10'a kadar çarpım tablosunu yazdıran bir program yazın.

console.log("\nQuestion 2:");

let num:number = 7

for(let i = 1; i <= 10; i++)
{
    let result:number = num * i;
    console.log(`${num} * ${i} = ${result}`);
}
