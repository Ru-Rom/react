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

// Создаем компонент Login
export default class Login extends React.Component {
    constructor () {
        super();
        this.weatherData = {
            description: 'description нет данных',
            temperature: 'temperature нет данных',
            humidity: 'humidity нет данных',
            pressure: 'pressure нет данных'
        };

        this.state = {
            description: 'нет данных',
            temperature: 'нет данных',
            humidity: 'нет данных',
            pressure: 'нет данных'
        };
        
        //console.log(this.weatherData);
        //console.log(this.state.description);
       
    }

    componentDidMount () {
        newWeather.getCurrentWeather().then(response => {
            console.log('2. в getWeather: ' + response.description);
            this.setState({ // Вызывается повторный render()
                description: response.description,
                temperature: response.temp,
                humidity: response.humidity,
                pressure: response.pressure
            });
        });
        
    }
    // async getWeather() {       
    //     await newWeather.getComment().then(response => {
    //         console.log('2. в getWeather: ' + response.email);
    //         this.result = response.email;
    //     });
    // }
    

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
                <div>
                    <br/>Погода: {this.state.description}, 
                    <br/>Температура: {this.state.temperature},
                    <br/>Влажность: {this.state.humidity},
                    <br/>Давление: {this.state.pressure}
                </div>
            </form>
        );
    }
}