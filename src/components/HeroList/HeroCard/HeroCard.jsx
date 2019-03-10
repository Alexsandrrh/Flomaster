import React, { Component } from 'react';

export default class HeroCard extends Component {
    render() {
        return (
            <div className='col-md-3'>
                <div className='card'>
                    <img
                        className='card-img-top'
                        alt='Card image cap'
                        src={this.props.data.img}
                    />
                    <div className='card-body'>
                        <p className='card-text'>{this.props.data.name}</p>
                    </div>
                </div>
            </div>
        );
    }
}
