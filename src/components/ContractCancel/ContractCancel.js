import React, { Component } from 'react'
import { Form, reduxForm, Field } from 'redux-form'
import { Row, Col, Button, ButtonGroup, Label } from 'reactstrap'
import FormControl from '../FormControl/FormControl'

import './ContractCancel.scss'

class ContractCancel extends Component {
    render() {
        return (
            <div className="ContractCancel">
                <Form onSubmit={() => {return}}>
                    <ButtonGroup >
                        <Button>
                            Cancelar apenas contrato informado
                        </Button>
                        <Button>
                            Cancelar contrato informado e suas filiais
                        </Button>
                        <Button>
                            Cancelar contrato informado e todos os contratos do grupo
                        </Button>
                    </ButtonGroup>
                    <Row>
                        <Col lg="5">
                            <FormControl display="block">
                                <Label>
                                    Novo Contrato Mãe Matriz
                                </Label>
                                <Field
                                    name="ContratoMae"
                                    placeholder="Digite o número do contrato"
                                    component="input"
                                    type="text"
                                    className="Field" />
                            </FormControl>
                        </Col>
                        <Col lg="5">
                            <FormControl display="block">
                                <Label>
                                    Novo Contrato Mãe Matriz
                                </Label>
                                <Field
                                    name="ContratoMae"
                                    placeholder="Digite o número do contrato"
                                    component="input"
                                    type="text"
                                    className="Field" />
                            </FormControl>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="5">
                            <FormControl display="block">
                                <Label>
                                    Novo Contrato Mãe Matriz
                                </Label>
                                <Field
                                    name="ContratoMae"
                                    placeholder="Digite o número do contrato"
                                    component="input"
                                    type="text"
                                    className="Field" />
                            </FormControl>
                        </Col>
                        <Col lg="5">
                            <FormControl display="block">
                                <Label>
                                    Novo Contrato Mãe Matriz
                                </Label>
                                <Field
                                    name="ContratoMae"
                                    placeholder="Digite o número do contrato"
                                    component="input"
                                    type="text"
                                    className="Field" />
                            </FormControl>
                        </Col>
                    </Row>
                    <Button color="warning">Cancelar contrato</Button>
                </Form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'ContractCancel'
})(ContractCancel)