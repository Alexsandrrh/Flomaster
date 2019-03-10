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
            appName: 'Flomaster',
            photos: [],
            isOpenModal: false
        };
    }

    getDataPhotos() {
        fetch('http://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(photos => this.setState({ photos: photos }))
            .catch(err => console.error(err));
    }

    componentDidMount() {
        this.getDataPhotos();
    }

    openModal() {
        this.setState({ isOpenModal: true });
    }

    closeModal() {
        this.setState({ isOpenModal: false });
    }

    render() {
        const { appName, isOpenModal, photos } = this.state;

        return (
            <>
                <Navbar
                    appName={appName}
                    isOpen={isOpenModal}
                    onOpen={this.openModal.bind(this)}
                />

                <Modal
                    isOpen={isOpenModal}
                    onClose={this.closeModal.bind(this)}
                >
                    <h1 className='modal-h1'>We like Justin Bieber</h1>
                </Modal>

                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route
                        path='/HeroList'
                        render={() => <HeroList photos={photos} />}
                    />
                </Switch>
            </>
        );
    }
}

export default App;
