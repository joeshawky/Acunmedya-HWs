// TypeScript Temelleri
// 	•	TypeScript kurulumu yap (npm install -g typescript).
// 	•	number, string, boolean, array, tuple, enum, any, void gibi veri türlerine örnekler yaz.
// 	•	Bir interface ve bir obje oluştur, ardından bu interface’i kullanarak TypeScript’in nasıl güvenli tip kontrolü yaptığını göster.


const questionOne = () => {
    const number:number = 5;
    const name2:string = "Joe";
    const state:boolean = true;
    const arr:number[] = [1, 2, 3];
    
    const tuple: [number, boolean, string] = [2, false, "yusuf"];
    
    enum priority {
        LOW,
        MEDIUM,
        HIGH
    }
    
    const any:any = {};
    
    function print() : void {
        console.log("print function");
    }
}

const questionTwo = () => {
    interface Person {
        name:string,
        age:number
    }

    const displayUser = (person:Person) => {
        console.log(`${person.name} - ${person.age}`);
    }

    const p1:Person = {name:"joe", age:22};
    const p2:Person = {name:"nuri", age:19};

    displayUser(p1);
    displayUser(p2)
}

questionOne();
questionTwo();

