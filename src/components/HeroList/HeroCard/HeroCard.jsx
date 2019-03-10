import React, { Component } from 'react';

export default class HeroCard extends Component {
    render() {
        const {title, url, id} = this.props.data;

        return (
            <div className='col-md-3'>
                <div className='card'>
                    <img
                        className='card-img-top'
                        alt='Card image cap'
                        src={url}
                    />
                    <div className='card-body'>
                        <span>{id}</span>
                        <p className='card-text'>{title}</p>
                    </div>
                </div>
            </div>
        );
    }
}
