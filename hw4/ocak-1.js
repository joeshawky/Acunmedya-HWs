// Koşullar ve Döngüler (JavaScript)
// 	•	Bir sayı al ve bunun pozitif mi, negatif mi, yoksa sıfır mı olduğunu ekrana yazdır.
// 	•	for, while ve do-while döngülerini kullanarak 1’den 10’a kadar olan sayıları ekrana yazdır.
// 	•	Kullanıcıdan alınan bir sayının asal olup olmadığını kontrol eden bir fonksiyon yaz.

// Not: Ödevlerimizi sadece öğrendiğimiz konu bazlı değil, araştırma uygulama olarakta geliştirmeniz bekleniyor.

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questionOne = () => {
  readline.question("Enter a number: ", (num) => {
    const number = parseInt(num);
    if (isNaN(number)) console.log("Invalid input!");
    else if (number < 0) console.log("Negative number");
    else if (number > 0) console.log("Positive number");
    else console.log("The number is 0");
    questionOne();
  });
};

const questionTwo = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(`for - i: ${i}`);
  }

  let i = 1;
  while (i <= 10) {
    console.log(`while - i: ${i}`);
    i++;
  }

  i = 1;
  do {
    console.log(`do while - i: ${i}`);
    i++;
  } while (i <= 10);
};

const questionThree = () => {
  const prime = (n) => {
    if (n in [0, 1])
      return false

    for(let i = 2; i < n; i++){
      if (n % i == 0) 
        return false
    
    return true;
  }
}



  readline.question("Enter a number: ", (num) => {
    const number = parseInt(num);
    if (isNaN(number) || number < 0) console.log("Number is not prime!");

    const result = prime(number);
    if (result)
      console.log("Number is prime!");
    else
      console.log("Number is not prime!");
    questionThree();
  });
};

// questionOne();

// questionTwo();

// questionThree();
