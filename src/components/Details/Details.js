import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    getMovie = (movieId) => {
        console.log('the movieId provided is', movieId);
        this.props.dispatch({ type: "GET_MOVIE", payload: movieId });
}

    componentDidMount() {
        //get the movie id from the passed props/params, GET movie data,
        //store movie object in localstate
        this.getMovie(this.props.match.params.movieId);
    }


    render() {
        return (
            <div>
                <section className="details">
                    <p>{JSON.stringify(this.props.selectedMovie)}</p>
                </section>
            </div>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    selectedMovie: reduxState.movie
})
export default connect(putReduxStateOnProps)(Details);
