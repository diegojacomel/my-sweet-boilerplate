import React, { Component } from 'react'
import { Form, Field, reduxForm } from 'redux-form'
import { Label, Button } from 'reactstrap'

import FormControl from '../FormControl/FormControl'
import InputButton from '../InputButton/InputButton'

import './ContractFormSearch.scss'

const nineDigits = (value) => {
    if (!value) {
      return value
    }
  
    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.length <= 9) {
        return onlyNums
    }
    else {
        return 
    }

    return onlyNums
}

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
                            Digite o número do contrato:
                        </Label>
                        <InputButton>
                            <Field 
                                name="searchContract"
                                placeholder="Digite aqui o número do contrato"
                                type="text"
                                component="input"
                                className="Field"
                                normalize={nineDigits}
                                {...searchContract} />
                            <Button type="submit" color="default">
                                Pesquisar
                            </Button>
                        </InputButton>
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