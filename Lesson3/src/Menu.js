/*

Создайте меню навигации в Menu.js (компонент Menu). 
Извлеките данные из props (которые вы передадите из App.js), 
далее используйте их для задания ссылок (href) и названий пунктов меню

*/
import React from 'react';

export default class Menu extends React.Component{
    render() {
        console.log(this.props.menuTitle);
        //const items = this.props.items.map((item) => { // Создаем при помощи map новый массив items
            //return <li><a href={item.href}>{item.title}</a></li>
        //});
        return(
            <div><h4>{this.props.menuTitle}</h4>
                {/* <ul>{items}</ul> */}
            </div>
        );
    }
}