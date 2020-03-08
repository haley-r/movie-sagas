import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

    state={genreArray:[]}

    getMovie = (movieId) => {
        this.props.dispatch({ type: "GET_MOVIE", payload: movieId });
    }

    // backHome=()=>{
    //     this.props.history.push('/');
    // }

    componentDidMount=()=> {
        //get the movie id from the passed props/params, GET movie data
        this.getMovie(this.props.match.params.movieId);
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
                            <button>Confirm Changes</button>
                        </div>
                    </article>
                    <button>Back to Details</button>
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
