/*

2. В отдельном js-файле создайте класс Developer (достаточно прописать только метод constructor’a 
    и присвоить пару свойств), сделайте его экспортируемым и подключите в другой js-файл

*/

export default class Developer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayName () {
        console.log(this.name);
    }

    displayAge() {
        console.log(this.age);
    }
}
