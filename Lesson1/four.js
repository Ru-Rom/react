function *genModel() {
    let user = {
        name: '',
        sname: ''
    };
    user.name = prompt('Ваше имя: ');
    yield user.name;
    user.sname = prompt('Ваша фамилия: ');
    yield user.sname;
    return user;
}

const questionaryModel = genModel();

const uName = questionaryModel.next();
//console.log(uName);

const sName = questionaryModel.next();
//console.log(sName);

const isDone = questionaryModel.next();
console.log(isDone);
console.log('Ваше имя: ' + isDone.value.name);
console.log('Ваша фамилия: ' + isDone.value.sname);