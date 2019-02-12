import {createStore} from 'redux';

const reducer = function() { // Функция изменяющая состояние стора

}

const store = createStore(reducer, 0); // первый аргумент то что будет изменять данные(2-й аргумент), состояние store(какие данные в себе будет хранить store(store.state))

store.subscribe(() => {
    console.log('store изменилось', store.getState());
});


store.dispatch({type: 'inc', payload: 1});