/*

В файле WelcomeModal.js: реализуйте компонент WelcomeModal, 
который будет выводить перед пользователем приветственное окно после своего монтирования ( т.е. вызвать метод в componentDidMount() ) . 
При этом показ и скрытие модального окна должно регулироваться за счет изменения состояния this.state = {modal: false}. Добавьте в модальное окно кнопку закрытия

*/
import React from 'react';

export default class DisplayModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: false
        };

        this.addVzuh = this.addVzuh.bind(this); // Биндим контекст выполнения к контексту класса

        this.vzuhTitleRef = React.createRef();
        this.vzuhTxtRef = React.createRef();
    }

    addVzuh() { // Просто что бы ссылки попрактиковать, как передать данные отсюда скажем в Blog пока не понятно
        console.log('Вжух сохранен!');
        console.log(this.vzuhTitleRef.current.value);
        console.log(this.vzuhTxtRef.current.value);

        const blogPosts = [
            {title: 'Заголовок поста 1', txt: 'Содержимое поста 1'},
            {title: 'Заголовок поста 2', txt: 'Содержимое поста 2'},
            {title: 'Заголовок поста 3', txt: 'Содержимое поста 3'}
        ];

        const posts = [...blogPosts, {title: this.vzuhTitleRef.current.value, txt: this.vzuhTxtRef.current.value}]; // spread достань то что есть в state.posts и помести все в массив posts а в конце добавь еще vzuhTitleRef и vzuhTxtRef
        console.log(posts);
        this.setState({DisplayModal});
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps');
    // }

    render() {
        let modalView;
        if (this.state.display) {
            modalView =
            <div className = "ModalContainer">
                <div id="ModalWindow" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Вжух произведен!</h5>
                                <button onClick={() => {
                                    for (let i = 0; i < 11; i++) {
                                        setTimeout(function(){
                                            this.setState({display: !this.state.display}); //  this.setState({display: !this.state.display}) Поменяй значение у display на противоположное текущему его значению
                                        }.bind(this), i * 60);                                          
                                    } 
                                }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Здесь быть ему, окошку!
                                <input ref={this.vzuhTitleRef} className="form-control" type="text" placeholder="Заголовок"/>
                                <input ref={this.vzuhTxtRef} className="form-control" type="text" placeholder="Сообщение"/>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => {
                                    for (let i = 0; i < 11; i++) {
                                        setTimeout(function(){
                                            this.setState({display: !this.state.display}); //  this.setState({display: !this.state.display}) Поменяй значение у display на противоположное текущему его значению
                                        }.bind(this), i * 60);                                          
                                    } 
                                }} type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                                <button onClick={this.addVzuh} type="button" className="btn btn-primary">Сохранить #UC</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>;
        }

        return ( 
            <div>
                <button onClick={() => {
                    for (let i = 0; i < 11; i++) {
                        setTimeout(function(){
                            this.setState({display: !this.state.display}); //  this.setState({display: !this.state.display}) Поменяй значение у display на противоположное текущему его значению
                        }.bind(this), i * 60);                                          
                    } 
                }} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Сделай Вжух!</button>
                {modalView}
            </div>
        );
    }

    componentDidMount() {
        this.setState({display: false}); // по идейному воплощению окошко должно быть скрыто ^^
        console.log('componentDidMount');
    }

}