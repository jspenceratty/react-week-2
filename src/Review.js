import React from 'react';

export default class Review extends React.Component {
    
    /*
    componentDidMount() {
        console.log(this.props);
    }
    */
    

    render() {
        return (
            
                 <ul>
                    {this.props.reviews.map(function(txt){
                        return <li>{txt}</li>
                    })}
                </ul>
            
        );
    }

}
/*
{this.props.reviews.map(txt => { txt })}
*/