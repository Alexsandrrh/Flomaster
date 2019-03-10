import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import HeroList from './components/HeroList/HeroList';
import Modal from './components/Common/Modal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appName: '[K]niga',
            heroes: [
                {
                    name: 'Олег',
                    img: 'https://vk.com/sticker/1-167-64-9-v1'
                },
                {
                    name: 'Федор',
                    img: 'https://vk.com/sticker/1-133-64-9'
                },
                {
                    name: 'Клубника',
                    img: 'https://vk.com/sticker/1-147-64-9'
                },
                {
                    name: 'Лимон',
                    img: 'https://vk.com/sticker/1-162-64-9-v1'
                },
                {
                    name: 'Дима',
                    img: 'https://vk.com/sticker/1-163-64-9'
                }
            ],
            isOpenModal : false
        };
    }

    openModal () {
        this.setState({isOpenModal: true});
    }

    closeModal () {
        this.setState({isOpenModal: false});
    }

    render() {
        return (
            <>
                <Navbar appName={this.state.appName} isOpen={this.state.isOpenModal} onOpen={this.openModal.bind(this)} />

                <Modal isOpen={this.state.isOpenModal} onClose={this.closeModal.bind(this)}>
                    <h1>Hello world!</h1>
                </Modal>

                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route
                        path='/HeroList'
                        render={() => <HeroList heroes={this.state.heroes} />}
                    />
                </Switch>
            </>
        );
    }


}

export default App;
