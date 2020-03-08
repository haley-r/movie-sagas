import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    state={genreArray:[]}

    getMovie = (movieId) => {
        this.props.dispatch({ type: "GET_MOVIE", payload: movieId });
    }

    backHome=()=>{
        this.props.history.push('/');
    }

    componentDidMount=()=> {
        //get the movie id from the passed props/params, GET movie data,
        //store movie object in localstate
        this.getMovie(this.props.match.params.movieId);
        this.setState({
            genreArray: this.props.selectedMovie.genres
        })
    }

    render() {
        return (
            <div>
                <section className="details">
                    <article className="details editmode">
                        <h2>{this.props.selectedMovie.title}</h2>
                        <img src={this.props.selectedMovie.poster} alt={`movie poster for ${this.props.selectedMovie.title}`}/>
                        {
                            this.props.selectedMovie.genres ?
                                <ul>Genre: {this.props.selectedMovie.genres.map((genreString)=>
                                    <li>{genreString} </li>
                                )}</ul>
                                :
                                <p>{JSON.stringify(this.props.selectedMovie.genres)}</p>
                        }
                        <p>{this.props.selectedMovie.description}</p>
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
export default connect(putReduxStateOnProps)(Details);
