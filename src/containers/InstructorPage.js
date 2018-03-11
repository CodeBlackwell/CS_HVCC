import React, { Component } from 'react';
import { connect } from 'react-redux';

import InstructorList from '../components/instructorList';
import { KEY as INSTRUCTOR_PAGE_KEY } from '../constants/instructorPage_constants';

class InstructorPage extends Component {
    render() {
        const { instructors: instructors1 } = this.props;
        {
            // Header
            // Nav
        }
        <InstructorList instructors={instructors1}/>
    }
}

const mapStateToProps = function (state) {
    //@formatter:off
    const {
        [INSTRUCTOR_PAGE_KEY]: {
            instructors
        }
    } = state;
    //@formatter:on
    return {
        instructors
    };
};

export default connect(mapStateToProps)(InstructorPage);