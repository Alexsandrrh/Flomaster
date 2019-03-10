import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <Link className='navbar-brand' to='/'>
                    {this.props.appName}
                </Link>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/HeroList'>
                                Hero List =>
                            </Link>
                        </li>
                        <li className='nav-item '>
                            <button
                                onClick={e => {
                                    this.onOpen(e);
                                }}
                            >
                                [Open Super Modal]
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

    onOpen(e) {
        e.preventDefault();

        if (this.props.onOpen) {
            this.props.onOpen();
        }
    }
}
