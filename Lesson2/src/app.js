import React from 'react';
// Или так: import React, {Component} from 'react';
// > class App extends Component
import ReactDOM from 'react-dom';

// ДЗ2 (так же как в index.js)
import someDeveloper from './class';

console.log('Урок 2');

const newDeveloper = new someDeveloper('Вася', 28);
let devName = newDeveloper.name;
newDeveloper.displayName();
newDeveloper.displayAge();
// [END] второго ДЗ

// Создаем компонент App
class App extends React.Component {
    render() {
        return (
        <h2>Привет {devName}!</h2>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));