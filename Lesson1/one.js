/* 
1. Написать функцию loop, которая будет принимать параметры: 
times (значение по умолчанию = 0), 
callback (значение по умолчанию = null) 
и будет в цикле (times раз), вызывать функцию callback. 
Если функция не передана, то цикл не должен отрабатывать ни разу. 
Покажите применение этой функции
*/


const loop = (times = 0, callback = null) => {
    let err = 'Вы не передали функцию!';
    if (typeof callback === 'function') {
        for (i = 0; i < times; i++) {
            callback(times);
        }
    } else {
        console.log(err);
        return err;
    }
};

function exampleOne(n) {
    console.log('Функция выполнена: ' + n + ' раз;');
}

loop(8, exampleOne);