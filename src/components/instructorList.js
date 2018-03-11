import React, { Component } from 'react';

export default class InstructorList extends Component {

    //@TODO: pull instructors from Application state - MapStateToProps / Create a data store for list of instructors

    renderInstructors() {
        const { instructors } = this.props;
        return instructors.map((instructor, i) => {
            return (
                <li key={ i } className="cb-instructor-card">
                    <strong>{ instructor.name }</strong>
                </li>
            )
        })
    }

    render () {
        return (
            <ol>
                { this.renderInstructors() }
            </ol>
        )
    }
}
