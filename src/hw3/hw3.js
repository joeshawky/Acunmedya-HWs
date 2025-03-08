function let_const_var_differences()
{
    // First difference: Scope definition
    {
        let name1 = "Ahmet";
        const name2 = "Muhammet";
        var name3 = "Joe";
    }

    // console.log(name1); // This gives an error because 'let' can only declare a variable for the local scope.
    // console.log(name2); // This gives an error because 'const' can only declare a variable for the local scope.
    console.log(name3); // This works fine because 'var' can declare a variable for outer scopes.


    // Second difference: Variable redefinition
    let age1 = 10;
    const age2 = 15;
    var age3 = 20;

    age1 = 100; // 'let' allows variable to be redefined
    // age2 = 250; // 'const' does not allow variable to be redefined 
    age3 = 75; // 'var' allows variable to be redefinde

    console.log(age1);
    console.log(age2);
    console.log(age3);
}


function variable_types() 
{
    let name = "joe";
    let active = true;
    let state;
    let n = null;
    let obj = {};
    let arr = [1, 2, 3];
    function random() 
    {
        console.log("Hello World!");
    }

    console.log(typeof(name));
    console.log(typeof(active));
    console.log(typeof(state));
    console.log(typeof(n));
    console.log(typeof(obj));
    console.log(typeof(arr));
    console.log(typeof(random));
}

function prompt_alert()
{
    let number1 = prompt("Enter first number: ");
    let number2 = prompt("Enter second number: ");
    
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    const sum = number1 + number2;
    alert(`sum is: ${sum}`);
}

prompt_alert();