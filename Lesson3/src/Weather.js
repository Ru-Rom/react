/* eslint-disable indent */
//import React from 'react';

export default class Weather {
    constructor() {
        this.fetchURL = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow,ru&lang=ru&units=metric&APPID=664f14ad10ba07afd39b7103b1a1c196';
    }

    getCurrentWeather() { // Не выходит получить данные отсюда в модуле Login, получаю undefined(т.к. функция не успевает вернуть результат) либо ошибку с then т.к. похоже в конце не промис же выдаю, но пока я только приближаюсь к пониманию "что почем" здесь
        fetch(this.fetchURL)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                let temp, humidity, pressure, description, result = {};

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

                return result; // При вызове из Menu.js без then(this.txtCity): 
                               // let asdasd = newWeather.getCurrentWeather();
                               // console.log(asdasd);
                               // будет undefined, почему блин? Потому что не ждет завершения работы функции, а как вызвать функцию и дождаться ее полного выполнения?

            }).then(this.txtCity).catch(function (ex) { // вызывается txtCity передавая в нее result(просто что бы увидеть что данные хоть как то можно юзать вне функции)
                console.log('Ошибка получения данных', ex);
            });
    }

    getCurrentWeatherSync () { // Костыль по сути что бы хоть так реализовать задумку
        let data = fetch(this.fetchURL);
        return data;
    }
    

    txtCity(result) {
        //console.log(result);
        return result;
    }


}