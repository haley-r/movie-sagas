import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeList extends Component {
    //on load, get movies from db
    componentDidMount=()=>{
        this.props.dispatch({ type: "GET_MOVIES" });
    }

    goToDetails=()=>{
        console.log('clicked on movie poster');
    }

    render() {
        return (
            <section className="HomeList">
                <p>click on poster to view movie details</p>
                <div className="grid-container">
                    {this.props.reduxMovieState.map((movie)=>
                        <article className="MoviePreview" key={movie.id}>
                            <h2>{movie.title}</h2>
                            <button onClick={this.goToDetails} title={`see details about ${movie.title}`}>
                                <img src={movie.poster} alt={`movie poster for ${movie.title}`}/>
                            </button>
                        </article>
                    )}
                </div>
            </section>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxMovieState: reduxState.movies
})
export default connect(putReduxStateOnProps)(HomeList);
