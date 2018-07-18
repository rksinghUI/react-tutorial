class Employee {
    constructor (name, age) {
        this.Name = name;
        this.Age = age; 
    }

    displayEmployee (){
        console.log('Employee Name='+ this.Name);
        console.log('Employee Name='+ this.Age);
    }
}

class AccEmployee extends Employee {
    constructor (name, age, sapNum) {
        super(name, age);
        this.SapNum = sapNum;
    }

    displayEmployeeName (){
        console.log('Employee Name='+ this.Name);
        console.log('Employee Name='+ this.Age);
        console.log('Employee Name='+ this.SapNum);
    }
}

let obj = new AccEmployee('Mack', 27, '12345');
obj.displayEmployeeName();


let result = function() {
    return ([(2+7), (2*3)]);
}

let [sumOfNumber, MultOfNumber] = result();
console.log('Sum = ' + sumOfNumber);
console.log('Mul = ' + MultOfNumber);