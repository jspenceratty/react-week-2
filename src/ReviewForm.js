import React from 'react';

export default class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            reviews: this.props.reviews,
            newReview: '',
            myValue: ''
        }
    }

    handleInput = event => {
        /*console.log(event.target.value);*/
        this.setState({ newReview: event.target.value });
    }

    handleClick() {
        const reviewList = this.state.reviews;
        reviewList.push(this.state.newReview);
        const obj = [this.state.newReview];
        this.setState({
            reviews: [...this.state.reviews, obj]
        });
        /*this.props.onClick(this.state.newReview);*/
        this.setState({newReview: ''});
        this.props.onClick(this.state.reviews);
    }



    render() {
        return (
            <div>
                <h3>Add Your Review: &nbsp;</h3>
                <input onChange={this.handleInput} style={{ width: "350px", marginLeft: '25px' }} placeholder="Enter your review here" value={this.state.newReview} />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}