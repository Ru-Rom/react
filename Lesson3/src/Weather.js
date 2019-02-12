/* eslint-disable indent */
//import React from 'react';

export default class Weather {
    constructor() {
        this.fetchURL = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow,ru&lang=ru&units=metric&APPID=dba1869e915dbb2b3f09c9a721204321'; // 
        this.fetchCommentsURL = 'https://jsonplaceholder.typicode.com/comments/1';
    }

    getComment() {
        return fetch(this.fetchCommentsURL).then(function (response) {
            return response.json();
        }).then(function (json) {
            let result = {};
            result.id = json.id;
            result.email = json.email;
            return result;
            })
            .catch(function (ex) {
                console.log('Ошибка получения данных', ex);
            });
        }

        getCurrentWeather() { // Не выходит получить данные отсюда в модуле Login, получаю undefined(т.к. функция не успевает вернуть результат) либо ошибку с then т.к. похоже в конце не промис же выдаю, но пока я только приближаюсь к пониманию "что почем" здесь
            return fetch(this.fetchURL)
                .then(function (response) {
                    return response.json();
                }).then(function (json) {
                    let temp, humidity, pressure, description, result = {};

                    temp = json.main.temp; // celsius
                    humidity = json.main.humidity; // %
                    pressure = Number((json.main.pressure / 1.33322387415).toFixed(2)); // hPa > mm
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

                }).catch(function (ex) { // вызывается txtCity передавая в нее result(просто что бы увидеть что данные хоть как то можно юзать вне функции)
                    console.log('Ошибка получения данных', ex);
                });
        }

        getCurrentWeatherSync() { // Костыль по сути что бы хоть так реализовать задумку
            let data = fetch(this.fetchURL);
            return data;
        }


        txtCity(result) {
            //console.log(result);
            return result;
        }


    }