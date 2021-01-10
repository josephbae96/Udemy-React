import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import { render } from 'react-dom';

class StreamShow extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        if(!this.props.stream){
            return<div>...Loading...</div>
        }

        const { title, description } = this.props.stream;
        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return { stream: state.streams[ownProps.match.params.id]};
};

export default connect(
   mapStatetoProps , 
    { fetchStream }
    )(StreamShow);