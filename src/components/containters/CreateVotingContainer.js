import React from 'react';
import CreateVoting from "../CreateVoting";
import $ from 'jquery';

class CreateVoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.createVote = this.createVote.bind(this);
    }

    createVote(data) {
        $.ajax({
            url: 'http://localhost:8080/voter/voting/add',
            enctype: 'multipart/form-data',
            data: data,
            type: 'POST',
            processData: false,
            contentType: false,
            cache: false,
            success: () => {
                this.props.history.push('/');
            },
            error: () => {
                console.log('error');
            }
        });
    }

    render() {
        return(
            <CreateVoting createVoting={this.createVote}
                          history={this.props.history}/>
        );
    }
}

export default CreateVoteContainer;