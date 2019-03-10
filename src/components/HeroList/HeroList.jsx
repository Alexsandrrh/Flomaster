import React, { Component } from 'react';
import HeroCard from './HeroCard/HeroCard';

export default class HeroList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            number : 25
        }
    }

    render() {
        const { photos } = this.props;
        const { number } = this.state;

        const newHeroes = photos.map((photo, i) => {
            if (i <= number) {
                return <HeroCard key={photo.id} data={photo} />;
            }
        });

        return (
            <>
                <div className='container'>
                    <div className='row'>{newHeroes}</div>
                    <button onClick={this.loadMore.bind(this)}>
                        MORE
                    </button>
                </div>
            </>
        );
    }

    loadMore () {
        this.setState({ number : this.state.number += 25})
    }
}
