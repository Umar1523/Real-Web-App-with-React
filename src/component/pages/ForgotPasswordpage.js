import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';
import { connect } from 'react-redux';
import { resetPasswordRequest } from '../../actions/auth';


class ForgotPasswordpage extends React.Component {
    state = {
        success: false
    };

    submit = data =>
        this.props
            .resetPasswordRequest(data)
            .then(() => this.setState({ success: true }));

    render() {
        return (
            <div>
                {this.state.success ? (
                    <Message>Email has been sent.</Message>
                ): (
                    <ForgotPasswordForm submit={this.submit} />
                )}
            </div>
        )
    }
}

ForgotPasswordpage.propTypes = {
resetPasswordRequest: PropTypes.func.isRequired
}

export default connect(null, {resetPasswordRequest})(ForgotPasswordpage);
