import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeList extends Component {

    //i don't know if a local state is needed but I think it might save some typing if i can name the movie id here and call it elsewhere
    state = {
        movieId: null
    }

    componentDidMount() {
        //get the movie id from the passed props/params, store it in local state
        this.setState({
            movieId: this.props.match.params.movieId
        })



        // const { match: { params } } = this.props;

        // axios.get(`/api/users/${params.userId}`)
        //     .then(({ data: user }) => {
        //         console.log('user', user);

        //         this.setState({ user });
        //     });
    }


    render() {
        return (
            <div>
                <section className="details">

                </section>
            </div>
        );
    }
}

export default connect()(HomeList);
