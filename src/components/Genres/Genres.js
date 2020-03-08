import React from 'react';
import { connect } from 'react-redux';

    function Genres(props) {
        return (
            <div>
                <p>
                    genre component!
                    {JSON.stringify(props.genreArray)}
                </p>
            </div>
        );
    }

export default connect()(Genres);
