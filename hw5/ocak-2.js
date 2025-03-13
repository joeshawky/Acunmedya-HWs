// Fonksiyonlar ve Diziler (JavaScript)
// 	•	İki sayıyı toplayan bir fonksiyon yaz. (Hem normal fonksiyon hem de arrow function olarak yaz)
// 	•	Bir dizinin en büyük elemanını bulan fonksiyon yaz.
// 	•	Bir dizide belirli bir elemanın olup olmadığını bulan fonksiyon yaz.


const questionOne = () => {

    function sum(a, b){
        return a + b;
    }
    
    const sum2 = (a, b) => a + b;
    

    a = sum(5, 8);
    b = sum2(5, 8);
    console.log(`normal function sum: ${a}`);
    console.log(`arrow function sum: ${b}`);
};

const questionTwo = (arr) => {
    
    if (arr.length === 0) {
        console.log(`Empty Array`);
        return;
    }
    
    let highestNumber = null;
    for (const num of arr) {
        if (!highestNumber) 
            highestNumber = num;

        if (num > highestNumber)
            highestNumber = num;
    }

    console.log(`Highest number is ${highestNumber}`);
};

const questionThree = (arr, number) => {
    for (const num of arr) {
        if (number === num){
            console.log(`${number} was found!`);
            return;
        } 
    }
    console.log(`${number} was not found!`);
};


questionOne();

const arr = [-5, 2, 3, 4, 2, 1, 10, 25, 8];

questionTwo(arr);


let num = 1;
let num2 = 7;
questionThree(arr, num);
questionThree(arr, num2);
