/*

Форма ввода логина и пароля, вместе с кнопкой входа (Login/Войти). 
Все это сделайте в компоненте Login, который будет прописан в отдельном файле Login.js

*/

import React from 'react';
// Или так: import React, {Component} from 'react';
// > class App extends Component
//import ReactDOM from 'react-dom';

// export class Developer {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     displayName () {
//         console.log(this.name);
//     }

//     displayAge() {
//         console.log(this.age);
//     }
// }

import Weather from './Weather';

const newWeather = new Weather();
//let result = newWeather.getCurrentWeather();
//console.log(result);
//newWeather.getCurrentWeather().then(response => console.log(response)); // Почему не получается вызвать? Потому что не промис возвращается?

// [КОСТЫЛЬ START] Попытка решить костылем
var result = {}; // А тут снова данные не обновятся т.к. асинхронщина и я чего то пока не знаю
newWeather.getCurrentWeatherSync().then(response => {
    return response.json();
    //console.log(result);
}).then(function (json) {
    let temp, humidity, pressure, description;

    temp = json.main.temp; // celsius
    humidity = json.main.humidity; // %
    pressure = Number((json.main.pressure / 1.33322387415).toFixed(2)); // hPa
    if (json.weather[0]) {
        description = json.weather[0].description;
    } else {
        description = '';
    }

    result.temp = temp;
    result.humidity = humidity;
    result.pressure = pressure;
    result.description = description;
    console.log(result);
    return result;

}).catch(function (ex) { 
    console.log('Ошибка получения данных', ex);
});
// [КОСТЫЛЬ END]

// Создаем компонент Login
export default class Login extends React.Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="InputLogin">Ваш логин</label>
                    <input type="email" className="form-control" id="InputLogin" aria-describedby="emailHelp" placeholder="Введите ваш логин" />
                    <small id="emailHelp" className="form-text text-muted">В качестве логина используйте ваш e-mail</small>
                </div>
                <div className="form-group">
                    <label htmlFor="InputPassword">Ваш пароль</label>
                    <input type="password" className="form-control" id="InputPassword" placeholder="Введите ваш пароль" />
                </div>
                <button type="submit" className="btn btn-primary">Отправить</button>
                {/* ниже просто костыль с попыткой вывести данные */}
                <div><br></br>Погода: {result.temp}</div>
            </form>
        );
    }
}