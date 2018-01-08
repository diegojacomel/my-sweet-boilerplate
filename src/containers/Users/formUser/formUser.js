import React, { Component } from 'react'
import { Form, Field, reduxForm } from 'redux-form'

class formUser extends Component {
    handleSubmit(e) {
        console.log(e)
    }

    render () {
        const { fields: {firstForm}, handleSubmit } = this.props
        return (
            <Form onSubmit={handleSubmit(this.handleSubmit)}>
                <Field
                name="firstForm"
                component="input"
                type="text"
                placeholder="First Form"
                {...firstForm} />
                <button type="submit">
                    Submit
                </button>
            </Form>
        )
    }
}

export default reduxForm({
    form: 'formUser',
    fields: ['firstForm']
})(formUser)