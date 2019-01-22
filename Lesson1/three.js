/*

3. Необходимо написать иерархию классов вида:
Human -> Employee -> Developer
Human -> Employee -> Manager

Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а также методы по удалению/добавлению разработчиков.
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется ввиду возможность назначить другого менеджера).

У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)
У класса Employee должны присутствовать параметры: salary (число), department (строка)
В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
В классе Employee должен быть реализовать такой же метод (displayInfo), который вызывает базовый метод и дополняет его параметрами из экземпляра Employee
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a.

*/

// Иерархия классов

class Human {
    constructor(name, age, birthdate) {
        this.name = name;
        this.age = age;
        this.birthdate = birthdate;
    }

    displayInfo() {
        console.log(this.name, this.age, this.birthdate);
    }
}

const newHuman = new Human('Alice', 22, '02.02.2000');
newHuman.displayInfo();

class Employee extends Human {
    constructor(name, age, birthdate, salary, department) {
        super(name, age, birthdate);
        this.salary = salary;
        this.department = department;
    }

    displayInfo() {
        super.displayInfo();
        console.log(this.salary, this.department);
    }
}

const newEmployee = new Employee('Alex', 28, '02.02.1994', 60000, 'frontend');
newEmployee.displayInfo();

class Manager extends Employee {
    constructor(name, age, birthdate, salary, department) {
        super();
        this.developers = [];
    }

    addDeveloper(developer) {
        this.developers.push(developer);
    }

    removeDeveloper(developer) {

    }
}

class Developer extends Employee {
    constructor(name, age, birthdate, salary, department) {
        super();
    }

    changeManager(manager) {

    }

}

// Проверка работы
const managerOne = new Manager('Alex Manager', 28, '02.02.1994', 60000, 'managing');
const managerTwo = new Manager('Hun Manager', 32, '02.02.1990', 61000, 'managing');

const developerOne = new Developer('Alex Developer', 26, '02.02.1996', 80000, 'frontend');
const developerTwo = new Developer('Ali Developer', 32, '02.02.1990', 120000, 'frontend');

//console.log();