import React, { Component } from 'react';
import HeroCard from './HeroCard/HeroCard';

export default class HeroList extends Component {
    render() {
        const newHeroes = this.props.heroes.map((hero, i) => {
            return <HeroCard key={i} data={hero} />;
        });

        return (
            <>
                <div className='container'>
                    <div className='row'>{newHeroes}</div>
                </div>
            </>
        );
    }
}
