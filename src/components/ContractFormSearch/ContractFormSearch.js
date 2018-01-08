import React, { Component } from 'react'
import { Form, Field, reduxForm } from 'redux-form'
import { Label, Button } from 'reactstrap'

import FormControl from '../../components/FormControl/FormControl'

import './ContractFormSearch.scss'


class ContractFormSearch extends Component {
    handleSubmit(e) {
        console.log(e)
    }

    render() {
        const { fields: {searchContract}, handleSubmit } = this.props

        return (
            <Form onSubmit={handleSubmit(this.handleSubmit)} className="ContractFormSearch">
                <div className="ContractFormSearch-search">
                    <FormControl display="block">
                        <Label htmlFor="searchContract">
                            Digite o CNPJ ou número do contrato:
                        </Label>
                        <Field 
                            name="searchContract"
                            placeholder="Digite aqui o número do contrato"
                            type="text"
                            component="input"
                            className="Field"
                            {...searchContract} />
                        <Button type="submit" color="default">
                            Pesquisar
                        </Button>
                    </FormControl>
                </div>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'ContractFormSearch',
    fields: ['searchContract']
})(ContractFormSearch)