import React from 'react';
import ReviewForm from './ReviewForm';
import Stars from './Stars';
import ReviewList from './ReviewList';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: this.props.reviews,
            whateverelse: ''
        };
        this.handleChildClick = this.handleChildClick.bind(this);
    }

    /*
    
    */

    componentDidMount() {
        /*console.log(this.state.reviews);*/

    }

    handleChildClick(childData) {

        /*alert(childData);*/
        this.setState(state => {
            state.reviews = childData;

            return state;

        }
        
        );
        
    }

    render() {
        return (
            <div>
                <h2>{this.props.movieName}</h2>
                <table style={{ marginLeft: '25px' }}>
                    <tbody>
                        <tr>
                            <td>Directed by: </td><td>{this.props.director}</td>
                        </tr>
                        <tr>
                            <td>Released:</td><td>{this.props.yearReleased}</td>
                        </tr>
                        <tr>
                            <td>Runtime:</td><td>{this.props.runTime}</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Synopsis:</h3>
                <div style={{ marginLeft: '25px' }}>
                    <label>{this.props.synopsis}</label>
                </div>
                <Stars rating={this.props.rating} />
                <h3>Reviews:</h3>
                <ReviewList reviews={this.state.reviews} />
                <ReviewForm reviews={this.state.reviews} onClick={this.handleChildClick} />
                <hr />
            </div>
        );
    }

}