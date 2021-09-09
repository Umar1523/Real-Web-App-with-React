import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { allBooksSelector } from '../../reducers/books';
import AddBoookCtA from '../../ctas/AddBoookCtA';

const Dashboardpage = ({ isConfirmed, books }) => (
    <div>
       {!isConfirmed && <ConfirmEmailMessage />}
       {books.lenth === 0 && <AddBoookCtA />}     
    </div>
);

Dashboardpage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    books: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired).isRequired
}

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed,
        books: allBooksSelector(state)
    }
}

export default connect(mapStateToProps)(Dashboardpage);
