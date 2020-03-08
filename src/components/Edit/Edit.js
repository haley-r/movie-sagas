import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

    state={genreArray:[]}

    getMovie = (movieId) => {
        this.props.dispatch({ type: "GET_MOVIE", payload: movieId });
    }

    backHome=()=>{
        this.props.history.push('/');
    }

    backToDetails=()=>{
        this.props.history.push(`/details/${this.props.match.params.movieId}`);
    }

    componentDidMount=()=> {
        //get the movie id from the passed props/params, GET movie data
        this.getMovie(this.props.match.params.movieId);
    }

    updateInformation=()=> {
        //eventually this will dispatch to initiate a put request
        console.log('in updateInformation');
    }

    render() {
        return (
            <div>
                <section className="edit">
                    <article className="edit">
                        <h2>Edit Movie Details</h2>
                        <div className="edit-form">
                            <label htmlFor="title-input">Title</label>
                            <input id="title-input" type="text" value={this.props.selectedMovie.title} />
                            <label htmlFor="description-input">Description</label>
                            <textarea id="description-input" type="text" value={this.props.selectedMovie.description} />
                            <button onClick={this.backToDetails}>Cancel Changes</button>
                            <button onClick={this.updateInformation}>Confirm Changes</button>
                        </div>
                    </article>
                    <button onClick={this.backHome}>BACK TO DATABASE</button>
                </section>
            </div>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    selectedMovie: reduxState.movie
})
export default connect(putReduxStateOnProps)(Edit);
