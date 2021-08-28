import React from 'react';
import Review from './Review';

export default class ReviewList extends React.Component {
    
    render() {
        return (
            <Review reviews={this.props.reviews} />
        );
    }

}