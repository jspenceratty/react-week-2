import ReactStars from 'react-rating-stars-component';
import React from 'react';

export default class Stars extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newRating: 0
        };
        this.ratingChanged = this.ratingChanged.bind(this);
    }

    ratingChanged(theNewRating) {
        this.setState({ newRating: theNewRating });
        console.log(theNewRating);
        console.log(this.state.newRating);
    }

    render() {
        return (
            <div>
                <h3>Ratings:</h3>
                <div style={{ marginLeft: '25px' }}>
                    <ReactStars
                        count={5}
                        onChange={this.ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                        value={this.props.rating}
                    />
                </div>
            </div>
        );
    }

}